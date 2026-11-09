import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Fleet from './components/Fleet'
import Recommendations from './components/Recommendations'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import { isValidRoute } from './utilis/routeValidation'
import { applyOpenGraph, notFoundOpenGraph } from './utilis/opengraph'

export default function App() {
  const validRoute = isValidRoute(window.location.pathname, window.location.hash);

  // Force scroll to top when the website is refreshed
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (validRoute) return;
    applyOpenGraph(notFoundOpenGraph(window.location.pathname));
    document.title = 'Page Not Found | Bhagat Tour and Travels';
    document.querySelector('meta[name="robots"]')?.setAttribute('content', 'noindex, nofollow');
  }, [validRoute]);

  if (!validRoute) return <NotFound />;

  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
