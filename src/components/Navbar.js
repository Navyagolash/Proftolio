// ─────────────────────────────────────────────────────────
// Navbar.js
// Fixed top navigation bar with smooth scroll links.
// ─────────────────────────────────────────────────────────

import React from 'react';
import './Navbar.css';

const NAV_LINKS = ['about', 'skills', 'projects', 'experience', 'contact'];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        Navya <em>Golash</em>
      </div>

      {/* Navigation links */}
      <ul className="navbar__links">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              onClick={(e) => { e.preventDefault(); scrollTo(link); }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
