import Navbar from './components/Navbar';
import Hero   from './components/Hero';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="skills"     style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>Skills — coming soon</section>
        <section id="experience" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>Experience — coming soon</section>
        <section id="education"  style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>Education — coming soon</section>
        <section id="contact"    style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>Contact — coming soon</section>
      </main>
    </>
  );
}

export default App;
