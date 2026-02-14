import Navbar from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Education from "../components/portfolio/Education";
import Projects from "../components/portfolio/Projects";
import Experience from "../components/portfolio/Experience";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";

export default function Portfolio(){
  return (
    <div className="bg-amber-50 dark:bg-gray-900 text-gray-900 dark:text-white">

      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>

    </div>
  );
}
