import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-4 bottom-20 lg:bottom-6 z-40 flex items-center justify-center w-11 h-11 rounded-full bg-brand-red text-brand-white shadow-lg hover:bg-brand-black transition-colors"
    >
      <span className="material-symbols-outlined text-2xl">arrow_upward</span>
    </button>
  );
}
