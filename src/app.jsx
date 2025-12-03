import { useState, useEffect,React } from "react";
import { SunIcon, MoonIcon, DownloadIcon } from "./icons";
// removed: import profilePlaceholder from "./profile-placeholder.png";
import resumePDF from "./Chakradhar_Kacham_Resume.pdf";

const navLinks = [
  { to: "#about", label: "About" },
  { to: "#skills", label: "Skills" },
  { to: "#projects", label: "Projects" },
  { to: "#experience", label: "Experience" },
  { to: "#achievements", label: "Achievements" },
  { to: "#contact", label: "Contact" },
];

export default function App() {
  // Theme toggle
  const [dark, setDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="bg-surface dark:bg-primary min-h-screen text-primary dark:text-surface transition-colors duration-300">
      {/* Header/Hero */}
      <header className="flex flex-col items-center py-8 px-4 relative">
        <div className="absolute top-4 right-6 flex gap-2">
          <button
            aria-label="Toggle theme"
            className="rounded-full p-2 border border-slate-300 bg-slate-100 dark:bg-slate-800 shadow transition"
            onClick={() => setDark((d) => !d)}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href={resumePDF}
            download="Chakradhar_Kacham_Resume.pdf"
            className="rounded-full p-2 border border-accent bg-accent text-white shadow transition hover:scale-105"
            title="Download Resume"
          >
            <DownloadIcon />
          </a>
        </div>

        <img
          src="/profile-placeholder.png"
          alt="Profile Placeholder"
          className="w-28 h-28 rounded-full border-4 border-accent shadow-lg mb-4 object-cover"
        />
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-accent text-center mb-2">
          Chakradhar Kacham
        </h1>
        <h2 className="text-lg md:text-xl font-mono text-highlight text-center mb-2">
          Data Engineer | DevOps | Agentic AI Enthusiast
        </h2>
        <p className="italic text-center text-md md:text-lg max-w-xl mb-4 text-slate-500 dark:text-slate-300">
          "progress over pause, purpose over perfection"
        </p>
        <div className="flex gap-4 mt-2">
          <a
            href="https://github.com/chakri01"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono underline hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/chakradhar-kacham-1a10a5192/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono underline hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kachamchakri.80968.kc@gmail.com"
            className="font-mono underline hover:text-accent"
          >
            Email
          </a>
        </div>
        <nav className="mt-8 flex flex-wrap justify-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="px-4 py-2 rounded hover:bg-accent/20 font-semibold transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      {/* About */}
      <section id="about" className="mx-auto max-w-3xl px-4 py-12">
        <h3 className="text-2xl font-bold text-accent mb-4">About Me</h3>
        <p className="text-lg leading-relaxed">
          Data Engineer with hands-on experience in designing and optimizing data pipelines and distributed workflows using Azure Data Factory, Databricks, and more. Proven track record delivering reliable, production-grade data solutions across multiple domains. Strong focus on performance tuning, cloud-based data architecture, and cross-functional collaboration to implement innovation in data-driven products.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-accent/10 dark:bg-slate-700/40 py-12 px-4">
        <h3 className="text-2xl font-bold text-accent mb-6 text-center">Technical Skills</h3>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div>
            <h4 className="font-semibold mb-2">Cloud</h4>
            <ul className="space-y-1">
              <li>Azure (ADF, Synapse, DevOps, Monitor)</li>
              <li>AWS</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Data Engineering & Analytics</h4>
            <ul className="space-y-1">
              <li>Azure Synapse</li>
              <li>Databricks</li>
              <li>PySpark</li>
              <li>PowerBI</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">DevOps</h4>
            <ul className="space-y-1">
              <li>GitHub</li>
              <li>Azure DevOps</li>
              <li>CI/CD</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Languages</h4>
            <ul className="space-y-1">
              <li>Python</li>
              <li>Java</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl py-12 px-4">
        <h3 className="text-2xl font-bold text-accent mb-6 text-center">Featured Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Email Summarizer Agent */}
          <ProjectCard
            title="Email Summarizer Agent"
            tags={["Agentic AI", "NLP", "LLM"]}
            link="https://github.com/chakri01/email-summarizer-agent"
            description="Summarizes emails using NLP and large language models. Built autonomous workflows using Agentic AI techniques."
          />
          {/* ETL Orchestration using ADF */}
          <ProjectCard
            title="ETL Orchestration using ADF"
            tags={["Azure Data Factory", "ETL"]}
            description="Built ETL pipelines processing terabytes of data. Improved throughput by 25% and enabled scalable architecture with robust partitioning and monitoring."
          />
          {/* PySpark Data Accelerator */}
          <ProjectCard
            title="PySpark Data Accelerator"
            tags={["PySpark", "Databricks", "Big Data"]}
            description="Developed PySpark pipelines in Databricks, optimized with data lake caching, reducing execution time by 40%."
          />
          {/* Placeholder for upcoming Agentic AI project */}
          <ProjectCard
            title="Agentic AI Pipeline (Coming Soon)"
            tags={["Agentic AI", "LLM", "Orchestration"]}
            description="Innovative multi-agent orchestration for data workflows. Stay tuned!"
            placeholder
          />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-accent/10 dark:bg-slate-700/40 py-12 px-4">
        <h3 className="text-2xl font-bold text-accent mb-6 text-center">Experience</h3>
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h4 className="text-xl font-bold">Data Engineer <span className="font-normal text-highlight">@ Deloitte Consulting, Hyderabad</span></h4>
            <span className="text-sm text-slate-500 dark:text-slate-300">Jan 2023 – Present</span>
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li>Delivered end-to-end data pipelines using Azure Data Factory and Synapse.</li>
              <li>Improved reporting accuracy with refined orchestration and PowerBI dashboards.</li>
              <li>Deployed 20+ pipelines via Azure DevOps CI/CD workflows.</li>
              <li>Implemented 30+ PySpark/ADF Data Flows; resolved 100+ SIT defects.</li>
              <li>Automated monitoring using Azure Monitor & ServiceNow.</li>
              <li>Achieved 10ms latency for real-time updates; scaled pipelines with auto-scaling.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="mx-auto max-w-4xl py-12 px-4">
        <h3 className="text-2xl font-bold text-accent mb-6 text-center">Achievements & Recognition</h3>
        <ul className="space-y-3">
          <li>
            <span className="font-bold text-highlight">Applause Award, Deloitte</span> — For rapid SIT defect resolution and deployment efficiency.
          </li>
          <li>
            <span className="font-bold text-highlight">Recognition</span> — For efficient pipeline development on big data.
          </li>
        </ul>
      </section>

      {/* Education & Certifications */}
      <section className="bg-accent/10 dark:bg-slate-700/40 py-12 px-4">
        <h3 className="text-2xl font-bold text-accent mb-6 text-center">Education & Certifications</h3>
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h4 className="font-semibold">Bachelor of Engineering, Vasavi College of Engineering</h4>
            <span className="text-sm text-slate-500 dark:text-slate-300">2018 – 2022</span>
          </div>
          <div>
            <h4 className="font-semibold">Certifications</h4>
            <ul className="list-disc pl-5">
              <li>Microsoft Certified: Azure Administrator (AZ-104), AI Engineer (AI-102), Azure DevOps Expert (AZ-400)</li>
              <li>Databricks: Core Designer, ML Practitioner</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-3xl py-12 px-4">
        <h3 className="text-2xl font-bold text-accent mb-6 text-center">Contact</h3>
        <div className="flex flex-col items-center gap-3">
          <a
            href="mailto:kachamchakri.80968.kc@gmail.com"
            className="text-lg underline font-mono hover:text-accent"
          >
            kachamchakri.80968.kc@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/chakradhar-kacham-1a10a5192/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg underline font-mono hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/chakri01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg underline font-mono hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 text-sm text-slate-400 dark:text-slate-500">
        © {new Date().getFullYear()} Chakradhar Kacham. “progress over pause, purpose over perfection.”
      </footer>
    </div>
  );
}

// --- Components ---
function ProjectCard({ title, tags, link, description, placeholder }) {
  return (
    <div className={`rounded-xl shadow-lg bg-white/70 dark:bg-slate-800/80 p-6 border-l-4 ${placeholder ? "border-dashed border-accent/70" : "border-accent"}`}>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <div className="flex gap-2 mb-2 flex-wrap">
        {tags.map((tag) => (
          <span key={tag} className="bg-accent/20 text-accent px-2 py-0.5 rounded text-xs font-mono">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm mb-2">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-1 text-accent underline"
        >
          View on GitHub
        </a>
      )}
      {placeholder && (
        <span className="block mt-2 text-xs text-slate-500 dark:text-slate-400 italic">Coming soon…</span>
      )}
    </div>
  );
}