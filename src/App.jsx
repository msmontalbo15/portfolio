import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
//  ASSET STRATEGY — public/assets/ folder
//  All images live in public/assets/ and are served as static URLs.
//  import.meta.env.BASE_URL = "/" locally, "/portfolio/" on GitHub Pages.
// ─────────────────────────────────────────────────────────────────────────────
const BASE = import.meta.env.BASE_URL;
const A = (file) => `${BASE}assets/${file}`;

// ─── Logos & Social Icons ────────────────────────────────────────────────────
const VAL_LOGO = A("val.jpg");
const OTT_LOGO = A("ott.jpg");
const SLC_LOGO = A("slcv.png");
const PROFILE  = A("profile.jpg");
const FB       = A("fb.png");
const IG       = A("ig.png");
const IN       = A("in.png");
const MAIL     = A("mail.png");

// ─── SLCV Admin Portal Screenshots ──────────────────────────────────────────
const SLCV_SCREENS = [
  { label: "Login",            src: A("slcv-login.png") },
  { label: "Clearance",        src: A("slcv-clearance.png") },
  { label: "Subjects",         src: A("slcv-subjects.png") },
  { label: "Enrollment",       src: A("slcv-enrollment.png") },
  { label: "Grades",           src: A("slcv-grades.png") },
  { label: "Library",          src: A("slcv-library.png") },
  { label: "Scheduling",       src: A("slcv-scheduling.png") },
  { label: "Courses",          src: A("slcv-courses.png") },
  { label: "Student Records",  src: A("slcv-student-records.png") },
  { label: "Sign Up",          src: A("slcv-signup.png") },
];

// ─── DCO Internal Systems Screenshots ───────────────────────────────────────
const DCO_SCREENS = [
  { label: "Monthly Summary",  src: A("dco-summary.png") },
  { label: "Accomplishment",   src: A("dco-tracker.png") },
  { label: "OT Report",        src: A("dco-report.png") },
  { label: "User Management",  src: A("dco-users.png") },
  { label: "Inventory",        src: A("dco-inventory.png") },
  { label: "Care of Item",     src: A("dco-care.png") },
  { label: "QR Scanner",       src: A("dco-qr.png") },
  { label: "Products",         src: A("dco-products.png") },
];

// ─── Valenzuela City Landing Pages ──────────────────────────────────────────
const VAL_LANDING_PAGES = [
  {
    title: "Tax Amnesty",
    desc: "Ordinance No. 1247 — public awareness page for delinquent real property tax amnesty program.",
    url: "https://valenzuela.gov.ph",
    img: A("lp-tax-amnesty.png"),
    tags: ["WordPress", "CMS", "UI/UX"],
  },
  {
    title: "Paw Park Mural Contest",
    desc: "Valenzuela City Paw Park & Skate Park Mural Contest registration and download landing page.",
    url: "https://valenzuela.gov.ph",
    img: A("lp-mural-contest.png"),
    tags: ["HTML/CSS", "PHP", "Responsive"],
  },
  {
    title: "Summer Sports Camp 2024",
    desc: "Pamilyang Valenzuelano Summer Sports Camp 2024 event landing page — Mag-WESxercise Tayo!",
    url: "https://valenzuela.gov.ph",
    img: A("lp-sports-camp.png"),
    tags: ["HTML/CSS", "Responsive", "CMS"],
  },
  {
    title: "Street Lighting Project",
    desc: "Campaign page for Valenzuela City's largest street lighting infrastructure rollout.",
    url: "https://valenzuela.gov.ph",
    img: A("lp-street-lighting.png"),
    tags: ["WordPress", "CMS", "Responsive"],
  },
  {
    title: "Content Posting Request",
    desc: "DCO content posting request form — internal city government social media request page.",
    url: "https://valenzuela.gov.ph",
    img: A("lp-content-posting.png"),
    tags: ["PHP", "Google Forms", "CMS"],
  },
  {
    title: "History & Progress Book",
    desc: "Landing page for the Valenzuela: History and Progress coffee table book launch event.",
    url: "https://valenzuela.gov.ph",
    img: A("lp-history-book.png"),
    tags: ["WordPress", "UI/UX", "CMS"],
  },
  {
    title: "DotBot Medical Assistance",
    desc: "City Social Welfare leveled-up DotBot page for hemodialysis and peritoneal dialysis applications.",
    url: "https://valenzuela.gov.ph",
    img: A("lp-dotbot.png"),
    tags: ["HTML/CSS", "PHP", "Responsive"],
  },
];

