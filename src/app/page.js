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

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Impact/>
      {/* <Influencers/> */}
      {/* <Universities/> */}
      <WhyToAttend/>
      <HowToAttend/>
      <Faqs/>
      <Footer/>
    </div>
  );
}
