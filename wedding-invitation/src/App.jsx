import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import FamilySection from './components/FamilySection';
import VenueMap from './components/VenueMap';
import Gallery from './components/Gallery';
import ClosingSection from './components/ClosingSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <EventDetails />
        <FamilySection />
        <VenueMap />
        <Gallery />
        <ClosingSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
