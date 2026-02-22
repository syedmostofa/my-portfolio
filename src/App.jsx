import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <>
      <Navbar />

      {/* Placeholder sections — we'll build these out in coming steps */}
      <main>
        <section id="about"      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>Hero / About — coming in Step 3</section>
        <section id="skills"     style={{ minHeight: '60vh',  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>Skills — coming soon</section>
        <section id="experience" style={{ minHeight: '60vh',  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>Experience — coming soon</section>
        <section id="education"  style={{ minHeight: '60vh',  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>Education — coming soon</section>
        <section id="contact"    style={{ minHeight: '60vh',  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)' }}>Contact — coming soon</section>
      </main>
    </>
  );
}

export default App;
