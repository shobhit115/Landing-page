import Header from "./components/Header";
import Hero from "./components/Hero";
import gradient from "./assets/gradient.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function App() {

  useEffect(() => {
    AOS.init({ duration: 1500,
    once: true });
     });
  return (
    <main>
    
      <img className="absolute top-0 right-0 opacity-40 -z-10" src={gradient} alt="Gradient" />
      <Header/>
      <Hero />
    </main>
  )
}
