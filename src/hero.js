import './hero.css';
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
    return (
        <section className="hero">
            <div className = 'hero-text'>
                <h1>
                    Hi, I am Mitesh 👋
                </h1>
                <p>
                    <span style={{ color: '#58a6ff', fontWeight: 'bold' }}>
                        <Typewriter
                        words={['Software Engineer 💻', 'Problem Solver 🧠', 'Tech Lover 🚀']}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={30}
                        deleteSpeed={20}
                        delaySpeed={1500}
                        />
                    </span>
                 </p>
            </div>
            <div className = 'hero-image'> 
                <img src="/icon-portfolio.png" alt="My Avatar" />
            </div>
        </section>
    )
}

export default Hero;