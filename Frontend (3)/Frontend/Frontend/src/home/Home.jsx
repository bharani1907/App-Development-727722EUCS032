import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Review from  "../components/Review";
import Footer from "../components/Footer";
import Freebook from "../components/Freebook";
import Statistics from "../components/Statistics";
import Gallery from "../components/Gallery";
import Video from "../components/Video";
import Team from "../Team";
import Faq from "../components/Faq";

function Home() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Freebook/>
      <Team/>
      <Statistics/>
      <Gallery/>
      <Video/>
      <Faq/>
      <Footer />
    </div>
  );
}

export default Home;
