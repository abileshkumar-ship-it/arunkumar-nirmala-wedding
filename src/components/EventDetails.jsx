import { useState } from 'react';
import { CalendarPlus, Church, Clock, MapPin, PartyPopper, CalendarDays } from 'lucide-react';
import { Col, Container, Row } from 'react-bootstrap';
import weddingData from '../data/weddingData';
import { downloadIcs } from '../utils/calendar';
import Reveal from './Reveal';
import { CardCorner, GoldDivider } from './Floral';

function EventCard({ event, Icon, delay }) {
  return (
    <Reveal as="article" delay={delay} className="event-card h-100">
      <CardCorner position="tl" />
      <CardCorner position="br" />
      <span className="event-card__icon" aria-hidden="true">
        <Icon size={34} strokeWidth={1.5} />
      </span>
      <h3 className="event-card__title">{event.title}</h3>

      <ul className="event-card__list">
        <li>
          <CalendarDays size={18} aria-hidden="true" />
          <span>{event.date}</span>
        </li>
        <li>
          <Clock size={18} aria-hidden="true" />
          <span>{event.time}</span>
        </li>
        <li>
          <MapPin size={18} aria-hidden="true" />
          <span>
            <strong>{event.venue}</strong>
            {event.address && <small>{event.address}</small>}
          </span>
        </li>
      </ul>

      <p className="event-card__desc">{event.description}</p>
    </Reveal>
  );
}

export default function EventDetails() {
  const { ceremony, reception } = weddingData.events;
  const [calendarStatus, setCalendarStatus] = useState('');

  const handleCalendar = () => {
    const ok = downloadIcs();
    setCalendarStatus(
      ok
        ? 'Your calendar file has been downloaded. Open it to import the event into your calendar app.'
        : 'Sorry, the calendar file could not be created. Please try again.'
    );
  };

  return (
    <section id="events" className="section" aria-labelledby="events-title">
      <Container>
        <Reveal className="text-center">
          <p className="section__eyebrow">You are invited</p>
          <h2 id="events-title" className="section__title">
            Our Special Day
          </h2>
          <GoldDivider />
        </Reveal>

        <Row className="g-4 g-lg-5 justify-content-center">
          <Col xs={12} md={6} lg={5}>
            <EventCard event={ceremony} Icon={Church} delay={0} />
          </Col>
          <Col xs={12} md={6} lg={5}>
            <EventCard event={reception} Icon={PartyPopper} delay={150} />
          </Col>
        </Row>

        <Reveal className="text-center mt-5" delay={100}>
          <button type="button" className="btn-royal" onClick={handleCalendar}>
            <CalendarPlus size={20} aria-hidden="true" />
            Add to Calendar
          </button>
          <p className="calendar-status" role="status" aria-live="polite">
            {calendarStatus || 'Downloads a calendar (.ics) file that you can import into your calendar app.'}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
