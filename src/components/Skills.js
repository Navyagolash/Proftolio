// ─────────────────────────────────────────────────────────
// Skills.js
// Skills section – animated progress bars per category.
// ─────────────────────────────────────────────────────────

import React from 'react';
import useReveal from '../hooks/useReveal';
import './Skills.css';

const SKILLS = [
  {
    category: 'Foundation',
    items: [
      { name: 'HTML5',            pct: 92 },
      { name: 'CSS3 / SCSS',      pct: 88 },
      { name: 'JavaScript ES6+',  pct: 84 },
      { name: 'Responsive Design',pct: 90 },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'React.js',    pct: 80 },
      { name: 'Tailwind CSS',pct: 82 },
      { name: 'Bootstrap',   pct: 86 },
      { name: 'REST APIs',   pct: 76 },
    ],
  },
  {
    category: 'Full Stack',
    items: [
      { name: 'Node.js',     pct: 68 },
      { name: 'PHP',         pct: 65 },
      { name: 'Git & GitHub',pct: 78 },
      { name: 'Figma',       pct: 72 },
    ],
  },
];

function Skills() {
  const ref = useReveal();

  return (
    <div className="section-wrap" id="skills">
      <div className="reveal" ref={ref}>
        <div className="sec-label">Skills</div>
        <h2 className="sec-title">Technologies I work with</h2>

        <div className="skills__grid">
          {SKILLS.map(({ category, items }) => (
            <div className="skills__col" key={category}>
              <div className="skills__col-title">{category}</div>

              {items.map(({ name, pct }) => (
                <div className="skills__item" key={name}>
                  <div className="skills__item-header">
                    <span>{name}</span>
                    <span className="skills__pct">{pct}%</span>
                  </div>
                  <div className="skills__track">
                    {/* data-w is read by useReveal to animate width */}
                    <div className="skill-fill" data-w={pct}>
                      <div className="skills__dot" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
