// ─────────────────────────────────────────────────────────
// About.js
// About section – bio, highlights, and stat cards.
// ─────────────────────────────────────────────────────────

import React from 'react';
import useReveal from '../hooks/useReveal';
import './About.css';

const HIGHLIGHTS = [
  ['Pixel-perfect implementation', 'Translating Figma designs to production-ready components with precision.'],
  ['Performance-conscious',        'Writing optimised code that loads fast and feels smooth on any device.'],
  ['Continuous learner',           'Actively deepening skills in full-stack development and modern tooling.'],
];

const STATS = [
  ['1.9', 'Years professional experience'],
  ['10+', 'Projects delivered'],
  ['5+',  'Technologies in active use'],
  ['∞',   'Curiosity for great products'],
];

function About() {
  const ref = useReveal();

  return (
    <div className="section-wrap" id="about">
      <div className="reveal" ref={ref}>
        <div className="sec-label">About Me</div>
        <h2 className="sec-title">A developer who cares about the details</h2>

        <div className="about__grid">
          {/* ── Left: bio + highlights ── */}
          <div className="about__body">
            <p>I'm <strong>Navya Golash</strong>, a frontend developer with <strong>1.9 years of experience</strong> at Imperial Overseas. I specialise in turning designs into clean, maintainable code with a sharp eye for UX.</p>
            <p>My work spans the full frontend stack — semantic HTML, CSS architecture, React-powered SPAs, and Node.js / PHP backends.</p>
            <p>Currently <strong>open to new opportunities</strong> where I can contribute to meaningful products and continue growing.</p>

            <div className="about__highlights">
              {HIGHLIGHTS.map(([title, desc]) => (
                <div className="about__highlight" key={title}>
                  <span className="about__highlight-icon">◈</span>
                  <div className="about__highlight-text">
                    <strong>{title}</strong>
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: stat cards ── */}
          <div className="about__stats">
            {STATS.map(([val, desc]) => (
              <div className="about__stat-row" key={val}>
                <div className="about__stat-val">{val}</div>
                <div className="about__stat-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
