import React from "react";
import Header from "@components/Header";
import TrendingSlider from "@components/TrendingSlider";
import PopularSlider from "@components/PopularSlider";
import HighestRatedSlider from "@components/HighestRatedSlider";
import Footer from "@components/Footer";
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section className="main">
          <TrendingSlider />
          <PopularSlider />
          <HighestRatedSlider />
        </section>
        <Sidebar/>
      </main>

      <Footer />
    </>
  );
};

export default App;
