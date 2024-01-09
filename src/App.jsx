import React, { useState, useEffect } from "react";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import StayProductive from "./pages/StayProductive";
import Testimonials from "./pages/Testimonials";
import GetEarlyAccess from "./pages/GetEarlyAccess";
import InappropriateSize from "./pages/InappropriateSize";
import Footer from "./components/Footer";

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
