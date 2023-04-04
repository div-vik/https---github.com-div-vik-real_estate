import React from "react";
import Hero from "../../components/Hero/Hero";
import PopularProperties from "../../components/PopularProperties/PopularProperties";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularProperties />
      <FeaturedProperties />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