// ─── Static Data ──────────────────────────────────────────────────────────────

const NAV_LINKS = ["About", "Skills", "Experience", "Education", "Works", "Contact"];

const SKILLS = [
  { label: "HTML5 / CSS3",               level: 95 },
  { label: "JavaScript / TypeScript",    level: 85 },
  { label: "PHP / CodeIgniter",          level: 80 },
  { label: "WordPress / Joomla",         level: 92 },
  { label: "MySQL / Supabase",           level: 75 },
  { label: "React / Next.js",            level: 65 },
  { label: "Flutter / Dart",             level: 55 },
  { label: "Redux",                      level: 55 },
  { label: "Tailwind CSS",               level: 70 },
  { label: "Git / GitHub",              level: 82 },
  { label: "UI/UX & Responsive Design",  level: 88 },
];

const EXPERIENCES = [
  {
    role: "Senior Administrative Assistant I (Web Developer)",
    company: "City Government of Valenzuela",
    period: "July 19, 2022 – September 1, 2025",
    color: "#2dd4bf",
    logo: VAL_LOGO,
    bullets: [
      "Provided information systems and technical support for city-managed digital platforms",
      "Maintained and updated government websites and online information systems",
      "Assisted in system analysis, UI/UX improvements, and content management",
      "Ensured accessibility, responsiveness, and data accuracy of public-facing services",
      "Converted static pages into dynamic components to improve maintainability",
    ],
  },
  {
    role: "Website Developer",
    company: "Online Thinkers Technology — Development Unit",
    period: "May 19, 2020 – July 15, 2022",
    color: "#f472b6",
    logo: OTT_LOGO,
    bullets: [
      "Developed and maintained WordPress-based websites for private clients",
      "Implemented front-end solutions using HTML, CSS, and JavaScript",
      "Optimized site performance, responsiveness, and managed content updates",
      "Built and managed pages using Oxygen Builder and WPBakery",
      "Supported client websites and conducted troubleshooting and performance optimization",
    ],
  },
  {
    role: "Computer Custodian",
    company: "Saint Louis College Valenzuela — IT Support - Working Student",
    period: "June 12, 2017 – April 30, 2020",
    color: "#fb923c",
    logo: SLC_LOGO,
    bullets: [
      "Installed, configured, and maintained computer hardware and software",
      "Provided technical troubleshooting and user support across campus",
      "Assisted in basic system administration tasks",
    ],
  },
];

const WORK_GROUPS = [
  {
    group: "🏛️ City Government of Valenzuela",
    accent: "#2dd4bf",
    desc: "Administered and maintained the official government website serving Valenzuela City residents. Handled UI/UX improvements, responsive design, dynamic PHP components, content management, and system analysis for public-facing digital services.",
    tags: ["WordPress", "Oxygen Builder", "PHP", "Responsive Design", "CMS", "UI/UX"],
    sites: [
      { title: "Valenzuela City Official Website", url: "https://valenzuela.gov.ph" },
    ],
  },
  {
    group: "Online Thinkers Technology",
    accent: "#a78bfa",
    desc: "Managed multiple WordPress and Joomla sites for Canadian professional events spanning law, HR, finance, mortgage, and insurance industries. Handled theme customization, content publishing, UI enhancements, and performance optimization.",
    tags: ["WordPress", "Joomla", "WPBakery", "CSS3", "SEO", "Content Management"],
    sites: [
      { title: "Wealth Professional Awards",   url: "https://wealthprofessionalawards.ca/" },
      { title: "Canadian Mortgage Awards",     url: "https://canadianmortgageawards.com/" },
      { title: "Canadian Law Awards",          url: "https://lawawards.ca/" },
      { title: "Women in Law",                 url: "https://womeninlaw.ca/" },
      { title: "Women in Insurance Canada",    url: "https://women.insurancebusiness.ca/" },
      { title: "Women in Safety Calgary",      url: "https://calgary.womeninsafety.ca/" },
      { title: "Women in Wealth Management",   url: "https://women.wealthprofessional.ca/" },
      { title: "HR Leaders",                   url: "https://www.hrleaders.ca/" },
      { title: "HR Awards Canada",             url: "https://hrawards.ca/" },
      { title: "Canada's Safest Employers",    url: "https://safestemployers.com/" },
      { title: "HCA Magazine Canada",          url: "https://www.hcamag.com/ca" },
      { title: "IBA Awards Canada",            url: "https://www.ibawards.ca/" },
    ],
  },
];

