import { useState } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askQuestion() {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("https://biography-w9r1.onrender.com/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: question,
      });

      const data = await response.text();
      setAnswer(data);
    } catch (error) {
      setAnswer("Something went wrong.");
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <div className="page">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Nicolas.
        </a>

        <div className="nav-links">
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#toolbox">Toolbox</a>
          <a href="#ai">Ask AI</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">

          <p className="small-title">COMPUTER SCIENCE STUDENT</p>

          <h1>
            Hello, my name is
            <span> Nicolas Arroyo.</span>
          </h1>

          <p className="hero-description">
            I'm a Computer Science student at Rutgers University who enjoys programming
            and learning new things through hands-on projects. Outside of Computers i also enjoy cars and videogames

          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects
            </a>

            <a href="#ai" className="secondary-button">
              Ask My AI
            </a>
          </div>

        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="section">

        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Who I am</h2>
        </div>

        <div className="about-grid">

          <div className="photo-placeholder">
            <span>Your photo here</span>
          </div>

          <div className="about-text">

            <p>
              I'm currently pursuing a B.S. in Computer Science at Rutgers
              University in New Brunswick, New Jersey, with an expected
              graduation date of May 2027.
            </p>

            <p>
              I got into computers and programming during my high school years and since then
              i knew i wanted to go into CS and ever since i started college, i got more serious
              about software development which pushed me to work on projects like this one.
            </p>

            <p>
              Outside of programming, I'm a big car enthusiast and enjoy
              automotive technology, performance cars, and learning how
              modern systems work.
            </p>

          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">

        <div className="section-heading">
          <p>PROJECTS</p>
          <h2>Things I've built</h2>
        </div>

        <div className="project-grid">

          <a
            href="https://github.com/Narroyo2003/car-tracking-app"
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <div>
              <p className="project-number">01</p>

              <h3>Car Maintenance Tracker</h3>

              <p>
                A full-stack application designed to track vehicle maintenance
                records, service history, and upcoming maintenance.
              </p>

              <div className="project-tech">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
                <span>React</span>
              </div>
            </div>

            <p className="project-link">View on GitHub →</p>
          </a>


          <div className="project-card">

            <div>
              <p className="project-number">02</p>

              <h3>AI Biography Assistant</h3>

              <p>
                A full-stack AI-powered assistant that answers questions about
                me using biographical context and the OpenAI API.
              </p>

              <div className="project-tech">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>React</span>
                <span>OpenAI API</span>
              </div>
            </div>

            <p className="project-link">You're using it right now.</p>

          </div>

        </div>
      </section>

      <div className="toolbox">

  <div className="tool">
    <i className="devicon-java-plain colored"></i>
    <h3>Java</h3>
  </div>

  <div className="tool">
    <i className="devicon-react-original colored"></i>
    <h3>React</h3>
  </div>

  <div className="tool">
    <i className="devicon-postgresql-plain colored"></i>
    <h3>PostgreSQL</h3>
  </div>

  <div className="tool">
    <i className="devicon-python-plain colored"></i>
    <h3>Python</h3>
  </div>

  <div className="tool">
    <i className="devicon-c-plain colored"></i>
    <h3>C</h3>
  </div>

  <div className="tool">
    <i className="devicon-git-plain colored"></i>
    <h3>Git</h3>
  </div>

  <div className="tool">
    <i className="devicon-github-original"></i>
    <h3>GitHub</h3>
  </div>

</div>
      {/* AI */}
      <section id="ai" className="section ai-section">

        <div className="section-heading">
          <p>AI BIOGRAPHY</p>
          <h2>Ask my AI anything about me</h2>

          <p className="section-description">
            This assistant uses information about me as context to answer
            questions through the OpenAI API.
          </p>
        </div>

        <div className="chat-box">

          <div className="chat-input-row">

            <input
              type="text"
              placeholder="What does Nicolas study?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  askQuestion();
                }
              }}
            />

            <button onClick={askQuestion}>
              {loading ? "Thinking..." : "Ask"}
            </button>

          </div>

          {answer && (
            <div className="answer">
              <p>{answer}</p>
            </div>
          )}

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">

        <p className="small-title">LET'S CONNECT</p>

        <h2>Want to know more?</h2>

        <p>
          Check out my projects or connect with me professionally.
        </p>

        <div className="contact-buttons">

          <a
            href="https://www.linkedin.com/in/nicolas-arroyo-414474310/"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Narroyo2003"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            GitHub
          </a>

        </div>

      </section>

      <footer>
        <p>Built by Nicolas Arroyo-Cucchi.</p>
      </footer>

    </div>
  );
}

export default App;