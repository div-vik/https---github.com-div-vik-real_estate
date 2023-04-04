import React from "react";
import Hero from "../../components/Hero/Hero";
import PopularProperties from "../../components/PopularProperties/PopularProperties";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularProperties />
      <FeaturedProperties />
    </div>
  );
};

export default Home;
