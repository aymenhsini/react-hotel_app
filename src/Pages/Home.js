import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import Hero from "../components/Hero";
import Services from "../components/Services";

function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Chambres luxueuses"
          subtitle="chambres de luxe à partir de 299 TnD"
        >
          <Link to="/rooms" className="btn-primary">
            Notre chambres
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}

export default Home;
