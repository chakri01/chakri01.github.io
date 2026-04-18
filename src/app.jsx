import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon, DownloadIcon } from "./icons";
import resumePDF from "./Chakradhar_Kacham_Resume.pdf";

const navLinks = [
  { to: "#about", label: "About" },
  { to: "#now", label: "Now" },
  { to: "#skills", label: "Skills" },
  { to: "#projects", label: "Projects" },
  { to: "#experience", label: "Experience" },
  { to: "#contact", label: "Contact" },
];

const skillGroups = [
  {
    title: "AI & LLM Systems",
    items: ["LangChain", "LangGraph", "Langfuse", "RAG", "Prompt Engineering"],
  },
  {
    title: "Agentic & Orchestration",
    items: ["MCP", "Multi-Agent Systems", "Ollama"],
  },
  {
    title: "Data Platforms",
    items: ["Azure", "Databricks", "Kafka", "PySpark", "Delta Lake", "Vector DBs"],
  },
  {
    title: "DevOps & Infra",
    items: ["Docker", "Terraform", "CI/CD", "Airflow", "GitHub Actions"],
  },
  {
    title: "Languages",
    items: ["Python", "JavaScript", "Bash"],
  },
];

const currentlyBuilding = [
  "Design with AI Frameworks",
  "Social-impact opportunities",
  "SLMs & LoRA fine-tuning",
];

const projects = [
  {
    title: "AI Transaction Repair System",
    badges: ["Private", "Hackathon · Nov 2025"],
    description:
      "Multi-agent system for ACH/Wire transfer failure recovery — hybrid rules + LLM classification, human-in-the-loop for high-risk cases. The learning here was outsized: first hands-on with LangChain, LangGraph, Langfuse; and with Opus 4.5 / GPT-5 as agent brains. Shaped how I think about every agent system I've built since.",
  },
  {
    title: "Personal Research Assistant",
    badges: ["Private", "Local-first"],
    link: "https://github.com/chakri01/research-assistant-mcp",
    description:
      "RAG-style research assistant on a local LLM — upload documents, ask questions, get grounded answers. Built it for myself, then ran into the real problem: the limit wasn't the model, it was the noise in my own documents. That's the moment \"AI Data Engineer\" started making more sense to me than \"AI Engineer.\"",
  },
  {
    title: "Retail GenAI Assistant",
    badges: ["Personal"],
    link: "https://github.com/chakri01/retail-analytics-assistant",
    description:
      "Conversational layer on top of a data engineering pipeline. Business users ask questions in plain language; the system translates intent → queries → answers. Modular and parameterized — reusable across use cases.",
  },
  {
    title: "Real-time E-commerce Pipeline",
    badges: ["Shipped"],
    link: "https://github.com/chakri01/e-commerce-kafka",
    description:
      "Kafka-based streaming system — 2k+ transactions/min with 99.9% delivery. Backbone for real-time AI signals like recommendations and dynamic pricing.",
  },
  {
    title: "Nambola — Name Bingo",
    badges: ["Shipped", "2 days"],
    link: "https://github.com/chakri01/name-bingo",
    description:
      "Real-time multiplayer game for 80–120 people at corporate events. QR-based joining, live game state, backend winner validation. Planned by me, developed with Claude, designed with ChatGPT — shipped end-to-end in 2 days, zero prior full-stack experience.",
  },
  {
    title: "HydroTrack — Water Intake Tracker",
    badges: ["Shipped", "Prompt-first"],
    link: "https://github.com/chakri01/water-intake-tracker",
    description:
      "Minimal, zero-friction habit tracker for a small group of friends. Built from a single super-prompt — prompt-first development. Used daily for 2+ months. Production means real usage.",
  },
];

const experienceBullets = [
  "Built ingestion for healthcare and insurance data — correctness mattered more than throughput.",
  "Designed a config-driven framework for 40+ vendor formats — onboarding new data in hours, not days.",
  "Cut batch latency from 3 hours to 1.5 hours with Delta partitioning and PySpark tuning.",
  "Shipped AI-assisted anomaly detection so the team stops triaging noise.",
  "Built Databricks-based LLM agents for pipeline triage — diagnosing problems that used to need a human on call.",
];

