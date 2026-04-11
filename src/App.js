import { useEffect, useState } from 'react';
import './portfolio.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './hero';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Experience from './experience';
import Hobbies from './hobbies';
import Contact from './contact';

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('pf-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    /* ignore */
  }
  if (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: light)').matches
  ) {
    return 'light';
  }
  return 'dark';
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('pf-theme', theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="pf-app">
      <div className="pf-app__backdrop" aria-hidden>
        <div className="pf-app__backdrop-base" />
        <div className="pf-app__backdrop-ambient" />
        <div className="pf-app__backdrop-grid" />
        <div className="pf-app__backdrop-noise" />
      </div>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="pf-main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
