import { Link } from 'react-router-dom';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/hair-guide', label: 'Hair Guide' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white px-5 md:px-16 pt-10 md:pt-14 pb-24 lg:pb-8">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center md:text-left">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <span className="font-display font-extrabold uppercase tracking-tight text-lg">
            AmandaKelly Co.
          </span>
          <p className="text-sm opacity-70 leading-relaxed max-w-xs">
            Raw hair bundles, closures, and frontals. Based in Baltimore, Maryland, shipping nationwide.
          </p>
          <a
            href="https://instagram.com/amandakellycompany_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-red hover:bg-brand-white hover:text-brand-black transition-colors mt-1"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <span className="font-display font-bold uppercase tracking-widest text-xs text-brand-red">Quick Links</span>
          {quickLinks.map((link) => (
            <Link key={link.label} to={link.to} className="text-sm opacity-80 hover:opacity-100 hover:text-brand-red transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Legal */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <span className="font-display font-bold uppercase tracking-widest text-xs text-brand-red">Legal</span>
          <Link to="/terms" className="text-xs opacity-70 hover:opacity-100 hover:text-brand-red transition-colors">Terms of Service</Link>
          <Link to="/privacy" className="text-xs opacity-70 hover:opacity-100 hover:text-brand-red transition-colors">Privacy Policy</Link>
        </div>
      </div>

      <p className="max-w-[1440px] mx-auto font-display font-bold uppercase tracking-widest text-xs opacity-50 text-center md:text-left mt-10 pt-6 border-t border-white/10">
        © 2026. All rights reserved.
      </p>
    </footer>
  );
}
