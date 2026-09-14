import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Fleet from './components/Fleet'
import Recommendations from './components/Recommendations'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('bhagat-theme') || 'bhagat');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('bhagat-theme', theme);
  }, [theme]);

  // Force scroll to top when the website is refreshed
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-body">
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Recommendations />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
