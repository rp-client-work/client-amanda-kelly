import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/hair-guide', label: 'Hair Guide' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const location = useLocation();
  return (
    <header className="bg-brand-black text-brand-white sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-5 md:px-16 py-5">
        <Link to="/" className="font-display font-extrabold uppercase tracking-tight text-lg">
          AmandaKelly Co.
        </Link>
        <nav className="flex items-center gap-6 md:gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-display font-bold uppercase tracking-widest text-xs md:text-sm transition-colors hover:text-brand-red ${
                location.pathname === link.to ? 'text-brand-red' : 'text-brand-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
