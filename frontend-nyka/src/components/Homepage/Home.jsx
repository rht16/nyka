import { React } from "react";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Slider } from "./Slider";
// import
import { Sliderdown } from "./Sliderdown";
import { Spot } from "./Spot";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Sliderdown />
      <Spot />
      <Footer />
    </div>
  );
};

export { Home };
