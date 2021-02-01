import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

export default function WithError() {
  return (
    <Hero>
      <Banner title="404" subtitle="Page non trouvée">
        <Link to="/" className="btn-primary">
          Rentrer à l'accueil
        </Link>
      </Banner>
    </Hero>
  );
}
