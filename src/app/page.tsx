"use client";

import { ArrowUpRight, Link, Mail, Menu, Phone, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useState } from "react";

const experience = [
  {
    role: "Django Developer",
    company: "CS Soft Solutions Pvt Ltd, Mohali",
    period: "Jan 2023 - Present",
    details:
      "Built scalable Django and DRF applications, integrated third-party services, and optimized SQL/ORM performance to improve response times by around 30%.",
  },
  {
    role: "Trainee",
    company: "CS Soft Solutions Pvt Ltd, Mohali",
    period: "Jan 2022 - Dec 2022",
    details:
      "Contributed to PHP and WordPress solutions, including WooCommerce and Elementor customizations, debugging, and performance improvements.",
  },
];

const skillGroups = [
  {
    title: "Backend & Databases",
    items: ["Python", "Django", "Django REST Framework", "Flask", "MySQL"],
  },
  {
    title: "Frontend",
    items: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Git"],
  },
  {
    title: "CMS & PHP Development",
    items: ["WordPress", "Elementor", "ACF", "WooCommerce", "PHP"],
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.1,
      lerp: 0.1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power2.out" }
      );

      gsap.utils.toArray<HTMLElement>(".section-animate").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 80%" },
          }
        );
      });
    });

    return () => {
      ctx.revert();
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative overflow-x-clip bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(244,114,182,0.15),transparent_30%)]" />

      <header className="fixed top-5 left-1/2 z-50 w-[min(1100px,calc(100%-1.5rem))] -translate-x-1/2 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
        <nav className="flex items-center justify-between gap-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-sky-200 sm:text-sm">
            AMIT SINGH
          </p>
          <div className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#experience" className="hover:text-white">
              Experience
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-slate-100 transition hover:bg-white/10 md:hidden"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

      </header>
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu backdrop"
          onClick={closeMobileMenu}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        />
        <nav
          className={`absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center transition-transform duration-300 ${
            mobileMenuOpen ? "translate-y-0" : "translate-y-6"
          }`}
        >
          <a
            href="#about"
            onClick={closeMobileMenu}
            className="text-3xl font-semibold tracking-wide text-slate-100 transition hover:text-sky-300"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={closeMobileMenu}
            className="text-3xl font-semibold tracking-wide text-slate-100 transition hover:text-sky-300"
          >
            Experience
          </a>
          <a
            href="#skills"
            onClick={closeMobileMenu}
            className="text-3xl font-semibold tracking-wide text-slate-100 transition hover:text-sky-300"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="text-3xl font-semibold tracking-wide text-slate-100 transition hover:text-sky-300"
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            download
            onClick={closeMobileMenu}
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-400/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-sky-100 transition hover:bg-sky-300/20"
          >
            Download Resume <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>

      <main className="mx-auto flex w-[min(1100px,calc(100%-1.5rem))] flex-col gap-28 pb-20 pt-36 md:pt-44">
        <section className="grid items-end gap-12 md:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6">
            <p className="hero-reveal inline-flex rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-sky-100">
              Django Developer
            </p>
            <h1 className="hero-reveal text-4xl leading-tight font-semibold md:text-6xl">
              Building robust APIs, performant backends, and polished web
              products.
            </h1>
            <p className="hero-reveal max-w-2xl text-lg text-slate-300">
              I am Amit Singh, a full-stack web developer from Mohali, Punjab.
              I focus on Django, DRF, and practical engineering that ships on
              time and scales reliably.
            </p>
            <div className="hero-reveal flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:translate-y-[-2px]"
              >
                Hire Me <ArrowUpRight size={16} />
              </a>
              <a
                href="https://14kb.co.in/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Source Profile <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="hero-reveal rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-sky-900/30 backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300">
              Current Role
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Software Developer (Python)
            </h2>
            <p className="mt-2 text-slate-300">CS Soft Solutions Pvt. Ltd.</p>
            <p className="mt-8 text-sm text-slate-400">
              Education: Bachelor of Computer Applications, Lovely Professional
              University, Jalandhar
            </p>
          </div>
        </section>

        <section id="about" className="section-animate space-y-5">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            About
          </p>
          <h3 className="text-3xl font-semibold">Pragmatic engineering style</h3>
          <p className="max-w-3xl text-slate-300">
            I build and maintain scalable web applications with Django and
            modern front-end tools. My focus is clean architecture, reliable
            APIs, and optimizing database and ORM operations while keeping
            delivery velocity high.
          </p>
        </section>

        <section id="experience" className="section-animate space-y-7">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Work Experience
          </p>
          <div className="grid gap-5">
            {experience.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="text-xl font-semibold text-white">{item.role}</h4>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.15em] text-slate-300">
                    {item.period}
                  </span>
                </div>
                <p className="mt-2 text-sky-200">{item.company}</p>
                <p className="mt-4 text-slate-300">{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-animate space-y-7">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Skills
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h4 className="text-lg font-semibold text-white">{group.title}</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1 text-sm text-sky-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-animate">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Contact
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-white">
              Let&apos;s build something impactful
            </h3>
            <div className="mt-7 grid gap-4 text-slate-200 md:grid-cols-2">
              <a
                href="mailto:amitsingh100996@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-3 hover:bg-white/10"
              >
                <Mail size={16} /> amitsingh100996@gmail.com
              </a>
              <a
                href="tel:+919988805966"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-3 hover:bg-white/10"
              >
                <Phone size={16} /> +91 998-880-5966
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-3 hover:bg-white/10"
              >
                <Link size={16} /> LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-3 hover:bg-white/10"
              >
                <Link size={16} /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
