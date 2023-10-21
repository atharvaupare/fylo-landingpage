import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import StayProductive from "./components/StayProductive";
import Testimonials from "./components/Testimonials";
import GetEarlyAccess from "./components/GetEarlyAccess";
import Footer from "./components/Footer";
import InappropriateSize from "./components/InappropriateSize";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="font-raleway">
      {windowSize >= 1024 || windowSize < 768 ? (
        <>
          <Hero />
          <Services />
          <StayProductive />
          <Testimonials />
          <GetEarlyAccess />
          <Footer />
        </>
      ) : (
        <InappropriateSize />
      )}
    </div>
  );
}

export default App;
