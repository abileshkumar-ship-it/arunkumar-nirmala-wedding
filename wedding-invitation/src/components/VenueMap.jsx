import { Navigation, MapPin } from 'lucide-react';
import { Container } from 'react-bootstrap';
import weddingData from '../data/weddingData';
import Reveal from './Reveal';
import { GoldDivider } from './Floral';

export default function VenueMap() {
  const { venueMap, events } = weddingData;

  return (
    <section id="venue" className="section" aria-labelledby="venue-title">
      <Container>
        <Reveal className="text-center">
          <p className="section__eyebrow">Wedding Reception · {events.reception.time}</p>
          <h2 id="venue-title" className="section__title">
            Reception Venue
          </h2>
          <GoldDivider />
        </Reveal>

        <Reveal className="venue-card" delay={100}>
          <div className="venue-card__info">
            <span className="venue-card__pin" aria-hidden="true">
              <MapPin size={30} strokeWidth={1.5} />
            </span>
            <h3 className="venue-card__name">{venueMap.name}</h3>
            <address className="venue-card__address">{venueMap.address}.</address>
            <a
              className="btn-royal"
              href={venueMap.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation size={20} aria-hidden="true" />
              Get Directions
            </a>
          </div>

          <div className="venue-card__map">
            <iframe
              title={`Google Map showing ${venueMap.name}`}
              src={venueMap.embedUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <p className="text-center venue-note">
          The wedding ceremony will be held at <strong>{events.ceremony.venue}</strong> at {events.ceremony.time}.
        </p>
      </Container>
    </section>
  );
}
