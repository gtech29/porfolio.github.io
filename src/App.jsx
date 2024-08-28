
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import TechStack from "./components/TechStack/TechStack";
import ContactForm from "./components/Footer/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
      <TechStack />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
