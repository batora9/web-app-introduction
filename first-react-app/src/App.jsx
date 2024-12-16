import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import Projects from "./Component/Projects";

function App() {
  return (
    <div>
      <Header />
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Me</h2>
          <p className="text-center">
            Hello! I am a web developer with a passion for creating beautiful
            and functional websites.
          </p>
        </div>
      </section>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
