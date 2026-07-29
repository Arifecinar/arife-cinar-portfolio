'use client';

import { useState } from 'react';
import Image from 'next/image';

/* ─── Bilingual content ──────────────────────────────────────── */
const content = {
  tr: {
    name: 'Arife Çınar',
    title: 'Bilgisayar Mühendisi',
    subtitle: 'Frontend & Full-Stack Geliştirici',
    about:
      'Pamukkale Üniversitesi Bilgisayar Mühendisliği bölümünden mezun oldum. React, Next.js, Node.js, PostgreSQL ve React Native kullanarak kullanıcı deneyimi odaklı web ve mobil uygulamalar geliştiriyorum.',
    stack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'React Native'],
    cvLabel: 'CV İndir',
    imageAlt: 'Arife Çınar profil fotoğrafı',
  },
  en: {
    name: 'Arife Çınar',
    title: 'Computer Engineer',
    subtitle: 'Frontend & Full-Stack Developer',
    about:
      'Graduated from Pamukkale University, Computer Engineering. I build user experience-focused web and mobile applications using React, Next.js, Node.js, PostgreSQL, and React Native.',
    stack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'React Native'],
    cvLabel: 'Download CV',
    imageAlt: 'Arife Çınar profile photo',
  },
} as const;

/* ─── SVG Icons ──────────────────────────────────────────────── */
function GitHubIcon() {
  return (
    <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.021C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

/* ─── Component ──────────────────────────────────────────────── */
export default function LandingClient() {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');
  const t = content[lang];

  return (
    <>

      {/* ── Language toggle ── */}
      <div className="fixed right-6 top-6 z-50 flex overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-0.5 shadow-lg shadow-purple-900/20">
        {(['tr', 'en'] as const).map((l) => (
          <button
            key={l}
            id={`lang-${l}`}
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className="relative rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300"
            style={{
              background: lang === l ? 'linear-gradient(135deg, #7c3aed, #6d28d9)' : 'transparent',
              color: lang === l ? 'white' : 'var(--color-muted)',
              boxShadow: lang === l ? '0 0 12px rgba(139,92,246,0.5)' : 'none',
            }}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* ── Main layout ── */}
      <main className="relative z-10 flex min-h-dvh items-center justify-center px-6 py-20">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ══ LEFT: Text content ══ */}
          <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">

            {/* Name */}
            <div>
              <h1 className="gradient-text text-5xl font-bold tracking-tight sm:text-6xl">
                {t.name}
              </h1>
              <p className="mt-2 text-lg font-semibold" style={{ color: 'var(--color-accent-soft)' }}>
                {t.title}
              </p>
              <p className="mt-0.5 text-base font-medium" style={{ color: 'var(--color-muted)' }}>
                {t.subtitle}
              </p>
            </div>

            {/* Divider */}
            <div
              className="h-px w-16 self-center lg:self-start"
              style={{ background: 'linear-gradient(90deg, var(--color-accent), transparent)' }}
            />

            {/* About */}
            <p className="max-w-md self-center text-sm leading-relaxed lg:self-start" style={{ color: 'var(--color-muted)' }}>
              {t.about}
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {t.stack.map((tech) => (
                <span
                  key={tech}
                  className="tech-pill rounded-lg px-5 py-2 text-sm font-medium"
                  style={{
                    background: 'rgba(139,92,246,0.12)',
                    border: '1px solid rgba(139,92,246,0.35)',
                    color: 'var(--color-accent-soft)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Social buttons */}
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                id="link-github"
                href="https://github.com/Arifecinar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-btn flex items-center gap-3 rounded-lg px-7 py-3.5 text-base font-medium text-[var(--color-muted)]"
              >
                <GitHubIcon />
                GitHub
              </a>

              <a
                id="link-linkedin"
                href="https://www.linkedin.com/in/arife-cinar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-btn flex items-center gap-3 rounded-lg px-7 py-3.5 text-base font-medium text-[var(--color-muted)]"
              >
                <LinkedInIcon />
                LinkedIn
              </a>

              <a
                id="link-email"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=arifecinar226@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="E-posta"
                className="social-btn flex items-center gap-3 rounded-lg px-7 py-3.5 text-base font-medium text-[var(--color-muted)]"
              >
                <MailIcon />
                E-mail
              </a>
            </div>

            {/* CV Download button */}
            <div className="flex justify-center lg:justify-start mt-2">
              <a
                id="btn-cv-download"
                href="/Arife_Cinar_CV.pdf"
                download="Arife_Cinar_CV.pdf"
                className="cv-btn group flex items-center gap-3 rounded-lg px-10 py-4 text-base font-bold text-white tracking-wide"
              >
                <DownloadIcon />
                {t.cvLabel}
              </a>
            </div>
          </div>

          {/* ══ RIGHT: Profile image ══ */}
          <div className="relative z-10 flex items-center justify-center order-1 lg:order-2">
            {/* Outer rotating gradient ring */}
            <div
              className="absolute rounded-full"
              style={{
                inset: '-20px',
                background: 'conic-gradient(from 0deg, rgba(139,92,246,0) 0%, rgba(139,92,246,0.8) 25%, rgba(236,72,153,0.8) 50%, rgba(139,92,246,0.8) 75%, rgba(139,92,246,0) 100%)',
                animation: 'spin-ring 8s linear infinite',
                zIndex: 0,
                borderRadius: '50%',
              }}
            />
            {/* Glow ring behind image */}
            <div
              className="absolute rounded-full"
              style={{
                inset: '-8px',
                background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(109,40,217,0.25) 40%, transparent 70%)',
                animation: 'glow-ring 4s ease-in-out infinite',
                zIndex: 0,
              }}
            />
            {/* Image container — perfect circle */}
            <div
              className="relative overflow-hidden"
              style={{
                width: 'clamp(280px, 34vw, 420px)',
                height: 'clamp(280px, 34vw, 420px)',
                borderRadius: '50%',
                border: '3px solid rgba(139,92,246,0.75)',
                background: 'linear-gradient(135deg, #1a0035, #07000f)',
                animation: 'float 6s ease-in-out infinite',
                zIndex: 1,
                flexShrink: 0,
              }}
            >
              <Image
                src="/profile.png"
                alt={t.imageAlt}
                width={420}
                height={420}
                className="h-full w-full object-cover object-top"
                priority
              />
              {/* Inner glow overlay */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 30% 20%, rgba(139,92,246,0.18), transparent 60%)',
                  boxShadow: 'inset 0 0 40px rgba(139,92,246,0.12)',
                }}
              />
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
