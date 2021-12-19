import { React } from "react";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
 import  Homeslider  from "./Homeslider";
// import
import { Sliderdown } from "./Sliderdown";
import { Spot } from "./Spot";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Homeslider />
      <Sliderdown />
      <Spot />
      <Footer />
    </div>
  );
};

export { Home };
