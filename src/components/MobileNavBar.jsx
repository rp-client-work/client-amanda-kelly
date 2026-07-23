import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/hair-guide', label: 'Shop', icon: 'storefront' },
  { to: '/contact', label: 'Contact', icon: 'mail' },
];

// TODO: point at the real cart page/link once the subdomain checkout is wired up.
const cartHref = null;

export default function MobileNavBar() {
  const location = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-black border-t border-white/10">
      <div className="grid grid-cols-4">
        {links.slice(0, 2).map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.label}
              to={link.to}
              className={`flex flex-col items-center justify-center gap-0.5 py-2.5 transition-colors ${
                isActive ? 'text-brand-red' : 'text-brand-white/80'
              }`}
            >
              <span className="material-symbols-outlined text-xl">{link.icon}</span>
              <span className="font-display font-bold uppercase tracking-widest text-[10px]">{link.label}</span>
            </Link>
          );
        })}
        {cartHref ? (
          <Link
            to={cartHref}
            className={`relative flex flex-col items-center justify-center gap-0.5 py-2.5 transition-colors ${
              location.pathname === cartHref ? 'text-brand-red' : 'text-brand-white/80'
            }`}
          >
            <span className="material-symbols-outlined text-xl">shopping_bag</span>
            <span className="font-display font-bold uppercase tracking-widest text-[10px]">Cart</span>
            <span className="absolute top-1 right-1/2 translate-x-3 bg-brand-red text-brand-white text-[9px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">0</span>
          </Link>
        ) : (
          <button
            aria-label="Shopping Bag"
            className="relative flex flex-col items-center justify-center gap-0.5 py-2.5 text-brand-white/80 hover:text-brand-red transition-colors"
          >
            <span className="material-symbols-outlined text-xl">shopping_bag</span>
            <span className="font-display font-bold uppercase tracking-widest text-[10px]">Cart</span>
            <span className="absolute top-1 right-1/2 translate-x-3 bg-brand-red text-brand-white text-[9px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">0</span>
          </button>
        )}
        {links.slice(2).map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.label}
              to={link.to}
              className={`flex flex-col items-center justify-center gap-0.5 py-2.5 transition-colors ${
                isActive ? 'text-brand-red' : 'text-brand-white/80'
              }`}
            >
              <span className="material-symbols-outlined text-xl">{link.icon}</span>
              <span className="font-display font-bold uppercase tracking-widest text-[10px]">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
