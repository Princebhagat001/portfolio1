import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Services from './components/Services'
import BookingSteps from './components/BookingSteps'
import RentalPackages from './components/RentalPackages'
import Fleet from './components/Fleet'
import Recommendations from './components/Recommendations'
import FAQs from './components/FAQs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import { isValidRoute } from './utilis/routeValidation'
import { applyOpenGraph, notFoundOpenGraph } from './utilis/opengraph'

const homeTitle = 'Bhagat Tour and Travels | Car Rental & Travel Agency in Lahan, Siraha';
const homeDescription = 'Looking for car rental in Lahan, Siraha? Bhagat Tour and Travels is a travel agency offering driver-based vehicle hire across Koshi, Madhesh, and Bagmati. Call 9804732000.';
const homeOpenGraph = {
  'og:type': 'website',
  'og:url': 'https://bhagattourandtravels.com.np/',
  'og:title': homeTitle,
  'og:description': homeDescription,
  'og:image': 'https://bhagattourandtravels.com.np/og-image.png',
  'og:image:alt': 'Bhagat Tour and Travels vehicle hire in Lahan, with the owner and contact details',
};

export default function App() {
  const [location, setLocation] = useState(() => ({
    pathname: window.location.pathname,
    hash: window.location.hash,
  }));
  const validRoute = isValidRoute(location.pathname, location.hash);

  useEffect(() => {
    const updateLocation = () => setLocation({
      pathname: window.location.pathname,
      hash: window.location.hash,
    });
    window.addEventListener('hashchange', updateLocation);
    window.addEventListener('popstate', updateLocation);
    return () => {
      window.removeEventListener('hashchange', updateLocation);
      window.removeEventListener('popstate', updateLocation);
    };
  }, []);

  // Force scroll to top when the website is refreshed
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const description = document.querySelector('meta[name="description"]');
    const robots = document.querySelector('meta[name="robots"]');

    if (validRoute) {
      document.title = homeTitle;
      description?.setAttribute('content', homeDescription);
      robots?.setAttribute('content', 'index, follow');
      applyOpenGraph(homeOpenGraph);
      if (!document.querySelector('link[rel="canonical"]')) {
        const canonical = document.createElement('link');
        canonical.rel = 'canonical';
        canonical.href = homeOpenGraph['og:url'];
        document.head.append(canonical);
      }
      return;
    }

    applyOpenGraph(notFoundOpenGraph(location.pathname + location.hash));
    document.title = 'Page Not Found | Bhagat Tour and Travels';
    description?.setAttribute('content', 'This page could not be found on the Bhagat Tour and Travels website.');
    document.querySelector('link[rel="canonical"]')?.remove();
    robots?.setAttribute('content', 'noindex, nofollow');
  }, [validRoute, location.pathname, location.hash]);

  if (!validRoute) return <NotFound />;

  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <BookingSteps />
        <RentalPackages />
        <Fleet />
        <Recommendations />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
