import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  //componentDidMount(){}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> aucune chambre de ce genre ne peut être trouvée...</h3>
          <Link to="/rooms" className="btn-primary">
            retour aux chambres
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              retour aux chambres
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Détails</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>prix:DnT {price}</h6>
              <h6>Taille:{size} m²</h6>
              <h6>
                Capacité maximale :{" "}
                {capacity > 1
                  ? `${capacity} personnes`
                  : `${capacity} une personne`}
              </h6>
              <h6> {pets ? "animaux acceptés" : "animaux non acceptés"} </h6>
              <h6> {breakfast && "petit déjeuner gratuit inclus"} </h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Suppléments</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
