import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Cocktails gratuits",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, sit.",
      },
      {
        icon: <FaHiking />,
        title: "Randonnée sans fin",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, sit.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Navette gratuite",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, sit.",
      },
      {
        icon: <FaBeer />,
        title: "La bière la plus délicieuse",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, sit.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Nos services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title} </h6>
                <p>{item.info} </p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