const PERSONAL_PROJECTS = [
  {
    title: "SLCV Admin Portal",
    subtitle: "St. Louis College of Valenzuela — Capstone Project",
    accent: "#34d399",
    year: "2020",
    desc: "A full-featured web-based school administration system built as a capstone project. Covers student enrollment, grade management, faculty records, curriculum setup, subjects scheduling, library clearance, and transcript generation. Awarded Best Software Project.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS"],
    award: "🏆 Best Software Project",
    screens: "SLCV",
    docsUrl: "https://drive.google.com/file/d/1-KPz8ISE8cEAjAlo053f6hdirXxxoTqh/view",
  },
  {
    title: "DCO Internal Systems",
    subtitle: "Digital Communications Office — City Government of Valenzuela",
    accent: "#2dd4bf",
    year: "2022–2025",
    desc: "A suite of internal web tools built for the Digital Communications Office of Valenzuela City. Includes an Accomplishment Tracker (OT logs, work summaries), Inventory Management System (equipment, QR permits), and user management — all used in daily operations.",
    tags: ["PHP", "CodeIgniter", "MySQL", "Bootstrap", "JavaScript"],
    award: null,
    screens: "DCO",
    docsUrl: null,
  },
];

const SOCIAL_LINKS = [
  { href: "mailto:msmontalbo15@gmail.com",                       label: "Email",     logo: MAIL },
  { href: "https://www.linkedin.com/in/mark-spencer-montalbo/",  label: "LinkedIn",  logo: IN   },
  { href: "https://www.instagram.com/mrkspncr15/",               label: "Instagram", logo: IG   },
  { href: "https://www.facebook.com/mrkspncr15/",                label: "Facebook",  logo: FB   },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ─── Components ───────────────────────────────────────────────────────────────

function SocialIcons({ size = 38, style = {} }) {
  return (
    <div style={{ display: "flex", gap: "0.65rem", alignItems: "center", ...style }}>
      {SOCIAL_LINKS.map(({ href, label, logo }) => (
        <a key={label} href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" title={label}
          style={{ display: "inline-flex", width: size, height: size, borderRadius: "50%", overflow: "hidden", opacity: 0.72, transition: "opacity 0.2s, transform 0.2s", flexShrink: 0 }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1.12)"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "0.72"; e.currentTarget.style.transform = "scale(1)"; }}
        >
          <img src={logo} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </a>
      ))}
    </div>
  );
}

function SkillBar({ label, level, index }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{ marginBottom: "1.2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
        <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.85rem", color: "#e2e8f0", letterSpacing: "0.05em" }}>{label}</span>
        <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.8rem", color: "#2dd4bf" }}>{level}%</span>
      </div>
      <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: "2px", height: "3px", overflow: "hidden" }}>
        <div style={{ height: "100%", background: "linear-gradient(90deg, #2dd4bf, #a78bfa)", borderRadius: "2px", width: visible ? `${level}%` : "0%", transition: `width 1s cubic-bezier(0.4,0,0.2,1) ${index * 0.08}s` }} />
      </div>
    </div>
  );
}

function WorkGroupCard({ group, index }) {
  const [ref, visible] = useInView(0.08);
  const [expanded, setExpanded] = useState(false);
  const visibleSites = expanded ? group.sites : group.sites.slice(0, 4);
  return (
    <div ref={ref} style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: `3px solid ${group.accent}`, borderRadius: "4px", padding: "2rem", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `all 0.6s ease ${index * 0.1}s` }}>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#f1f5f9", marginBottom: "0.75rem", lineHeight: 1.3 }}>{group.group}</h3>
      <p style={{ fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.75, marginBottom: "1.25rem" }}>{group.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
        {group.tags.map(tag => (
          <span key={tag} style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.68rem", letterSpacing: "0.08em", padding: "0.2rem 0.6rem", background: group.accent + "18", border: `1px solid ${group.accent}33`, color: group.accent, borderRadius: "2px" }}>{tag}</span>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1rem" }}>
        <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.68rem", color: "#475569", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>// sites handled ({group.sites.length})</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "0.4rem" }}>
          {visibleSites.map(site => (
            <a key={site.title} href={site.url} target="_blank" rel="noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "#94a3b8", padding: "0.35rem 0.6rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "2px", transition: "all 0.2s", textDecoration: "none" }}
              onMouseEnter={e => { e.currentTarget.style.color = group.accent; e.currentTarget.style.borderColor = group.accent + "44"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; }}
            ><span style={{ color: group.accent, fontSize: "0.6rem" }}>↗</span>{site.title}</a>
          ))}
        </div>
        {group.sites.length > 4 && (
          <button onClick={() => setExpanded(!expanded)} style={{ marginTop: "0.75rem", background: "none", border: "none", fontFamily: "'Courier Prime', monospace", fontSize: "0.72rem", color: group.accent, cursor: "pointer", letterSpacing: "0.1em", padding: 0 }}>
            {expanded ? "↑ Show less" : `+ Show ${group.sites.length - 4} more`}
          </button>
        )}
      </div>
    </div>
  );
}

