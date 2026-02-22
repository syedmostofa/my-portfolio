import { useEffect, useRef } from 'react';
import { RiArrowDownLine, RiGithubFill, RiLinkedinFill, RiMailLine } from 'react-icons/ri';
import './Hero.css';

export default function Hero() {
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!blobRef.current) return;
      const { clientX: x, clientY: y } = e;
      blobRef.current.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="about" className="hero">

      {/* Ambient background blob */}
      <div className="hero__blob" ref={blobRef} />
      <div className="hero__grid-overlay" />

      <div className="container hero__inner">

        {/* Left — Text content */}
        <div className="hero__content">
          <p className="hero__greeting">Hey there, I'm</p>

          <h1 className="hero__name">
            Syed Mostofa<br />
            <span className="hero__name-accent">Moosa</span><span className="hero__name-dot">.</span>
          </h1>

          <h2 className="hero__role">
            <span className="hero__role-text">Founder, Medical Practice Growth Specialist.</span>
          </h2>

          <p className="hero__bio">
            I build thoughtful, performant web experiences and digital marketing services for doctors so that they attract more patients online. Based in{' '}
            <span className="hero__bio-highlight">Sylhet & Northville</span>, open to remote
            projects worldwide.
          </p>

          {/* CTAs */}
          <div className="hero__actions">
            <a href="#contact" className="hero__btn hero__btn--primary">
              Get in touch
            </a>
            <a href="#experience" className="hero__btn hero__btn--ghost">
              View my work
            </a>
          </div>

          {/* Social links */}
          <div className="hero__socials">
            <a href="https://x.com/syedfromsylhet" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="Twitter">
              <RiGithubFill size={20} />
            </a>
            <a href="https://www.linkedin.com/in/smostofamoosa/" target="_blank" rel="noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <RiLinkedinFill size={20} />
            </a>
            <a href="mailto:syed@intelligencysolutions.com" className="hero__social-link" aria-label="Email">
              <RiMailLine size={20} />
            </a>
            <span className="hero__social-line" />
          </div>
        </div>

        {/* Right — Avatar */}
        <div className="hero__avatar-wrap">
          <div className="hero__avatar-ring" />
          <div className="hero__avatar">
            <span className="hero__avatar-initials">SMM</span>
          </div>
          {/* Floating badges */}
          <div className="hero__badge hero__badge--1">⚡ Open to work</div>
          <div className="hero__badge hero__badge--2">🚀 5+ Projects</div>
        </div>

      </div>

      {/* Scroll cue */}
      <a href="#skills" className="hero__scroll-cue" aria-label="Scroll down">
        <RiArrowDownLine size={20} />
      </a>
    </section>
  );
}