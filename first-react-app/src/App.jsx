import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import Projects from "./Component/Projects";

function App() {
  return (
    <div>
      <Header />
      <section id="about" className="py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg">
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