function LandingPageCard({ page, index, accent }) {
  const [ref, visible] = useInView(0.08);
  const [hovered, setHovered] = useState(false);
  return (
    <div ref={ref}
      style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "4px", overflow: "hidden", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: `all 0.55s ease ${index * 0.07}s`, cursor: "pointer" }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    >
      <div style={{ position: "relative", overflow: "hidden", height: "180px" }}>
        <img src={page.img} alt={page.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block", transform: hovered ? "scale(1.04)" : "scale(1)", transition: "transform 0.4s ease" }} />
        <div style={{ position: "absolute", inset: 0, background: hovered ? `linear-gradient(to bottom, transparent 30%, ${accent}22 100%)` : "linear-gradient(to bottom, transparent 40%, rgba(6,8,16,0.7) 100%)", transition: "background 0.3s ease" }} />
        <a href={page.url} target="_blank" rel="noreferrer"
          style={{ position: "absolute", top: "0.75rem", right: "0.75rem", background: "rgba(6,8,16,0.7)", border: `1px solid ${accent}44`, color: accent, fontFamily: "'Courier Prime', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", padding: "0.25rem 0.6rem", borderRadius: "2px", textDecoration: "none", opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(-4px)", transition: "all 0.25s ease" }}
          onClick={e => e.stopPropagation()}
        >↗ Visit Site</a>
      </div>
      <div style={{ padding: "1.25rem" }}>
        <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "#f1f5f9", marginBottom: "0.4rem", lineHeight: 1.3 }}>{page.title}</h4>
        <p style={{ fontSize: "0.78rem", color: "#64748b", lineHeight: 1.65, marginBottom: "0.9rem" }}>{page.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
          {page.tags.map(tag => (
            <span key={tag} style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.62rem", padding: "0.15rem 0.5rem", background: accent + "15", border: `1px solid ${accent}30`, color: accent, borderRadius: "2px" }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectShowcaseCard({ project, index, slcvScreens, dcoScreens }) {
  const [ref, visible] = useInView(0.06);
  const [activeScreen, setActiveScreen] = useState(0);
  const screens = project.screens === "SLCV" ? slcvScreens : dcoScreens;
  return (
    <div ref={ref} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: `3px solid ${project.accent}`, borderRadius: "4px", padding: "2rem", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `all 0.6s ease ${index * 0.15}s` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "#f1f5f9", marginBottom: "0.25rem" }}>{project.title}</h3>
          <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.75rem", color: project.accent }}>{project.subtitle}</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
          {project.award && <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.68rem", padding: "0.2rem 0.7rem", background: "#fbbf2415", border: "1px solid #fbbf2440", color: "#fbbf24", borderRadius: "2px" }}>{project.award}</span>}
          <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.68rem", color: "#475569" }}>{project.year}</span>
        </div>
      </div>
      <p style={{ fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.75, marginBottom: "1.25rem" }}>{project.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
        {project.tags.map(tag => (
          <span key={tag} style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.68rem", letterSpacing: "0.08em", padding: "0.2rem 0.6rem", background: project.accent + "18", border: `1px solid ${project.accent}33`, color: project.accent, borderRadius: "2px" }}>{tag}</span>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.25rem" }}>
        <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.68rem", color: "#475569", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>// screenshots</p>
        <div style={{ display: "flex", gap: "0.4rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
          {screens.map((s, i) => (
            <button key={i} onClick={() => setActiveScreen(i)} style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.68rem", padding: "0.25rem 0.75rem", background: activeScreen === i ? project.accent + "25" : "rgba(255,255,255,0.03)", border: `1px solid ${activeScreen === i ? project.accent + "66" : "rgba(255,255,255,0.08)"}`, color: activeScreen === i ? project.accent : "#64748b", borderRadius: "2px", cursor: "pointer", transition: "all 0.2s" }}>{s.label}</button>
          ))}
        </div>
        <div style={{ borderRadius: "4px", overflow: "hidden", border: `1px solid ${project.accent}22`, background: "#0a0e1a", maxHeight: "280px", display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
          <img src={screens[activeScreen].src} alt={screens[activeScreen].label} style={{ width: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
        </div>
        {project.docsUrl && (
          <a href={project.docsUrl} target="_blank" rel="noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginTop: "0.75rem", fontFamily: "'Courier Prime', monospace", fontSize: "0.72rem", color: project.accent, letterSpacing: "0.08em", textDecoration: "none", opacity: 0.8, transition: "opacity 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = "1"}
            onMouseLeave={e => e.currentTarget.style.opacity = "0.8"}
          ><span>📄</span> View Documentation</a>
        )}
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [activeNav,   setActiveNav]   = useState("About");
  const [scrolled,    setScrolled]    = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id);
    setMenuOpen(false);
  };

  const [contactRef, contactVisible] = useInView(0.1);
  const [expRef,     expVisible]     = useInView(0.1);
  const [skillRef,   skillVisible]   = useInView(0.1);
  const [worksRef,   worksVisible]   = useInView(0.05);
  const [eduRef,     eduVisible]     = useInView(0.1);

  return (
    <div style={{ background: "#060810", minHeight: "100vh", color: "#e2e8f0", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&family=Courier+Prime:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #060810; }
        ::-webkit-scrollbar-thumb { background: #2dd4bf44; border-radius: 2px; }
        a { text-decoration: none; color: inherit; }
        ::selection { background: #2dd4bf33; color: #2dd4bf; }
        .noise-bg::before { content: ''; position: fixed; inset: 0; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E"); pointer-events: none; z-index: 0; opacity: 0.5; }
        .grid-bg { position: fixed; inset: 0; background-image: linear-gradient(rgba(45,212,191,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.03) 1px, transparent 1px); background-size: 60px 60px; pointer-events: none; z-index: 0; }
        .glow-orb-1 { position: fixed; width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, rgba(45,212,191,0.06) 0%, transparent 70%); top: -100px; left: -100px; pointer-events: none; z-index: 0; }
        .glow-orb-2 { position: fixed; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%); bottom: -100px; right: -100px; pointer-events: none; z-index: 0; }
        section { position: relative; z-index: 1; }
        nav { position: relative; z-index: 100; }
        @media (max-width: 768px) {
          .hero-name { font-size: 3rem !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .works-grid { grid-template-columns: 1fr !important; }
          .exp-header { flex-direction: column !important; }
          .section-inner { padding: 5rem 1.5rem !important; }
          .mobile-menu { display: flex !important; }
          .desktop-nav { display: none !important; }
        }
      `}</style>

      <div className="noise-bg" />
      <div className="grid-bg" />
      <div className="glow-orb-1" />
      <div className="glow-orb-2" />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, padding: "1.2rem 3rem", background: scrolled ? "rgba(6,8,16,0.85)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(45,212,191,0.08)" : "none", transition: "all 0.4s ease", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 100 }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#2dd4bf", letterSpacing: "0.02em" }}>My Portfolio<span style={{ color: "#f1f5f9" }}>.</span></div>
        <div className="desktop-nav" style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => scrollTo(link)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Courier Prime', monospace", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: activeNav === link ? "#2dd4bf" : "#64748b", transition: "color 0.2s", padding: 0 }}>{link}</button>
          ))}
          <a href="mailto:msmontalbo15@gmail.com" style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.5rem 1.2rem", border: "1px solid #2dd4bf55", color: "#2dd4bf", transition: "all 0.2s" }}>Hire Me</a>
        </div>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "1px solid rgba(45,212,191,0.3)", color: "#2dd4bf", cursor: "pointer", padding: "0.4rem 0.6rem", fontFamily: "'Courier Prime', monospace", fontSize: "0.8rem" }}>{menuOpen ? "✕" : "≡"}</button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(6,8,16,0.97)", zIndex: 99, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem" }}>
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => scrollTo(link)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: activeNav === link ? "#2dd4bf" : "#f1f5f9" }}>{link}</button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 3rem", paddingTop: "5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#2dd4bf", marginBottom: "1.5rem", opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(10px)", transition: "all 0.6s ease 0.1s" }}>Available for new roles</p>
              <h1 className="hero-name" style={{ fontFamily: "'Playfair Display', serif", fontSize: "4.5rem", lineHeight: 1.05, fontWeight: 700, color: "#f1f5f9", marginBottom: "0.5rem", opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "all 0.7s ease 0.2s" }}>
                Mark Spencer<br /><span style={{ color: "#2dd4bf" }}>Montalbo</span>
              </h1>
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.3rem", color: "#64748b", marginBottom: "2rem", opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "all 0.7s ease 0.35s" }}>Web Developer & Website Administrator</p>
              <p style={{ fontSize: "0.95rem", color: "#94a3b8", lineHeight: 1.85, maxWidth: "480px", marginBottom: "2.5rem", opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "all 0.7s ease 0.45s" }}>
                Over 4 years crafting reliable, user-focused websites for government and private organizations. I blend logic with design — taking creative UIs from concept to code with clean, maintainable solutions.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "all 0.7s ease 0.55s" }}>
                <button onClick={() => scrollTo("Works")} style={{ background: "#2dd4bf", color: "#060810", border: "none", padding: "0.8rem 2rem", fontFamily: "'Courier Prime', monospace", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", fontWeight: 700 }}>View Works</button>
              </div>
              <div style={{ marginTop: "2rem", opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "all 0.7s ease 0.65s" }}>
                <SocialIcons size={36} />
              </div>
            </div>
            <div style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateX(30px)", transition: "all 0.8s ease 0.4s" }}>
              <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(45,212,191,0.12)", borderRadius: "4px", padding: "2.5rem" }}>
                <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.7rem", color: "#2dd4bf", letterSpacing: "0.15em", marginBottom: "1.5rem" }}>// quick.stats</p>
                {[["4+","Years of Experience"],["2","Employer Types (Gov + Private)"],["12+","Websites Managed"],["BSc","Computer Science"]].map(([num, label]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0.9rem 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#f1f5f9" }}>{num}</span>
                    <span style={{ fontSize: "0.8rem", color: "#64748b", textAlign: "right", maxWidth: "180px", lineHeight: 1.4 }}>{label}</span>
                  </div>
                ))}
                <div style={{ marginTop: "1.5rem" }}>
                  <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.7rem", color: "#64748b", letterSpacing: "0.1em", marginBottom: "0.8rem" }}>// location & availability</p>
                  <p style={{ fontSize: "0.85rem", color: "#94a3b8" }}>📍 Valenzuela City, Metro Manila</p>
                  <p style={{ fontSize: "0.85rem", color: "#94a3b8", marginTop: "0.4rem" }}>🟢 Open to WFH & Onsite (Metro Manila)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div ref={skillRef} className="section-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 3rem" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.75rem", color: "#2dd4bf", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>02 / Skills</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", color: "#f1f5f9", opacity: skillVisible ? 1 : 0, transform: skillVisible ? "none" : "translateY(20px)", transition: "all 0.6s ease" }}>Technical Expertise</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "0 5rem" }}>
            {SKILLS.map((s, i) => <SkillBar key={s.label} {...s} index={i} />)}
          </div>
          <div style={{ marginTop: "3rem", display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {["Flutter","Dart","Supabase","Redux","TypeScript","Tailwind CSS","React","Next.js","Node.js","Git / GitHub / GitLab","cPanel","Google Tag Manager","Basic SEO","API Integration","Oxygen Builder","WPBakery"].map(tag => (
              <span key={tag} style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.72rem", padding: "0.3rem 0.8rem", background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.2)", color: "#a78bfa", borderRadius: "2px", letterSpacing: "0.06em" }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div ref={expRef} className="section-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 3rem" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.75rem", color: "#2dd4bf", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>03 / Experience</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", color: "#f1f5f9", opacity: expVisible ? 1 : 0, transform: expVisible ? "none" : "translateY(20px)", transition: "all 0.6s ease" }}>Professional Journey</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {EXPERIENCES.map((exp, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: `3px solid ${exp.color}`, borderRadius: "4px", padding: "2.5rem", opacity: expVisible ? 1 : 0, transform: expVisible ? "none" : "translateX(-24px)", transition: `all 0.6s ease ${i * 0.15}s` }}>
                <div className="exp-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <img src={exp.logo} alt={exp.company} style={{ width: "52px", height: "52px", borderRadius: "8px", objectFit: "cover", flexShrink: 0, border: `1px solid ${exp.color}33`, background: "#fff" }} />
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", color: "#f1f5f9", marginBottom: "0.3rem" }}>{exp.role}</h3>
                      <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.85rem", color: exp.color }}>{exp.company}</p>
                    </div>
                  </div>
                  <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.72rem", color: "#64748b", letterSpacing: "0.06em", whiteSpace: "nowrap", paddingTop: "0.2rem" }}>{exp.period}</span>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: "0.875rem", color: "#94a3b8", lineHeight: 1.7, paddingLeft: "1.2rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: exp.color }}>→</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div ref={eduRef} className="section-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 3rem" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.75rem", color: "#2dd4bf", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>04 / Education</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", color: "#f1f5f9", opacity: eduVisible ? 1 : 0, transform: eduVisible ? "none" : "translateY(20px)", transition: "all 0.6s ease" }}>Academic Background</h2>
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderLeft: "3px solid #34d399", borderRadius: "4px", padding: "2.5rem", opacity: eduVisible ? 1 : 0, transform: eduVisible ? "none" : "translateX(-24px)", transition: "all 0.6s ease 0.1s" }}>
            <div className="exp-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", color: "#f1f5f9", marginBottom: "0.3rem" }}>Bachelor of Science in Computer Science</h3>
                <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.85rem", color: "#34d399" }}>St. Louis College of Valenzuela</p>
                <p style={{ fontSize: "0.8rem", color: "#64748b", marginTop: "0.25rem" }}>Maysan Road, Valenzuela City &nbsp;·&nbsp; <a href="https://www.slcv.edu.ph" target="_blank" rel="noreferrer" style={{ color: "#34d399" }}>slcv.edu.ph</a></p>
              </div>
              <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.72rem", color: "#64748b", letterSpacing: "0.06em", whiteSpace: "nowrap", paddingTop: "0.2rem" }}>June 2015 – December 2020</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
              {[{ label: "🏆 Best Software Project", accent: "#fbbf24" }, { label: "🎖️ Student Council Service Awardee", accent: "#34d399" }, { label: "🎖️ Student Services Awardee", accent: "#34d399" }].map(({ label, accent }) => (
                <span key={label} style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.75rem", padding: "0.35rem 0.9rem", background: accent + "15", border: `1px solid ${accent}44`, color: accent, borderRadius: "2px", letterSpacing: "0.05em" }}>{label}</span>
              ))}
            </div>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(251,191,36,0.15)", borderRadius: "4px", padding: "1.75rem" }}>
              <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.68rem", color: "#fbbf24", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>// best software project — capstone</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "1rem", alignItems: "flex-start" }}>
                <div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#f1f5f9", marginBottom: "0.5rem" }}>St. Louis College Registrar System</h4>
                  <p style={{ fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.75, marginBottom: "1rem" }}>A web-based registrar management system developed as a capstone project for St. Louis College Valenzuela. Features secure login authentication, student records management, grade tracking, subject scheduling, clearance system, and an admin dashboard — awarded Best Software Project upon completion.</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                    {["PHP","MySQL","HTML/CSS","JavaScript","Bootstrap"].map(tag => (
                      <span key={tag} style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.68rem", padding: "0.2rem 0.6rem", background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.2)", color: "#fbbf24", borderRadius: "2px" }}>{tag}</span>
                    ))}
                  </div>
                  <a href="https://drive.google.com/file/d/1-KPz8ISE8cEAjAlo053f6hdirXxxoTqh/view" target="_blank" rel="noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontFamily: "'Courier Prime', monospace", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#fbbf24", padding: "0.5rem 1rem", border: "1px solid rgba(251,191,36,0.35)", borderRadius: "2px", background: "rgba(251,191,36,0.06)", transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(251,191,36,0.15)"; e.currentTarget.style.borderColor = "rgba(251,191,36,0.6)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(251,191,36,0.06)"; e.currentTarget.style.borderColor = "rgba(251,191,36,0.35)"; }}
                  ><span>📄</span> View Documentation</a>
                </div>
                <div style={{ background: "rgba(6,8,16,0.8)", border: "1px solid rgba(251,191,36,0.2)", borderRadius: "4px", padding: "1rem", textAlign: "center", minWidth: "100px" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.4rem" }}>🎓</div>
                  <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.6rem", color: "#fbbf24", letterSpacing: "0.1em" }}>BEST<br/>SOFTWARE<br/>PROJECT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works">
        <div ref={worksRef} className="section-inner" style={{ maxWidth: "1200px", margin: "0 auto", padding: "7rem 3rem" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.75rem", color: "#2dd4bf", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>05 / Works</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", color: "#f1f5f9", opacity: worksVisible ? 1 : 0, transform: worksVisible ? "none" : "translateY(20px)", transition: "all 0.6s ease" }}>Sites Handled</h2>
            <p style={{ fontSize: "0.9rem", color: "#64748b", marginTop: "0.75rem", lineHeight: 1.7, maxWidth: "600px" }}>A collection of 12+ websites I've maintained and updated across government, insurance, law, HR, finance, and professional events industries — spanning Canada and the Philippines.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "1.25rem" }}>
            {WORK_GROUPS.map((group, i) => <WorkGroupCard key={group.group} group={group} index={i} />)}
          </div>

          {/* Valenzuela Landing Pages */}
          <div style={{ marginTop: "3.5rem" }}>
            <div style={{ marginBottom: "2rem" }}>
              <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.72rem", color: "#2dd4bf", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.5rem" }}>// valenzuela.gov.ph — landing pages</p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#f1f5f9" }}>City Landing Pages</h3>
              <p style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.5rem", lineHeight: 1.7, maxWidth: "520px" }}>Event and campaign landing pages I built and published on the official Valenzuela City website — from tax amnesty to sports clinics.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {VAL_LANDING_PAGES.map((page, i) => (
                <LandingPageCard key={page.title} page={page} index={i} accent="#2dd4bf" />
              ))}
            </div>
          </div>

          {/* Personal Projects */}
          <div style={{ marginTop: "4rem" }}>
            <div style={{ marginBottom: "2rem" }}>
              <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.72rem", color: "#a78bfa", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.5rem" }}>// personal.projects</p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#f1f5f9" }}>Built From Scratch</h3>
              <p style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.5rem", lineHeight: 1.7, maxWidth: "520px" }}>Systems I designed and developed independently — from capstone to production-level internal tools.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "1.5rem" }}>
              {PERSONAL_PROJECTS.map((project, i) => (
                <ProjectShowcaseCard key={project.title} project={project} index={i} slcvScreens={SLCV_SCREENS} dcoScreens={DCO_SCREENS} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div ref={contactRef} className="section-inner" style={{ maxWidth: "800px", margin: "0 auto", padding: "7rem 3rem", textAlign: "center" }}>
          <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.75rem", color: "#2dd4bf", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem", opacity: contactVisible ? 1 : 0, transition: "all 0.5s ease 0.1s" }}>06 / Contact</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", color: "#f1f5f9", marginBottom: "1.25rem", opacity: contactVisible ? 1 : 0, transform: contactVisible ? "none" : "translateY(20px)", transition: "all 0.6s ease 0.2s" }}>Let's Work Together</h2>
          <p style={{ fontSize: "0.95rem", color: "#64748b", lineHeight: 1.8, maxWidth: "520px", margin: "0 auto 2.5rem", opacity: contactVisible ? 1 : 0, transition: "all 0.6s ease 0.3s" }}>I'm open to new opportunities — whether it's a full-time role, freelance project, or a collaborative build. Let's make something great.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", opacity: contactVisible ? 1 : 0, transition: "all 0.6s ease 0.4s" }}>
            <a href="mailto:msmontalbo15@gmail.com" style={{ background: "#2dd4bf", color: "#060810", padding: "0.85rem 2.2rem", fontFamily: "'Courier Prime', monospace", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700 }}>msmontalbo15@gmail.com</a>
            <a href="https://www.linkedin.com/in/mark-spencer-montalbo" target="_blank" rel="noreferrer" style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#94a3b8", padding: "0.85rem 2.2rem", fontFamily: "'Courier Prime', monospace", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>LinkedIn</a>
            <a href="https://bit.ly/Spencer-Portforlio" target="_blank" rel="noreferrer" style={{ border: "1px solid rgba(167,139,250,0.3)", color: "#a78bfa", padding: "0.85rem 2.2rem", fontFamily: "'Courier Prime', monospace", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Portfolio Site</a>
          </div>
          <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", opacity: contactVisible ? 1 : 0, transition: "all 0.6s ease 0.5s" }}>
            <SocialIcons size={42} />
          </div>
          <p style={{ marginTop: "1.5rem", fontFamily: "'Courier Prime', monospace", fontSize: "0.78rem", color: "#334155" }}>📞 0995-567-9027 &nbsp;|&nbsp; 📍 Valenzuela City, Metro Manila</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.04)", padding: "2rem 3rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", position: "relative", zIndex: 1 }}>
        <span style={{ fontFamily: "'Playfair Display', serif", color: "#2dd4bf", fontSize: "1rem" }}>My Portfolio.</span>
        <SocialIcons size={32} />
        <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.72rem", color: "#334155", letterSpacing: "0.1em" }}>© 2026 Mark Spencer Montalbo — Web Developer</span>
      </footer>
    </div>
  );
}