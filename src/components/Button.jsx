const styles = {
  primary: 'bg-brand-black text-brand-white hover:bg-brand-red',
  secondary: 'bg-brand-red text-brand-white hover:bg-brand-black',
  ghost: 'bg-brand-white text-brand-black border-2 border-brand-black hover:bg-brand-black hover:text-brand-white',
  // For use on black/red backgrounds: white outline that inverts on hover
  ghostInverse: 'bg-transparent text-brand-white border-2 border-brand-white hover:bg-brand-white hover:text-brand-black',
  // For use on red backgrounds: solid white button with red text
  invert: 'bg-brand-white text-brand-red hover:bg-brand-black hover:text-brand-white',
};

export default function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <button
      className={`font-display font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
