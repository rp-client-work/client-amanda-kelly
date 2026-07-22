export default function TestimonialCard({ quote, tag }) {
  return (
    <div className="flex flex-col gap-3 p-5 border border-brand-black">
      <p className="text-sm leading-relaxed text-brand-on-surface">{quote}</p>
      <p className="font-display font-bold uppercase tracking-widest text-xs text-brand-on-surface">
        {tag}
      </p>
    </div>
  );
}
