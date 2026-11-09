import weddingData from '../data/weddingData';
import Reveal from './Reveal';
import { FloralCorner, GoldDivider } from './Floral';

export default function ClosingSection() {
  const { couple, date, events, closingMessage, blessing, finalLine } = weddingData;

  return (
    <section id="closing" className="section closing" aria-labelledby="closing-title">
      <FloralCorner position="tl" className="floral-corner--small" />
      <FloralCorner position="tr" className="floral-corner--small" />
      <FloralCorner position="bl" className="floral-corner--small" />
      <FloralCorner position="br" className="floral-corner--small" />

      <div className="container text-center closing__inner">
        <Reveal>
          <GoldDivider />
          <h2 id="closing-title" className="closing__title">
            {closingMessage}
          </h2>
          <p className="closing__blessing">{blessing}</p>
          <GoldDivider />
        </Reveal>

        <Reveal delay={150}>
          <p className="closing__names">
            {couple.groom.name} <span aria-hidden="true">&amp;</span>
            <span className="visually-hidden">and</span> {couple.bride.name}
          </p>
          <p className="closing__date">
            {date.full} · Reception at {events.reception.time}
          </p>
          <p className="closing__final">{finalLine}</p>
        </Reveal>
      </div>
    </section>
  );
}
