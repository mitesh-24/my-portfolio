import './hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className = 'hero-text'>
                <h1>
                    Hi, I am Mitesh 👋
                </h1>
                <p>
                    I'm a software engineer who loves building cool things.
                </p>
            </div>
            <div className = 'hero-image'> 
                <img src="/icon-portfolio.png" alt="My Avatar" />
            </div>
        </section>
    )
}

export default Hero;