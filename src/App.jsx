import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>

      {/* <Services/> */}
    </>
  );
}

export default App;
