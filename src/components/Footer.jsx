import { Heart } from 'lucide-react';
import weddingData from '../data/weddingData';

export default function Footer() {
  const { couple, date } = weddingData;
  return (
    <footer className="site-footer">
      <Heart size={20} aria-hidden="true" className="site-footer__heart" />
      <p className="site-footer__names">{couple.pairShort}</p>
      <p className="site-footer__date">{date.display}</p>
      <p className="site-footer__praise">Praise the Lord</p>
    </footer>
  );
}