const achievements = [
  {
    title: "3× Applause Awards, Deloitte",
    body: "for pipeline stability and defect-resolution speed across releases.",
  },
  {
    title: "Outstanding Award, Deloitte",
    body: "delivered 25+ pipelines ahead of schedule, supporting real business decisions.",
  },
];

const certifications = [
  {
    issuer: "Microsoft Azure",
    items: [
      "Azure Fundamentals (AZ-900)",
      "Azure AI Fundamentals (AI-900)",
      "Azure Administrator (AZ-104)",
      "Azure DevOps Expert (AZ-400)",
      "GitHub Copilot (GH-300)",
    ],
  },
  {
    issuer: "Databricks",
    items: ["GenAI Engineer Associate", "Data Engineer Associate"],
  },
  {
    issuer: "Dataiku",
    items: ["Core Designer", "ML Practitioner", "GenAI Practitioner"],
  },
];

function SectionEyebrow({ label }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-3 text-xs tracking-[0.25em] uppercase text-slate-500 dark:text-slate-400 font-mono">
      <span className="h-px w-8 bg-slate-300 dark:bg-slate-600" />
      <span>{label}</span>
      <span className="h-px w-8 bg-slate-300 dark:bg-slate-600" />
    </div>
  );
}

function StatusBadge({ children }) {
  return (
    <span className="px-2 py-0.5 rounded text-[11px] font-mono tracking-wide bg-slate-200/70 text-slate-700 dark:bg-slate-700/60 dark:text-slate-200">
      {children}
    </span>
  );
}

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : true
  );
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="bg-surface dark:bg-primary min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* Header / Hero */}
      <header className="relative flex flex-col items-center pt-10 pb-14 px-4">
        <div className="absolute top-4 right-6 flex gap-2">
          <button
            aria-label="Toggle theme"
            className="rounded-full p-2 border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-sm transition hover:scale-105"
            onClick={() => setDark((d) => !d)}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href={resumePDF}
            download="Chakradhar_Kacham_Resume.pdf"
            className="rounded-full p-2 border border-accent bg-accent text-white shadow-sm transition hover:scale-105"
            title="Download Resume"
          >
            <DownloadIcon />
          </a>
        </div>

        <img
          src="/profile-placeholder.jpg"
          alt="Chakradhar Kacham"
          className="w-28 h-28 rounded-full border-4 border-accent shadow-lg mb-5 object-cover"
        />
        <h1 className="text-4xl md:text-5xl font-display font-bold text-accent text-center tracking-tight mb-2">
          Chakradhar Kacham
        </h1>
        <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 text-center mb-2">
          AI Data Engineer
        </p>
        <p className="italic text-center text-sm md:text-base text-slate-500 dark:text-slate-400 mb-5">
          "progress over pause, purpose over perfection"
        </p>
        <div className="flex gap-5 text-sm mb-6">
          <a
            href="https://github.com/chakri01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-300 hover:text-accent transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/chakradhar-kacham-1a10a5192/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-300 hover:text-accent transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kachamchakri.80968.kc@gmail.com"
            className="text-slate-600 dark:text-slate-300 hover:text-accent transition"
          >
            Email
          </a>
        </div>
        <nav className="flex flex-wrap justify-center gap-1 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="px-3 py-1.5 rounded text-slate-600 dark:text-slate-300 hover:text-accent hover:bg-accent/10 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      {/* About */}
      <section id="about" className="mx-auto max-w-3xl px-4 py-14">
        <FadeIn>
          <SectionEyebrow label="About" />
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center text-accent mb-6">
            A bit about me
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200">
            I'm an AI Data Engineer — working at the seam where data infrastructure
            meets intelligent systems. Three years at Deloitte taught me that clean
            data outlives clever models. Outside work, I ship small things for real
            people — a water tracker a few friends still use, a bingo game that runs
            at corporate events, a research assistant that taught me why I'm a{" "}
            <em>Data</em> engineer, not just an AI engineer. Learning by shipping is
            the only way I've ever really understood anything.
          </p>
        </FadeIn>
      </section>

      {/* Currently Building */}
      <section
        id="now"
        className="bg-accent/5 dark:bg-slate-800/40 py-14 px-4 border-y border-slate-200/60 dark:border-slate-700/50"
      >
        <FadeIn>
          <SectionEyebrow label="Now" />
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center text-accent mb-8">
            Currently building
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {currentlyBuilding.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-highlight/50 bg-highlight/10 text-amber-700 dark:text-highlight text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-5xl py-14 px-4">
        <FadeIn>
          <SectionEyebrow label="Skills" />
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center text-accent mb-10">
            Technical skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="p-5 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60"
              >
                <h4 className="font-semibold text-accent mb-3">{group.title}</h4>
                <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-200">
                  {group.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="bg-accent/5 dark:bg-slate-800/40 py-14 px-4 border-y border-slate-200/60 dark:border-slate-700/50"
      >
        <FadeIn>
          <SectionEyebrow label="Projects" />
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center text-accent mb-10">
            Featured projects
          </h3>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.05}>
              <ProjectCard {...p} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-4xl py-14 px-4">
        <FadeIn>
          <SectionEyebrow label="Experience" />
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center text-accent mb-10">
            Experience
          </h3>
          <div className="space-y-10">
            <div>
              <h4 className="text-lg md:text-xl font-semibold">
                Data Engineer · AI / Data Platforms
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                Deloitte Consulting, Hyderabad · Jan 2023 – Present
              </p>
              <ul className="space-y-2 list-disc pl-5 text-slate-700 dark:text-slate-200">
                {experienceBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-semibold">
                Java Developer Intern
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                Tata Consultancy Services · Mar 2022 – May 2022
              </p>
              <p className="text-slate-700 dark:text-slate-200">
                Built a Java-based SNMP agent for real-time network monitoring — first
                taste of production systems, and of reading protocols instead of just
                APIs.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Achievements */}
      <section
        id="achievements"
        className="bg-accent/5 dark:bg-slate-800/40 py-14 px-4 border-y border-slate-200/60 dark:border-slate-700/50"
      >
        <FadeIn>
          <SectionEyebrow label="Achievements" />
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center text-accent mb-10">
            Achievements
          </h3>
          <ul className="max-w-3xl mx-auto space-y-4">
            {achievements.map((a) => (
              <li key={a.title}>
                <span className="font-semibold text-amber-600 dark:text-highlight">
                  {a.title}
                </span>
                <span className="text-slate-700 dark:text-slate-200"> — {a.body}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      {/* Education & Certifications */}
      <section className="mx-auto max-w-5xl py-14 px-4">
        <FadeIn>
          <SectionEyebrow label="Education" />
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center text-accent mb-10">
            Education & certifications
          </h3>
          <div className="space-y-8">
            <div className="text-center">
              <h4 className="font-semibold">
                Bachelor of Engineering, Vasavi College of Engineering
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">2018 – 2022</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {certifications.map((c) => (
                <div
                  key={c.issuer}
                  className="p-5 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60"
                >
                  <h5 className="font-semibold text-accent mb-3">{c.issuer}</h5>
                  <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-200">
                    {c.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-accent/5 dark:bg-slate-800/40 py-14 px-4 border-t border-slate-200/60 dark:border-slate-700/50"
      >
        <FadeIn>
          <SectionEyebrow label="Contact" />
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center text-accent mb-8">
            Let's talk
          </h3>
          <div className="flex flex-col items-center gap-3 text-slate-700 dark:text-slate-200">
            <a
              href="mailto:kachamchakri.80968.kc@gmail.com"
              className="hover:text-accent transition"
            >
              kachamchakri.80968.kc@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/chakradhar-kacham-1a10a5192/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/chakri01"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              GitHub
            </a>
          </div>
        </FadeIn>
      </section>

      <footer className="text-center py-8 text-xs text-slate-500 dark:text-slate-500">
        © {new Date().getFullYear()} Chakradhar Kacham · progress over pause, purpose over perfection
      </footer>
    </div>
  );
}

function ProjectCard({ title, badges = [], link, description }) {
  return (
    <div className="group relative rounded-xl bg-white/70 dark:bg-slate-800/70 p-6 border border-slate-200/70 dark:border-slate-700/60 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h4 className="text-lg font-semibold pr-2">{title}</h4>
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5 justify-end shrink-0">
            {badges.map((b) => (
              <StatusBadge key={b}>{b}</StatusBadge>
            ))}
          </div>
        )}
      </div>
      <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed mb-4 flex-1">
        {description}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
        >
          View on GitHub →
        </a>
      )}
    </div>
  );
}
