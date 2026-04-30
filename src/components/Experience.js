// ─────────────────────────────────────────────────────────
// Experience.js
// Work experience section – timeline layout.
// ─────────────────────────────────────────────────────────

import React from 'react';
import useReveal from '../hooks/useReveal';
import './Experience.css';

const EXPERIENCE = [
  {
    date: '2023 — Present',
    duration: '1.9 years',
    role: 'Frontend Developer',
    company: 'Imperial Overseas · Mumbai, India',
    desc: 'Developed and maintained responsive web applications for clients in the education and overseas consultancy sector. Collaborated with designers and back-end developers to ship features on schedule. Led UI refactoring that improved load performance and reduced CSS bundle size. Built reusable React component libraries used across multiple client projects.',
    chips: ['React.js', 'JavaScript', 'HTML & CSS', 'Node.js', 'PHP', 'Tailwind', 'Git', 'Figma'],
  },
];

function Experience() {
  const ref = useReveal();

  return (
    <div className="section-wrap" id="experience">
      <div className="reveal" ref={ref}>
        <div className="sec-label">Experience</div>
        <h2 className="sec-title">Where I've worked</h2>

        {EXPERIENCE.map(({ date, duration, role, company, desc, chips }) => (
          <div className="exp__entry" key={role}>
            {/* Date column */}
            <div className="exp__date">
              {date}
              <br />
              <span className="exp__duration">{duration}</span>
            </div>

            {/* Details column */}
            <div className="exp__details">
              <div className="exp__role">{role}</div>
              <div className="exp__company">{company}</div>
              <p className="exp__desc">{desc}</p>
              <div className="exp__chips">
                {chips.map((chip) => (
                  <span className="exp__chip" key={chip}>{chip}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
