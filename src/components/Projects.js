// ─────────────────────────────────────────────────────────
// Projects.js
// Projects section – list of featured work with tags.
// ─────────────────────────────────────────────────────────

import React from 'react';
import useReveal from '../hooks/useReveal';
import './Projects.css';

const PROJECTS = [
  {
    num: '01',
    tags: ['React', 'Node.js', 'REST API'],
    title: 'Client Management Portal',
    desc: 'Full-stack application for managing client data, reports, and communication at Imperial Overseas.',
    link: '#',
  },
  {
    num: '02',
    tags: ['React', 'Tailwind', 'JavaScript'],
    title: 'Responsive Marketing Website',
    desc: 'Pixel-perfect, mobile-first landing pages with smooth animations and high Lighthouse scores.',
    link: '#',
  },
  {
    num: '03',
    tags: ['HTML', 'PHP', 'MySQL'],
    title: 'Student Enquiry System',
    desc: 'Form-driven system to track student enquiry pipelines with admin dashboard and email alerts.',
    link: '#',
  },
  {
    num: '04',
    tags: ['React', 'SCSS'],
    title: 'UI Component Library',
    desc: 'Reusable component library built with React for consistent design across internal projects.',
    link: '#',
  },
];

function Projects() {
  const ref = useReveal();

  return (
    <div className="section-wrap" id="projects">
      <div className="reveal" ref={ref}>
        <div className="sec-label">Projects</div>
        <h2 className="sec-title">Selected work</h2>

        <div className="projects__list">
          {PROJECTS.map(({ num, tags, title, desc, link }) => (
            <a href={link} className="projects__row" key={num}>
              <div className="projects__num">{num}</div>

              <div className="projects__body">
                {/* Tags */}
                <div className="projects__tags">
                  {tags.map((tag, i) => (
                    <React.Fragment key={tag}>
                      <span className="projects__tag">{tag}</span>
                      {i < tags.length - 1 && <span className="projects__sep">·</span>}
                    </React.Fragment>
                  ))}
                </div>
                <div className="projects__title">{title}</div>
                <p className="projects__desc">{desc}</p>
              </div>

              <div className="projects__arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
