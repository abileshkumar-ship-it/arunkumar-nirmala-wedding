import { ChevronDown } from 'lucide-react';
import weddingData from '../data/weddingData';
import { Flower, FloralCorner } from './Floral';

const SPARKLES = [
  { top: '22%', left: '14%', delay: '0s' },
  { top: '34%', left: '82%', delay: '1.2s' },
  { top: '62%', left: '9%', delay: '2.1s' },
  { top: '70%', left: '88%', delay: '0.6s' },
  { top: '48%', left: '50%', delay: '1.8s' },
];

export default function Hero() {
  const { couple, verse, invitationMessage, date } = weddingData;

  return (
    <header id="home" className="hero">
      <FloralCorner position="tl" />
      <FloralCorner position="tr" />
      <FloralCorner position="bl" className="floral-corner--small" />
      <FloralCorner position="br" className="floral-corner--small" />

      {SPARKLES.map((s, i) => (
        <span key={i} className="sparkle" style={{ top: s.top, left: s.left, animationDelay: s.delay }} aria-hidden="true" />
      ))}

      <div className="hero__content">
        <p className="hero__eyebrow anim-up" style={{ animationDelay: '0.1s' }}>
          Praise the Lord
        </p>

        <blockquote className="hero__verse anim-up" style={{ animationDelay: '0.3s' }}>
          <p>“{verse.text}”</p>
          <footer>— {verse.reference}</footer>
        </blockquote>

        <p className="hero__message anim-up" style={{ animationDelay: '0.5s' }}>
          {invitationMessage}
        </p>

        <p className="hero__label anim-up" style={{ animationDelay: '0.7s' }}>
          Together with our families
        </p>

        <h1 className="hero__names">
          <span className="hero__name anim-up" style={{ animationDelay: '0.9s' }}>
            <span className="hero__script">{couple.groom.name}</span>
            <span className="hero__aka">also known as {couple.groom.aka}</span>
          </span>

          <span className="hero__and anim-up" style={{ animationDelay: '1.1s' }} aria-hidden="true">
            <span className="hero__and-line" />
            <Flower size={64} petals={8} className="hero__flower" />
            <span className="hero__and-line" />
          </span>
          <span className="visually-hidden"> and </span>

          <span className="hero__name anim-up" style={{ animationDelay: '1.3s' }}>
            <span className="hero__script">{couple.bride.name}</span>
            <span className="hero__aka">also known as {couple.bride.aka}</span>
          </span>
        </h1>

        <p className="hero__date anim-up" style={{ animationDelay: '1.5s' }}>
          <time dateTime="2027-01-12">{date.display}</time>
        </p>
      </div>

      <a href="#countdown" className="hero__scroll" aria-label="Scroll down to the countdown">
        <span>Scroll</span>
        <ChevronDown size={22} />
      </a>
    </header>
  );
}
