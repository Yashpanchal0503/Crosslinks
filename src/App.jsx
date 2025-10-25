import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import AboutUs from "./Components/AboutUs";
import Events from "./Components/Events";
import Gallery from "./Components/Gallery";
import WordsFromCore from "./Components/WordsFromCore";
import ContactUs from "./Components/contactUs";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  return (
    <>
      <Navbar items={["HOME", "ABOUT US", "EVENT", "CONTACT"]} />
      <LandingPage />
      <AboutUs />
      <Events />
      <Gallery />
      <WordsFromCore/>
      <ContactUs />
    </>
  );
};

export default App;
