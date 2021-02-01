import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import RoomsContainer from "../components/RoomsContainer";

function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Notre Chambres">
          <Link to="/" className="btn-primary">
            Rentrer à l'accueil
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
}

export default Rooms;
