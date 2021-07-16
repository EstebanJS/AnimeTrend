import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TrendingSlider from "./components/TrendingSlider";
import PopularSlider from "./components/PopularSlider";
import HighestRatedSlider from "./components/HighestRatedSlider";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <TrendingSlider />
        <PopularSlider />
        <HighestRatedSlider />
      </main>
      <Footer />
    </>
  );
};

export default App;
