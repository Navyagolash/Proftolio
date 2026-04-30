// ─────────────────────────────────────────────────────────
// Hero.js
// Full-viewport landing section with animated name,
// typewriter text, and a profile card.
// ─────────────────────────────────────────────────────────

import React from 'react';
import useTyped from '../hooks/useTyped';
import './Hero.css';

const TYPED_PHRASES = [
  'React · JavaScript · Node.js',
  'Building elegant UIs',
  'Open to new opportunities',
  '1.9 years @ Imperial Overseas',
];

function ProfileCard() {
  return (
    <div className="hero__card">
      <div className="hero__card-avatar">👩‍💻</div>
      <div className="hero__card-name">Navya Golash</div>
      <div className="hero__card-role">Frontend Developer</div>
      <div className="hero__card-divider" />

      <div className="hero__card-stat">
        <span className="hero__card-stat-label">Experience</span>
        <span className="hero__card-stat-val">1.9 yrs</span>
      </div>
      <div className="hero__card-stat">
        <span className="hero__card-stat-label">Company</span>
        <span className="hero__card-stat-val">Imperial Overseas</span>
      </div>
      <div className="hero__card-stat">
        <span className="hero__card-stat-label">Location</span>
        <span className="hero__card-stat-val">Mumbai, IN</span>
      </div>

      <div className="hero__card-divider" />
      <div className="hero__card-badge">
        <div className="hero__card-badge-dot" />
        <span>Open to new opportunities</span>
      </div>
    </div>
  );
}

function Hero() {
  const typed = useTyped(TYPED_PHRASES);

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="hero">
      {/* ── Left: Text content ── */}
      <div className="hero__left">
        <div className="hero__eyebrow">
          <div className="hero__eyebrow-line" />
          <span className="hero__eyebrow-text">Frontend Developer · Mumbai, India</span>
        </div>

        <h1 className="hero__name">
          Navya<br />
          <em>Golash</em>
        </h1>

        <p className="hero__tagline">Building elegant interfaces for the modern web.</p>

        <p className="hero__desc">
          Frontend developer with 1.9 years at Imperial Overseas — crafting responsive,
          accessible, and performant web experiences using React, JavaScript, and
          full-stack technologies.
        </p>

        {/* Typewriter line */}
        <p className="hero__typed">
          &gt; {typed}
          <span className="hero__cursor" />
        </p>

        {/* CTA buttons */}
        <div className="hero__actions">
          <a
            href="#projects"
            className="btn btn-primary"
            onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn btn-ghost"
            onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
          >
            Let's Connect
          </a>
        </div>
      </div>

      {/* ── Right: Profile card ── */}
      <div className="hero__right">
        <ProfileCard />
      </div>
    </div>
  );
}

export default Hero;
