import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import gradient from "./assets/gradient.png";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <main>
      <img
        className="absolute top-0 right-0 opacity-40 -z-10"
        src={gradient}
        alt="Gradient"
      />
      <Header />
      <Hero />
      <About />
      <Schedule />
      {/* <Contact/> */}
      <Footer/>
    </main>
  );
}
