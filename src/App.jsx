import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import Skills     from './components/Skills';
import Experience from './components/Experience';
import Education  from './components/Education';
import Contact    from './components/Contact';
import Footer     from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
