import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import Home from "./Home";
import NewestJob from "./NewestJob";
import CareerJourney from "./CareerJourney";
import BlogSection from "./BlogSection";
import Footer from "./Footer";

function Landing() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (hash) {
      setTimeout(() => {
        scroller.scrollTo(hash, {
          duration: 600,
          smooth: true,
          offset: -60,
        });
      }, 100); // Delay to ensure page has rendered
    }
  }, [location]);

  return (
    <div>
      <section id="home">
        <Home />
      </section>

      <section id="jobs">
        <NewestJob />
      </section>

      <section id="guiding">
        <CareerJourney />
      </section>

      <section id="blog">
        <BlogSection />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default Landing;
