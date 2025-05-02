import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/AppContext";
import Hero from "./components/Hero";
import ProjectsWithBoxModel from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

const App = () => {
  const { isOpen, setIsOpen } = useContext(AppContext);

  return (
    <div
      onClick={() => isOpen && setIsOpen(!isOpen)}
      className="min-h-screen bg-[#121212]"
    >
      <Navbar />
      <Hero />
      <About />
      <ProjectsWithBoxModel />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
