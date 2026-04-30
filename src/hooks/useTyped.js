// ─────────────────────────────────────────────────────────
// useTyped.js
// Custom hook – cycles through an array of phrases and
// returns the currently typed string (with delete effect).
// ─────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from 'react';

function useTyped(phrases) {
  const [displayText, setDisplayText] = useState('');

  // Keep mutable state in a ref so the timeout closure
  // always reads the latest values without re-registering.
  const state = useRef({ text: '', phraseIdx: 0, deleting: false });

  useEffect(() => {
    let timeout;

    function tick() {
      const { text, phraseIdx, deleting } = state.current;
      const currentPhrase = phrases[phraseIdx];
      let delay = deleting ? 40 : 80;

      if (!deleting) {
        // Type one character
        const next = currentPhrase.slice(0, text.length + 1);
        state.current.text = next;
        setDisplayText(next);
        if (next.length === currentPhrase.length) {
          // Pause before deleting
          state.current.deleting = true;
          delay = 1800;
        }
      } else {
        // Delete one character
        const next = currentPhrase.slice(0, text.length - 1);
        state.current.text = next;
        setDisplayText(next);
        if (next.length === 0) {
          // Move to next phrase
          state.current.deleting = false;
          state.current.phraseIdx = (phraseIdx + 1) % phrases.length;
        }
      }

      timeout = setTimeout(tick, delay);
    }

    // Small initial delay before typing starts
    timeout = setTimeout(tick, 1000);
    return () => clearTimeout(timeout);
  }, []); // runs once on mount

  return displayText;
}

export default useTyped;
