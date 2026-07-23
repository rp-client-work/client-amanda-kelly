export default function TestimonialCard({ quote, tag }) {
  return (
    <div className="flex flex-col gap-3 p-5 border border-brand-black">
      <div className="text-brand-red text-lg">★★★★★</div>
      <p className="text-base leading-relaxed text-brand-on-surface">{quote}</p>
      <p className="font-display font-bold uppercase tracking-widest text-xs text-brand-on-surface">
        {tag}
      </p>
    </div>
  );
}
