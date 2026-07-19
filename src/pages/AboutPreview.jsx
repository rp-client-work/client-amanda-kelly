import Button from '../components/Button';

const faqs = [
  ['What makes hair "virgin"?', 'Virgin hair has never been chemically processed, dyed, or altered by the donor before collection, and arrives with its cuticle layer fully intact.'],
  ['Does quality change for wholesale or larger orders?', 'No. The same single-donor, cuticle-aligned, hand-tied standard applies to a single retail bundle and a full wholesale case alike. Order size does not change the standard.'],
  ['Can AmandaKelly Co. hair be bleached or dyed?', 'Yes. Because it starts virgin and unprocessed, it can be professionally lifted, toned, or dyed the same way natural hair can.'],
  ['What lace types are offered on closures and frontals?', 'Closures are 4x4 HD transparent lace, built for a natural center part. Frontals are 13x4 HD transparent lace, built for ear-to-ear hairline coverage.'],
  ['How are bundles selected?', 'Each bundle is hand-picked individually against the sourcing standard, not pulled from a bulk-sorted batch.'],
  ['What lengths are available?', 'All six textures, Burmese Curly, Cambodian Wavy, Straight, Deep Wave, Indian Curly, and Body Wave, are available from 14" to 32".'],
  ['How is AmandaKelly Co. different from other hair brands?', 'Our answer is our own process: single-donor sourcing, cuticle intact and aligned in one direction, and hand-tied, hand-picked construction, applied the same way across every texture and every way to buy. That is the full basis of the standard, not a comparison to any other brand.'],
  ['Does this construction affect how long the hair holds up over time?', 'Because the hair starts virgin and cuticle-intact, and is built by hand rather than machine-bulk-assembled, it tends to hold its condition well through repeated installs and color services over time. This is a natural outcome of the sourcing and construction choices described above, not a separate claim.'],
  ['Is there a minimum for wholesale orders?', 'Yes. Wholesale case orders carry a stated minimum, presented as a term of the supply relationship. Contact us for current minimums and to request samples.'],
  ['Do you ship nationwide?', 'Yes, to retail, stylist, and wholesale customers alike.'],
];

const reviews = [
  ['"Reorders match the first bundle I ever installed from them. That consistency is the whole job for me."', 'VERIFIED STYLIST'],
  ['"Ordered Burmese Curly bundles for a wedding. Minimal shedding, installed clean."', 'RETAIL BUYER'],
  ['"Case orders match the sample exactly. That\'s what we needed to stock with confidence."', 'WHOLESALE ACCOUNT'],
];

