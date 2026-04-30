// ─────────────────────────────────────────────────────────
// useReveal.js
// Custom hook – adds the CSS class "show" to an element
// when it scrolls into the viewport. Also triggers the
// animated skill bars (width transition) inside that element.
// ─────────────────────────────────────────────────────────

import { useRef, useEffect } from 'react';

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Fade-in the section
          el.classList.add('show');

          // Animate skill bars if they exist inside this section
          el.querySelectorAll('.skill-fill').forEach((bar, i) => {
            setTimeout(() => {
              bar.style.width = bar.dataset.w + '%';
            }, 150 + i * 70);
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default useReveal;
