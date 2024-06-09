"use client";
import Faqs from "./components/Faqs/Faqs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HowToAttend from "./components/HowToAttend/HowToAttend";
import Impact from "./components/Impact/Impact";
import Influencers from "./components/Influencers/Influencers";
import Universities from "./components/Universities/Universities";
import WhyToAttend from "./components/WhyToAttend/WhyToAttend";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import HamburgerScreen from "./components/HamburgerScreen/HamburgerScreen";

export default function Home() {
  const [toggleHam, setToggleHam] = useState(false);

  return (
    <div>
      <Header toggleHam={toggleHam} setToggleHam={setToggleHam} />
      <Hero />
      <Impact />
      {/* <Influencers/> */}
      {/* <Universities/> */}
      <WhyToAttend />
      <HowToAttend />
      <Faqs />
      <Footer />
    </div>
  );
}
