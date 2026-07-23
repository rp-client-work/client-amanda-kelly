export default function FormField({ label, type = 'text', textarea = false, ...props }) {
  const inputClasses = 'w-full bg-brand-white border border-brand-black p-3 text-base focus:outline-none focus:border-brand-red';
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-display font-bold uppercase tracking-widest text-xs text-brand-black">
        {label}
      </label>
      {textarea ? (
        <textarea className={`${inputClasses} h-24 resize-none`} {...props} />
      ) : (
        <input type={type} className={inputClasses} {...props} />
      )}
    </div>
  );
}
