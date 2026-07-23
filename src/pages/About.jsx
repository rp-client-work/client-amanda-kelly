import Button from '../components/Button';

const faqs = [
  ['What is AmandaKelly Co.?', 'AmandaKelly Co. is a raw hair extensions brand offering raw hair bundles, closures, and frontals across nine textures. We serve retail buyers, working stylists, and wholesale accounts nationwide, with local pickup available in Baltimore.'],
  ['Where is AmandaKelly Co. based?', 'AmandaKelly Co. is based in Baltimore. Every order ships nationwide across the United States. Buyers in the Baltimore area can also choose local pickup at checkout instead of shipping.'],
  ['Is AmandaKelly Co. hair actually raw?', "Yes. Every bundle, closure, and frontal keeps its cuticle layer intact and aligned in one direction, root to tip. Nothing is stripped or acid-washed to fake a smoothness raw hair doesn't have naturally."],
  ['Can I dye, bleach, or heat style AmandaKelly Co. hair?', 'Yes to all three. Raw hair with the cuticle intact lifts cleanly and styles cleanly. We recommend a stylist do a strand test before bleaching, and always use a heat protectant when heat styling.'],
  ['Does AmandaKelly Co. sell wholesale?', 'Yes. AmandaKelly Co. sells to retail buyers, stylists, and wholesale accounts on the same raw hair standard across all order sizes. For case quantities, custom orders, and wholesale pricing, contact us through the wholesale form.'],
  ['How do I care for AmandaKelly Co. hair?', 'Wash with a sulfate-free shampoo, condition regularly, avoid excessive heat, and sleep on a satin or silk pillowcase or wrap the hair at night. Detangle from the ends up to the roots, never the reverse. Cared for this way, raw hair extensions can last across multiple installs.'],
  ["What is the relationship between AmandaKelly Co. and Ureka's Catering & Bartending?", "Ureka's Catering & Bartending is AmandaKelly Co.'s sister brand under shared ownership. Both are separate businesses. For catering or bartending inquiries, visit Ureka's directly."],
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="px-5 md:px-16 py-14 md:py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-none mb-3 tracking-tight">About AmandaKelly Co.</h1>
        <p className="font-display font-bold uppercase tracking-widest text-brand-red text-xs mb-3">Raw Hair Extensions.</p>
        <p className="max-w-md text-brand-on-surface-variant border-l-4 border-brand-red pl-4">
          AmandaKelly Co. is a raw hair extensions brand offering raw hair bundles, closures, and frontals across nine textures, grouped under two origins. We serve retail buyers, working stylists, and wholesale accounts nationwide, with local Baltimore pickup available at checkout. Every order carries the same standard, whether it ships as one bundle or a full case.
        </p>
      </section>

      {/* Why We Started */}
      <section className="px-5 md:px-16 py-12 md:py-20 border-y-2 border-brand-black">
        <span className="font-display font-bold uppercase tracking-widest text-brand-red text-xs block mb-3">The Origin</span>
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">Why We Started AmandaKelly Co.</h2>
        <p className="max-w-2xl text-brand-on-surface-variant leading-relaxed">
          AmandaKelly Co. sells raw hair extensions in three product lines: bundles, closures, and frontals. Every order goes to a retail buyer, a working stylist, or a wholesale account, and the hair does not change between them. Bundle lengths run from 14" to 32". Closures come in 4x4 HD transparent lace for a natural part. Frontals come in 13x4 HD transparent lace for full ear-to-ear coverage. Retail. Stylist. Wholesale. Same standard across every order, from a single bundle to a case.
        </p>
      </section>

      {/* What We Stand For */}
      <section className="bg-brand-black text-brand-white px-5 md:px-16 py-12 md:py-20">
        <span className="font-display font-bold uppercase tracking-widest text-brand-red text-xs block mb-3">The Philosophy</span>
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">What AmandaKelly Co. Stands For</h2>
        <p className="max-w-2xl opacity-80 leading-relaxed">
          Cuticle intact. Aligned root to tip. Hand-tied, strand by strand. What ships is what we would install ourselves. The hair arrives full and healthy, ready for daily wear, event styling, and any dye, bleach, or heat routine a raw cuticle can handle. Bundles are picked one at a time, not sorted in bulk. Closures and frontals are matched to bundle quality so an install reads seamless, not obvious. When you order from AmandaKelly Co., you order hair that behaves like your own once installed. Nothing more. Nothing less.
        </p>
      </section>

      {/* Who We Serve */}
      <section className="px-5 md:px-16 py-12 md:py-20 border-b-2 border-brand-black">
        <span className="font-display font-bold uppercase tracking-widest text-brand-red text-xs block mb-3">The Audience</span>
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">Who We Serve: Retail, Stylist, and Wholesale</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <p className="text-brand-on-surface-variant leading-relaxed">
            AmandaKelly Co. serves three audiences under one quality bar. Retail buyers shopping a single bundle for a Sunday brunch install or a wedding weekend get the same raw hair we ship to boutiques and salons.
          </p>
          <p className="text-brand-on-surface-variant leading-relaxed">
            Working stylists installing on paying clients get consistent bundle-to-bundle behavior across every reorder. What worked for one client works for the next. Wholesale accounts stocking a shelf or building a salon inventory get the same standard by the case as a single retail order. The hair does not change from one segment to the next. Order size does not change quality.
          </p>
        </div>
      </section>

      {/* Nine Textures */}
      <section className="px-5 md:px-16 py-12 md:py-20 border-b-2 border-brand-black">
        <span className="font-display font-bold uppercase tracking-widest text-brand-red text-xs block mb-3">The Lineup</span>
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">Nine Textures, Two Origins</h2>
        <p className="max-w-2xl text-brand-on-surface-variant leading-relaxed">
          Burmese Curly. Indian Wavy. Cambodian Wavy, Straight, and Deep Wave. Brazilian Wavy, Straight, Deep Wave, and Deep Curly. Every texture ships in every length from 14" to 32", as bundles, closures, and frontals, all built to the same cuticle-intact, hand-tied standard. See the full lineup on the <a href="/hair-guide" className="underline">Hair Guide</a>.
        </p>
      </section>

      {/* Sister Brand */}
      <section className="bg-brand-surface px-5 md:px-16 py-12 md:py-20">
        <div className="max-w-md mx-auto text-center flex flex-col items-center gap-3">
          <span className="font-display font-bold uppercase tracking-widest text-brand-red text-xs">Strategic Partnership</span>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Our Sister Brand: Ureka's Catering &amp; Bartending</h2>
          <p className="text-brand-on-surface-variant leading-relaxed mb-2">
            Ureka's Catering &amp; Bartending is AmandaKelly Co.'s sister brand under shared ownership. Two separate businesses that share the same commitment: what we deliver is worth what someone paid for it. For catering and bartending inquiries, visit Ureka's directly.
          </p>
          <Button variant="primary" className="w-full">Visit Ureka's Catering &amp; Bartending</Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2">Common Questions</h2>
        <p className="text-brand-on-surface-variant mb-6">Quick answers to the questions we get most about AmandaKelly Co. hair, shipping, and how we sell.</p>
        <div className="divide-y-2 divide-brand-black border-y-2 border-brand-black max-w-4xl">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-4">
              <summary className="flex justify-between items-center gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-display font-bold uppercase text-sm md:text-base">{q}</span>
                <span className="text-xl font-bold shrink-0 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pt-3 text-base text-brand-on-surface-variant leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-brand-black text-brand-white px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2">AmandaKelly Co. Reviews</h2>
        <p className="opacity-80 mb-8">Real installs. Real word. Below are notes from AmandaKelly Co. buyers who came back for the next order.</p>
        <div className="py-8 text-center font-display italic text-xl opacity-50">[TESTIMONIAL PLACEHOLDER]</div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-red text-brand-white text-center px-5 md:px-16 py-16 md:py-24 flex flex-col items-center gap-4">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Shop the Bundles</h2>
        <p className="max-w-xs">Ready to see the hair for yourself? Browse the full bundle line, or reach out for wholesale case pricing and terms. Same standard across every order size.</p>
        <div className="flex flex-col gap-3 w-full max-w-sm">
          <Button variant="invert" className="w-full">Shop Bundles</Button>
          <Button variant="ghostInverse" className="w-full">Contact Us About Wholesale</Button>
        </div>
      </section>
    </>
  );
}
