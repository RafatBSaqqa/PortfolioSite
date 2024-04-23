import "./App.css";
import { Navbar } from "./components/Navbar/index";
import Hero from "./components/Hero/index";
import Skills from "./components/Skills/index";


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills/>
      </div>
    </>
  );
}

export default App;
