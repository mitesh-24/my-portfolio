import './App.css';
import Hello from './hello';
import About from './about';
import Projects from './projects';
import Contact from './contact';

function App() {
  return (
    <div>
      <Hello name = 'Mitesh'/>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
