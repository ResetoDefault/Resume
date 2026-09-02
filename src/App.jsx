import "./App.css";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">AKSHIT SHARMA<span>.</span></div>

        <div className="nav-links">
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* HERO */}
      <section className="hero">

        <div className="status">
          <span></span> Open to opportunities
        </div>

        <p className="eyebrow">CLOUD & SECURITY ENGINEER</p>

        <h1>
          Building systems that are
          <br />
          <span>secure by design.</span>
        </h1>

        <p className="description">
          I'm Akshit Sharma, a cybersecurity enthusiast focused on
          cloud security, SOC operations, network security and
          building reliable systems.
        </p>

        <div className="hero-buttons">
          <a href="#resume" className="primary-btn">
            View Resume →
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

      </section>


      {/* RESUME */}
      <section id="resume" className="resume-section">

        <div className="section-heading">
          <p>01 / RESUME</p>
          <h2>My Resume</h2>
        </div>

        <div className="resume-wrapper">
          <iframe
            src="/resume.pdf"
            title="Akshit Sharma Resume"
          />
        </div>

        <a
          href="/resume.pdf"
          download
          className="download-btn"
        >
          Download Resume ↓
        </a>

      </section>


      {/* CONTACT */}
      <section id="contact" className="contact">

        <div className="section-heading">
          <p>02 / CONTACT</p>
          <h2>Let's connect.</h2>
        </div>

        <p className="contact-text">
          Have an opportunity, project, or just want to talk
          cybersecurity? My inbox is always open.
        </p>

        <div className="contact-links">

          <a
            href="mailto:akshit6299@outlook.com"
            className="contact-card"
          >
            <span>Email</span>
            <strong>akshit6299@outlook.com ↗</strong>
          </a>

          <a
            href="https://www.linkedin.com/in/akshit-sharma-19311228b/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span>LinkedIn</span>
            <strong>Connect with me ↗</strong>
          </a>

          <a
            href="https://github.com/ResetoDefault?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span>GitHub</span>
            <strong>View my projects ↗</strong>
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer>
        <span>© 2026 Akshit Sharma</span>
        <span>Built with React</span>
      </footer>

    </div>
  );
}

export default App;