// ─────────────────────────────────────────────────────────
// Contact.js
// Contact section – intro text + links list.
// ─────────────────────────────────────────────────────────

import React from 'react';
import useReveal from '../hooks/useReveal';
import './Contact.css';

const CONTACT_LINKS = [
  { icon: '✉',  label: 'Email',    sub: 'navya@email.com',             href: 'mailto:navya@email.com' },
  { icon: '💼', label: 'LinkedIn', sub: 'linkedin.com/in/navyagolash', href: '#' },
  { icon: '🐙', label: 'GitHub',   sub: 'github.com/navyagolash',      href: '#' },
  { icon: '📄', label: 'Resume',   sub: 'Download PDF',                href: '#' },
];

function Contact() {
  const ref = useReveal();

  return (
    <div className="section-wrap" id="contact">
      <div className="reveal" ref={ref}>
        <div className="sec-label">Contact</div>
        <h2 className="sec-title">Let's work together</h2>

        <div className="contact__grid">
          {/* ── Left: intro ── */}
          <div className="contact__intro">
            <p>
              I'm actively exploring new frontend and full-stack roles. If you're looking for a
              developer who brings both technical depth and design sensibility — I'd love to
              hear from you.
            </p>
            <p>Based in Mumbai, open to remote or hybrid roles.</p>
            <a href="mailto:navya@email.com" className="btn btn-primary contact__cta">
              Send me an email
            </a>
          </div>

          {/* ── Right: link cards ── */}
          <div className="contact__links">
            {CONTACT_LINKS.map(({ icon, label, sub, href }) => (
              <a href={href} className="contact__link" key={label}>
                <div className="contact__link-left">
                  <span className="contact__icon">{icon}</span>
                  <div>
                    <div className="contact__label">{label}</div>
                    <div className="contact__sub">{sub}</div>
                  </div>
                </div>
                <span className="contact__arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
