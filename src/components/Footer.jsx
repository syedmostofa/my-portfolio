import { RiGithubFill, RiLinkedinFill, RiMailLine, RiHeartFill } from 'react-icons/ri';
import './Footer.css';

const socials = [
  
  { icon: <RiLinkedinFill size={18} />, href: 'https://linkedin.com/in/smostofamoosa',      label: 'LinkedIn' },
  { icon: <RiMailLine size={18} />,     href: 'mailto:syed@intelligencysolutions.com',                      label: 'Email'    },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {2026} Syed Mostofa Moosa. Built with{' '}
          <RiHeartFill size={12} className="footer__heart" />{' '}
          using React & Vite.
        </p>
        <div className="footer__socials">
          {socials.map(s => (
          <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={s.label} className="footer__social">
            {s.icon}
          </a>
        ))}
        </div>
      </div>
    </footer>
  );
}