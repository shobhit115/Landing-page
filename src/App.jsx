import Header from "./components/Header";
import Hero from "./components/Hero";
export default function App() {
  return (
    <main>
      <img className="absolute top-0 right-0 opacity-40 -z-10" src="\gradient.png" alt="Gradient" />
      <Header/>
      <Hero />
    </main>
  )
}