export default function AboutPreview() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 md:px-16 py-14 md:py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase leading-none mb-3 tracking-tight">About AmandaKelly Co.</h1>
        <p className="font-display font-bold uppercase tracking-widest text-brand-red text-xs mb-3">100% Virgin Hair Extensions</p>
        <p className="max-w-md text-brand-on-surface-variant border-l-4 border-brand-red pl-4">
          AmandaKelly Co. is a virgin hair extensions brand serving retail buyers, working stylists, and wholesale salon and boutique accounts nationwide. Every bundle, closure, and frontal is single-donor, cuticle intact, and hand-tied to the same standard, regardless of who is buying or how much.
        </p>
      </section>

      {/* Why We Started */}
      <section className="px-5 md:px-16 py-12 md:py-20 border-y-2 border-brand-black">
        <span className="font-display font-bold uppercase tracking-widest text-brand-red text-xs block mb-3">The Origin</span>
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-4">Why We Started</h2>
        <p className="max-w-2xl text-brand-on-surface-variant leading-relaxed mb-4">
          AmandaKelly Co. started because virgin hair sourcing is usually described in vague terms: "100% human hair," with no detail on donor count, cuticle direction, or how a piece is actually built. We started a brand that names every part of that process instead of asserting it.
        </p>
        <p className="max-w-2xl text-brand-on-surface-variant leading-relaxed mb-4">
          We wanted to build bundles the way you'd spec a made-to-order piece: named texture, named length, named construction, traced back to a single donor. Not a blend. Not a guess.
        </p>
        <p className="max-w-2xl text-brand-on-surface-variant leading-relaxed">
          That meant deciding, early, that order size would never change the standard. A single retail bundle for one event gets the same sourcing and construction as a wholesale case. That decision is still the whole business, three ways to buy, one standard behind all three.
        </p>
      </section>

      {/* What We Stand For */}
      <section className="bg-brand-black text-brand-white px-5 md:px-16 py-12 md:py-20">
        <span className="font-display font-bold uppercase tracking-widest text-brand-red text-xs block mb-3">The Philosophy</span>
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-6">What We Stand For</h2>
        <ul className="max-w-2xl flex flex-col gap-3 opacity-90 leading-relaxed list-disc list-inside">
          <li><span className="font-bold">100% virgin, raw, unprocessed hair.</span> No prior chemical processing, no prior dye, cuticle intact on arrival.</li>
          <li><span className="font-bold">Cuticle aligned in one direction.</span> Every strand runs root to tip the way it grew, not reversed or mixed, so it behaves consistently from strand to strand.</li>
          <li><span className="font-bold">Single-donor per bundle.</span> One donor's hair, not a blend, kept as a finite sourcing attribute rather than a mass-manufactured claim.</li>
          <li><span className="font-bold">Hand-picked, not bulk-sorted.</span> Bundles are selected individually against that standard.</li>
          <li><span className="font-bold">Hand-tied construction.</span> Closures and frontals are built by hand to match the bundle standard, not machine-assembled separately from it.</li>
        </ul>
        <p className="max-w-2xl opacity-80 leading-relaxed mt-6">
          These are not marketing bullet points. They are the actual steps, named plainly, in the order they happen.
        </p>
      </section>

      {/* Who We Serve */}
      <section className="px-5 md:px-16 py-12 md:py-20 border-b-2 border-brand-black">
        <span className="font-display font-bold uppercase tracking-widest text-brand-red text-xs block mb-3">The Audience</span>
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-6">Who We Serve: Retail, Stylist, and Wholesale</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          <div>
            <h3 className="font-display font-bold uppercase text-sm tracking-widest mb-2">Retail</h3>
            <p className="text-brand-on-surface-variant leading-relaxed text-sm">
              You're choosing a texture and a configuration for yourself: one bundle, one event, one install. Because every texture is named and described for its specific curl or wave pattern, you can match to your hair before you buy, not after.
            </p>
          </div>
          <div>
            <h3 className="font-display font-bold uppercase text-sm tracking-widest mb-2">Stylist</h3>
            <p className="text-brand-on-surface-variant leading-relaxed text-sm">
              You're installing on paying clients, across repeat services and color work. The risk you're managing is a mismatch mid-service. Because cuticle is intact and aligned and each bundle traces to a single donor, the hair behaves the same way across installs, so that risk is handled before it ever reaches the chair.
            </p>
          </div>
          <div>
            <h3 className="font-display font-bold uppercase text-sm tracking-widest mb-2">Wholesale</h3>
            <p className="text-brand-on-surface-variant leading-relaxed text-sm">
              You're stocking inventory you'll be reordering from. The risk you're managing is a case that doesn't match the sample you approved. Origin transparency, stated single-donor sourcing and cuticle standard, plus available samples, are the mechanism for verifying consistency before you commit to a case minimum.
            </p>
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="px-5 md:px-16 py-12 md:py-16 text-center flex flex-col items-center gap-4">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight">See the Process</h2>
        <p className="max-w-xl text-brand-on-surface-variant">
          Want the construction detail in full: sourcing, cuticle alignment, and how closures and frontals are built to match?
        </p>
        <Button variant="ghost">See the Process</Button>
      </section>

      {/* Sister Brand (unchanged) */}
      <section className="bg-brand-surface px-5 md:px-16 py-12 md:py-20">
        <div className="max-w-md mx-auto text-center flex flex-col items-center gap-3">
          <span className="font-display font-bold uppercase tracking-widest text-brand-red text-xs">Strategic Partnership</span>
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight">Our Sister Brand: Ureka's Catering &amp; Bartending</h2>
          <p className="text-brand-on-surface-variant leading-relaxed mb-2">
            Ureka's Catering &amp; Bartending is AmandaKelly Co.'s sister brand under shared ownership. Two separate businesses that share the same commitment: what we deliver is worth what someone paid for it. For catering and bartending inquiries, visit Ureka's directly.
          </p>
          <Button variant="primary" className="w-full">Visit Ureka's Catering &amp; Bartending</Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-6">FAQ</h2>
        <div className="divide-y-2 divide-brand-black border-y-2 border-brand-black max-w-4xl">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-4">
              <summary className="flex justify-between items-center gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-display font-bold uppercase text-sm md:text-base">{q}</span>
                <span className="text-xl font-bold shrink-0 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pt-3 text-sm text-brand-on-surface-variant leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-brand-black text-brand-white px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-10">In Their Words</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map(([quote, tag]) => (
            <div key={tag} className="border border-white/20 p-6 flex flex-col gap-3">
              <p className="italic text-sm leading-relaxed opacity-90">{quote}</p>
              <span className="font-display font-bold uppercase text-xs tracking-widest text-brand-red">{tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-red text-brand-white text-center px-5 md:px-16 py-16 md:py-24 flex flex-col items-center gap-4">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">Find Your Texture</h2>
        <p className="max-w-xs">Six named textures. One sourcing standard. Shipped nationwide to retail, stylist, and wholesale accounts alike.</p>
        <div className="flex flex-col gap-3 w-full max-w-sm">
          <Button variant="invert" className="w-full">Find Your Texture</Button>
        </div>
      </section>
    </>
  );
}
