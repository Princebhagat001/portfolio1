import { useEffect, useState } from 'react'

// Import all the sections (components) of the website
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Fleet from './components/Fleet'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() { 
  // State to manage the website's dark/light theme. It checks local storage first to remember the user's preference.
  const [theme, setTheme] = useState(() => localStorage.getItem('bhagat-theme') || 'bhagat'); 
  
  // Update the HTML dataset when the theme changes, so Tailwind/DaisyUI applies the correct colors
  useEffect(() => { 
    document.documentElement.dataset.theme = theme; 
    localStorage.setItem('bhagat-theme', theme);
  }, [theme]); 
  
  return (
    // The main wrapper for the website
    <div className="min-h-screen font-body">
      {/* Navigation Bar at the top */}
      <Navbar theme={theme} setTheme={setTheme}/>
      
      {/* Main Content Area containing all sections */}
      <main>
        <Hero/>
        <About/>
        <Services/>
        <Fleet/>
        <Stats/>
        <Contact/>
      </main>
      
      {/* Footer at the bottom */}
      <Footer/>
    </div>
  );
}
