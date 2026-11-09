import { useEffect, useState } from 'react';
import { Container, Nav, Navbar as BsNavbar } from 'react-bootstrap';
import weddingData from '../data/weddingData';

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <BsNavbar
      expand="md"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`site-nav ${scrolled || expanded ? 'site-nav--solid' : ''}`}
    >
      <Container>
        <BsNavbar.Brand href="#home" className="site-nav__brand" onClick={() => setExpanded(false)}>
          A <span aria-hidden="true">&amp;</span>
          <span className="visually-hidden">and</span> N
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="main-nav" aria-label="Toggle navigation menu" />
        <BsNavbar.Collapse id="main-nav">
          <Nav className="ms-auto" onSelect={() => setExpanded(false)}>
            {weddingData.navLinks.map((link) => (
              <Nav.Link key={link.id} href={`#${link.id}`} className="site-nav__link">
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
