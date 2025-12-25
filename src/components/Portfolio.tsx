import type { JSX } from "react";
import useDarkMode from "../hooks/useDarkMode";
import type { Project } from "../type";

const projects: Project[] = [
  {
    title: "EHR Web App",
    description:
      "Web app for capturing and maintaining electronic health records.",
    url: "https://github.com/mittalraghav45/EHR",
  },
  {
    title: "E-Commerce app (MERN)",
    description: "Fully functional e-commerce platform built on MERN stack.",
    url: "https://github.com/mittalraghav45/ecomm-mern",
  },
  {
    title: "Pet Adoption Appp",
    description: "A platform to explore and adopt pets.",
    url: "https://github.com/mittalraghav45/petadoption",
  },
];

export default function Portfolio(): JSX.Element {
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
            MSc Computer Science — Software Engineer
          </div>
          <div className="meta">
            Southampton, United Kingdom • Graduate visa holder
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
            {/* <button className="btn" onClick={() => window.print()}>
              Print / Save PDF
            </button> */}
          </div>
        </div>
      </header>

      <main className="main">
        <section className="left">
          <section className="section">
            <h2>Summary</h2>
            <p>
              MSc Computer Science graduate from the University of Southampton
              with two years of experience in full-stack web development.
              Proficient in React, Node.js and PHP. Experienced with AWS and
              building scalable UIs and backends.
            </p>
          </section>

          <section className="section">
            <h2>Experience</h2>

            <article className="exp">
              <h3>Software Engineer — IndiaMart InterMesh Limited</h3>
              <div className="muted">June 2021 – August 2023</div>
              <ul>
                <li>
                  Optimized a tender upload platform by implementing a duplicate
                  detection algorithm using PHP and RabbitMQ, enabling parallel
                  data uploads from diverse vendors. Reduced upload time by 60%
                  and enabled the system to handle 40% more concurrent uploads.
                </li>
                <li>
                  Enhanced the tender listing homepage using PHP and JavaScript,
                  incorporating location-based filtering, category sorting, and
                  relevance filters, which directly increased user engagement
                  and boosted transactions by 15%.
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
                  Analytics for data-driven insights and campaign optimization.
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
                  Learned to do root cause analysis of the bugs with their
                  documentation
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
              Prepared coffees, teas, and specialty drinks while maintaining
                  quality and consistency.
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
            <h2>Projects</h2>
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
            <h2>Certifications</h2>
            <ul>
              <li>AWS Cloud Practitioner</li>
              <li>Certified Ethical Hacker (EC-Council)</li>
            </ul>
          </section>
        </section>

        <aside className="aside">
          <div className="aside-card">
            <h3>Skills</h3>
            <p>JavaScript / TypeScript / React / Node.js</p>
            <p>PHP, LAMP, MERN</p>
            <p>SQL / MongoDB</p>
            <p>RabbitMQ, AWS</p>
            <p>Git</p>
          </div>

          <div className="aside-card">
            <h3>Contact</h3>
            <p>Southampton, United Kingdom</p>
            <p>mittalraghav45@gmail.com</p>
            <p>+44 7741910196</p>
          </div>

          <div className="aside-card">
            <h3>Hobbies</h3>
            <p>Travelling • Reading • International relations</p>
          </div>
        </aside>
      </main>

      <footer className="footer">
        {/* <div>Built with React • Printable single-page CV</div> */}
        <div className="muted">Last updated: 16/11/2025</div>
      </footer>
    </div>
  );
}
