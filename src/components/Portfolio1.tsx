import type { JSX } from "react";
import useDarkMode from "../hooks/useDarkMode";
import type { Project } from "../type";

const movieGptVideoUrl =
  "https://www.dropbox.com/scl/fi/isi8cmsa1gz9bt9glhtpf/Movie-GPT.mp4?rlkey=phz7ukvucfymrmsadnqjc0snq&st=xx29objo&dl=1";
const streamBoxVideoUrl =
  "https://www.dropbox.com/scl/fi/4y3cmlvtlz41y2xjdowk9/StreamBox.mp4?rlkey=rxttpwytxa1tjr0omoubx8e6t&st=nr1vomht&dl=1";

const projects: Project[] = [
  {
    title: "EHR Web App",
    description:
      "Web app for capturing and maintaining electronic health records, improving data capture and retrieval for healthcare teams.",
    url: "https://github.com/mittalraghav45/EHR",
  },
  {
    title: "Pet Adoption App",
    description:
      "Platform to explore and adopt pets, simplifying discovery and enquiry journeys for potential adopters.",
    url: "https://github.com/mittalraghav45/petadoption",
  },
];

export default function Portfolio1(): JSX.Element {
  const { dark, setDark } = useDarkMode(true);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Raghav Mittal",
    jobTitle: "Software Engineer",
    url: "https://github.com/mittalraghav45",
    sameAs: [
      "https://github.com/mittalraghav45",
      "https://www.linkedin.com/in/raghav-mittal-341a02132/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Southampton",
      addressCountry: "United Kingdom",
    },
    email: "mittalraghav45@gmail.com",
    telephone: "+44 7741910196",
  };

  return (
    <div className="container" role="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="header">
        <div>
          <h1 className="title">Raghav Mittal</h1>
          <div className="subtitle">
            Full-Stack Application Engineer (React, Node.js, PHP, AWS)
          </div>
          <div className="meta">
            Southampton, United Kingdom • UK Graduate Visa (valid to Dec 2026)
          </div>
          <div className="meta">
            Target roles: Frontend Developer, Full-Stack Engineer, Web / Digital
            Services Developer
          </div>
        </div>

        <div className="header-right">
          <div className="contact-line">+44 7741910196</div>
          <a className="mail" href="mailto:mittalraghav45@gmail.com">
            mittalraghav45@gmail.com
          </a>

          <div className="links">
            <a
              href="https://github.com/mittalraghav45"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/raghav-mittal-341a02132/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="controls">
            <button className="btn" onClick={() => setDark((d) => !d)}>
              Toggle {dark ? "Light" : "Dark"}
            </button>
            <button className="btn" onClick={() => window.print()}>
              Download CV (PDF)
            </button>
            <a className="btn" href="mailto:mittalraghav45@gmail.com">
              Contact me
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="left">
          <section className="section">
            <h2>Summary</h2>
            <p>
              MSc Computer Science graduate from the University of Southampton
              with two years&apos; experience in full-stack web development
              across React, Node.js, and PHP. Comfortable building
              data-heavy, scalable UIs and backends on AWS, with a track record
              of improving performance, reliability, and user engagement in
              commercial web applications.
            </p>
          </section>

          <aside className="aside">
            <div className="aside-card">
              <h3>Skills</h3>
              <p>
                <strong>Frontend:</strong> JavaScript, TypeScript, React, Redux,
                Tailwind CSS
              </p>
              <p>
                <strong>Backend:</strong> Node.js, PHP (LAMP), Express, REST
                APIs
              </p>
              <p>
                <strong>Data &amp; Messaging:</strong> SQL, MongoDB, RabbitMQ
              </p>
              <p>
                <strong>Cloud &amp; Tooling:</strong> AWS (S3, Lambda, IAM),
                Git, Firebase, Firestore
              </p>
            </div>

            <div className="aside-card">
              <h3>Hobbies</h3>
              <p>Travelling • Reading • International relations</p>
            </div>
          </aside>

          <section className="section">
            <h2>Projects</h2>
            <div className="project-grid">
              <div className="project project-featured">
                <div className="project-head">
                  <strong>MovieGPT (GPTflix)</strong>
                  <div className="project-links">
                    <a
                      href="https://lnkd.in/gFXKuQjZ"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://lnkd.in/g-D_PZZb"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://lnkd.in/gbGP8H6r"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Walkthrough
                    </a>
                  </div>
                </div>
                <p className="muted">
                  AI-powered movie discovery app that understands natural
                  language queries and returns personalised film suggestions
                  with trailers and key details.
                </p>
                <ul className="project-list">
                  <li>
                    <strong>Role:</strong> Solo developer responsible for
                    design, build, integration, and deployment.
                  </li>
                  <li>
                    <strong>Stack:</strong> React, Redux, Tailwind CSS,
                    Firebase, OpenAI GPT-3.5, TMDB API.
                  </li>
                  <li>
                    Implemented dual API calls with <code>Promise.all</code> to
                    cut search latency by around 60%, keeping the UI responsive
                    on slower connections.
                  </li>
                  <li>
                    Designed a clean, responsive interface with card-based
                    layouts optimised for desktop and tablet.
                  </li>
                </ul>
                <div
                  className="project-embed"
                  aria-label="MovieGPT live preview"
                >
                  <video
                    title="MovieGPT walkthrough"
                    controls
                    preload="metadata"
                    poster=""
                  >
                    <source src={movieGptVideoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="muted small">
                    If the video does not play, open the Live Demo link above.
                  </div>
                </div>
              </div>

              <div className="project project-featured">
                <div className="project-head">
                  <strong>StreamBox</strong>
                  <div className="project-links">
                    <a
                      href="https://youtube-sable-three.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/mittalraghav45/youtube"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <p className="muted">
                  Personalised streaming box that surfaces binge-worthy series
                  and films with instant playback previews and
                  genre-smart recommendations.
                </p>
                <ul className="project-list">
                  <li>
                    <strong>Role:</strong> Solo developer owning UI, API
                    integration, and deployment.
                  </li>
                  <li>
                    <strong>Stack:</strong> React, Redux Toolkit, Tailwind CSS,
                    YouTube APIs, Firestore.
                  </li>
                  <li>
                    Added watchlists, multi-profile support, and
                    continue-watching rails backed by Firestore for real-time
                    sync.
                  </li>
                  <li>
                    Optimised video streaming with lazy-loaded hero banners and
                    responsive cards for web and tablet layouts.
                  </li>
                </ul>
                <div
                  className="project-embed"
                  aria-label="StreamBox live preview"
                >
                  <video
                    title="StreamBox walkthrough"
                    controls
                    preload="metadata"
                    poster=""
                  >
                    <source src={streamBoxVideoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="muted small">
                    If the video does not play, open the Live Demo link above.
                  </div>
                </div>
              </div>
            </div>

            {projects.map((p) => (
              <div key={p.title} className="project">
                <div className="project-head">
                  <strong>{p.title}</strong>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noreferrer">
                      View
                    </a>
                  )}
                </div>
                <p className="muted">{p.description}</p>
              </div>
            ))}
          </section>

          <section className="section">
            <h2>Experience</h2>

            <article className="exp">
              <h3>Software Engineer — IndiaMart InterMesh Limited</h3>
              <div className="muted">June 2021 – August 2023</div>
              <ul>
                <li>
                  Optimised a tender upload platform by implementing a duplicate
                  detection algorithm using PHP and RabbitMQ, enabling parallel
                  data uploads from diverse vendors. Reduced upload time by 60%
                  and enabled the system to handle 40% more concurrent uploads.
                </li>
                <li>
                  Enhanced the tender listing homepage using PHP and
                  JavaScript, incorporating location-based filtering, category
                  sorting, and relevance filters, which directly increased user
                  engagement and boosted transactions by 15%.
                </li>
                <li>
                  Migrated critical cron jobs from physical servers to AWS,
                  significantly improving system scalability and reliability by
                  30% in high-volume email query processing scenarios.
                </li>
                <li>
                  Developed the Seller Academy platform using React.js,
                  featuring video and article content, which successfully
                  reduced user attrition by 20% and streamlined the user
                  onboarding experience.
                </li>
                <li>
                  Managed an internal CRM system (Node.js, SQL) to generate
                  accurate tender-related transaction reports, ensuring timely
                  and reliable payments.
                </li>
                <li>
                  Collaborated with the marketing team to conduct A/B testing on
                  email campaigns (SendGrid), leveraging embedded Google
                  Analytics for data-driven insights and campaign optimisation.
                </li>
              </ul>
            </article>

            <article className="exp">
              <h3>Intern — IndiaMart InterMesh Limited</h3>
              <div className="muted">March 2021 – June 2021</div>
              <ul>
                <li>
                  Contributed to the development of web modules, utilising PHP,
                  Yii2, RabbitMQ, HTML, JavaScript, and CSS.
                </li>
                <li>
                  Learned to perform root cause analysis of bugs and maintain
                  clear documentation.
                </li>
              </ul>
            </article>

            <article className="exp">
              <h3>Barista — Café Local (Part-Time), United Kingdom</h3>
              <div className="muted">June 2024 – Present</div>
              <ul>
                <li>
                  Delivered friendly and fast-paced customer service in a busy
                  UK café environment.
                </li>
                <li>
                  Prepared coffees, teas, and speciality drinks while
                  maintaining quality and consistency.
                </li>
                <li>
                  Handled POS operations, cash/card payments, and shift closing
                  duties.
                </li>
                <li>
                  Maintained store cleanliness, food safety, and stock rotation
                  standards.
                </li>
              </ul>
            </article>
          </section>

          <section className="section">
            <h2>Education</h2>
            <div className="edu-title">
              University of Southampton — MSc Computer Science
            </div>
            <div className="muted">
              September 2023 – December 2024 • Merit (2:1)
            </div>

            <div style={{ marginTop: 8 }} className="edu-title">
              Amity University, Noida — B.Tech
            </div>
            <div className="muted">
              September 2017 – August 2021 • CGPA: 7.0/10
            </div>
          </section>

          <section className="section">
            <h2>Certifications</h2>
            <ul>
              <li>AWS Cloud Practitioner</li>
              <li>Certified Ethical Hacker (EC-Council)</li>
            </ul>
          </section>
        </section>
      </main>

      <footer className="footer">
        <div className="muted">Last updated: 16/11/2025</div>
      </footer>
    </div>
  );
}
