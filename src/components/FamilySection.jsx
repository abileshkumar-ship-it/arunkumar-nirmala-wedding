import { Col, Container, Row } from 'react-bootstrap';
import weddingData from '../data/weddingData';
import Reveal from './Reveal';
import { CardCorner, GoldDivider } from './Floral';

function FamilyCard({ family, delay }) {
  return (
    <Reveal as="article" delay={delay} className="family-card h-100">
      <CardCorner position="tl" />
      <CardCorner position="tr" />
      <h3 className="family-card__title">{family.title}</h3>
      <div className="family-card__rule" aria-hidden="true" />

      <dl className="family-card__list">
        {family.members.map((member) => (
          <div key={member.label} className="family-card__group">
            <dt>{member.label}</dt>
            {member.names.map((name) => (
              <dd key={name}>{name}</dd>
            ))}
            {member.note && <dd className="family-card__note">{member.note}</dd>}
          </div>
        ))}
      </dl>
    </Reveal>
  );
}

export default function FamilySection() {
  const { groom, bride } = weddingData.families;

  return (
    <section id="family" className="section section--lilac" aria-labelledby="family-title">
      <Container>
        <Reveal className="text-center">
          <p className="section__eyebrow">With the blessings of</p>
          <h2 id="family-title" className="section__title">
            Our Families
          </h2>
          <GoldDivider />
        </Reveal>

        <Row className="g-4 g-lg-5 justify-content-center">
          <Col xs={12} md={6} lg={5}>
            <FamilyCard family={groom} delay={0} />
          </Col>
          <Col xs={12} md={6} lg={5}>
            <FamilyCard family={bride} delay={150} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
