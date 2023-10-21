import Hero from "./components/Hero";
import Services from "./components/Services";
import StayProductive from "./components/StayProductive";
import Testimonials from "./components/Testimonials";
import GetEarlyAccess from "./components/GetEarlyAccess";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="font-raleway">
        <Hero />
        <Services />
        <StayProductive />
        <Testimonials />
        <GetEarlyAccess />
        <Footer />
      </div>
    </>
  );
}

export default App;
