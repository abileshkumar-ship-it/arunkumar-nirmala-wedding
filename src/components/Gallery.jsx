import { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import { ZoomIn } from 'lucide-react';
import weddingData from '../data/weddingData';
import Reveal from './Reveal';
import { GoldDivider } from './Floral';

export default function Gallery() {
  const { poster } = weddingData;
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <section id="invitation" className="section section--lilac" aria-labelledby="invitation-title">
      <Container>
        <Reveal className="text-center">
          <p className="section__eyebrow">Our invitation</p>
          <h2 id="invitation-title" className="section__title">
            The Wedding Invitation
          </h2>
          <GoldDivider />
        </Reveal>

        <Reveal className="poster-wrap" delay={100}>
          {failed ? (
            <p className="poster-missing" role="alert">
              The invitation image could not be loaded. Please add it as <code>public/wedding-invitation.png</code>.
            </p>
          ) : (
            <button
              type="button"
              className="poster-btn"
              onClick={() => setOpen(true)}
              aria-label="View the invitation poster in a larger size"
            >
              <img
                src={poster.src}
                alt={poster.alt}
                loading="lazy"
                decoding="async"
                className="poster-img"
                onError={() => setFailed(true)}
              />
              <span className="poster-btn__hint">
                <ZoomIn size={18} aria-hidden="true" /> Tap to enlarge
              </span>
            </button>
          )}
        </Reveal>
      </Container>

      <Modal show={open} onHide={() => setOpen(false)} centered size="lg" contentClassName="lightbox">
        <Modal.Header closeButton closeVariant="white" className="lightbox__header">
          <Modal.Title className="visually-hidden">Wedding invitation poster</Modal.Title>
        </Modal.Header>
        <Modal.Body className="lightbox__body">
          <img src={poster.src} alt={poster.alt} className="lightbox__img" />
        </Modal.Body>
      </Modal>
    </section>
  );
}
