import React from "react";
import Banner from "../components/Banner";
import KasaCards from "../components/KasaCards";

const Home = () => {
  //const currentPage = "/";
  return (
    <div>
      <Banner title="Portofolio Ruben Kraan" class="homeBackground" />
      <KasaCards />
    </div>
  );
};

export default Home;
