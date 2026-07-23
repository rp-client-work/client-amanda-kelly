import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white px-5 md:px-16 py-10 md:py-8">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <span className="font-display font-extrabold uppercase tracking-tight text-lg">
          AmandaKelly Co.
        </span>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-display font-bold uppercase tracking-widest text-sm">
          <a href="https://instagram.com/amandakellycompany_" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">Instagram</a>
          <Link to="/terms" className="hover:text-brand-red transition-colors">Terms</Link>
          <Link to="/privacy" className="hover:text-brand-red transition-colors">Privacy Policy</Link>
        </div>
        <p className="font-display font-bold uppercase tracking-widest text-xs opacity-50">
          © 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
