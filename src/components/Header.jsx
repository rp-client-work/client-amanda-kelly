import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const leftLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/hair-guide', label: 'Hair Guide' },
];

const rightLinks = [
  { to: '/contact', label: 'Contact' },
];

function navLinkClass(isActive) {
  return `font-display font-bold text-sm tracking-widest uppercase transition-colors hover:text-brand-red ${
    isActive ? 'text-brand-red' : 'text-brand-black'
  }`;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full sticky top-0 z-50 bg-brand-surface border-b border-brand-black">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-5 lg:px-16 h-16 lg:h-24">
        {/* Left: hamburger (mobile) / nav links (desktop) */}
        <div className="flex-1 flex items-center gap-4">
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center p-1 text-brand-black hover:text-brand-red transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
          <div className="hidden lg:flex items-center gap-4">
            {leftLinks.map((link) => (
              <Link key={link.label} to={link.to} className={navLinkClass(location.pathname === link.to)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Center: wordmark */}
        <div className="flex-none text-center px-4">
          <Link to="/" className="group block">
            <h1 className="font-display text-[20px] lg:text-4xl font-black tracking-tighter text-brand-black uppercase leading-none">
              AmandaKellyCo<span className="text-brand-red">.</span>
            </h1>
            <div className="h-0.5 w-0 bg-brand-black mx-auto group-hover:w-full transition-all duration-500 ease-in-out" />
          </Link>
        </div>

        {/* Right: nav links (desktop) + icons */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <div className="hidden lg:flex items-center gap-4 mr-4">
            {rightLinks.map((link) => (
              <Link key={link.label} to={link.to} className={navLinkClass(location.pathname === link.to)}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 lg:gap-6 lg:border-l border-gray-300 lg:pl-4">
            <button aria-label="Search" className="flex items-center justify-center p-1 text-brand-black hover:text-brand-red transition-colors">
              <span className="material-symbols-outlined text-2xl">search</span>
            </button>
            <button aria-label="Account" className="hidden lg:flex items-center justify-center p-1 text-brand-black hover:text-brand-red transition-colors">
              <span className="material-symbols-outlined text-2xl">person</span>
            </button>
            <button aria-label="Shopping Bag" className="relative flex items-center justify-center p-1 text-brand-black hover:text-brand-red transition-colors">
              <span className="material-symbols-outlined text-2xl">shopping_bag</span>
              <span className="absolute -top-1 -right-1 bg-brand-red text-brand-white text-[10px] font-bold w-4 h-4 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="lg:hidden border-t border-brand-black bg-brand-surface px-5 py-4 flex flex-col gap-4">
          {[...leftLinks, ...rightLinks].map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={navLinkClass(location.pathname === link.to)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
