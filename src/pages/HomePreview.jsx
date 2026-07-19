import Button from '../components/Button';
import TestimonialCard from '../components/TestimonialCard';
import burmeseCurlyImg from '../assets/textures/texture-burmese-curly.webp';
import cambodianWavyImg from '../assets/textures/texture-cambodian-wavy.webp';
import straightImg from '../assets/textures/texture-straight.webp';
import deepWaveImg from '../assets/textures/texture-deep-wave.webp';
import indianCurlyImg from '../assets/textures/texture-indian-curly.webp';
import bodyWaveImg from '../assets/textures/texture-body-wave.webp';
import closureImg from '../assets/products/closure-4x4-hd-lace.webp';
import frontalImg from '../assets/products/frontal-13x4-hd-lace.webp';

const textures = [
  ['Burmese Curly', burmeseCurlyImg, '14"-32"', 'Tight, clearly defined curl pattern'],
  ['Cambodian Wavy', cambodianWavyImg, '14"-32"', 'Loose, natural wave, moves as one unit with itself'],
  ['Straight', straightImg, '14"-32"', 'Sleek, uniform strand, no texture variance bundle to bundle'],
  ['Deep Wave', deepWaveImg, '14"-32"', 'Pronounced S-pattern wave, full-bodied from root to tip'],
  ['Indian Curly', indianCurlyImg, '14"-32"', 'Springy, medium curl, consistent curl diameter throughout'],
  ['Body Wave', bodyWaveImg, '14"-32"', 'Soft, wide wave, closest in texture to a natural blowout'],
];

const closuresFrontals = [
  ['Closures', '4x4 HD Transparent Lace', closureImg],
  ['Frontals', '13x4 HD Transparent Lace', frontalImg],
];

const testimonials = [
  ['"Reorders match the first bundle I ever installed from them. That consistency is the whole job for me."', 'VERIFIED STYLIST'],
  ['"Ordered Burmese Curly bundles for a wedding. Minimal shedding, installed clean."', 'RETAIL BUYER'],
  ['"Case orders match the sample exactly. That\'s what we needed to stock with confidence."', 'WHOLESALE ACCOUNT'],
];

const faqs = [
  ['What does "virgin hair" actually mean?', 'Virgin hair has never been chemically processed, dyed, or altered by the donor before collection. It arrives with its cuticle layer fully intact, which is what allows it to be aligned in one direction during construction.'],
  ['What does single-donor sourcing mean, and why does it matter?', 'Single-donor means every bundle traces to one donor rather than a blend of multiple donors\' hair. It matters because it keeps texture and cuticle direction consistent within a bundle, since hair only behaves uniformly with itself.'],
  ['What does "cuticle-aligned" or "cuticle intact" mean?', 'The cuticle is the outer layer of each strand. Leaving it intact and aligned root to tip, the direction it naturally grew, means strands lie the same way instead of catching against each other.'],
  ['How is AmandaKelly Co. different from other virgin hair brands?', 'AmandaKelly Co.\'s standard is single-donor sourcing, cuticle intact and aligned in one direction, and hand-tied, hand-picked construction, applied identically across all six textures and all three ways to buy: retail, stylist, and wholesale. That is the whole answer: our own process, named plainly, applied the same way every time.'],
  ['Does color processing or repeated installs damage the hair faster?', 'Because the hair starts virgin and cuticle-intact, it holds up well to coloring, bleaching, and repeated install cycles over time. This is a quiet outcome of the sourcing and construction standard, not a separate promise.'],
  ['Can I color or bleach AmandaKelly Co. hair?', 'Yes. Because the hair is virgin and unprocessed to begin with, it can be lifted, toned, or dyed by a professional stylist the same way natural hair can.'],
  ['Is there a minimum order for wholesale accounts?', 'Yes, wholesale case orders carry a stated minimum, presented as a term of the supply relationship rather than a promotional threshold. Request wholesale access for current minimums and sample availability.'],
  ['Do you ship nationwide?', 'Yes, AmandaKelly Co. ships nationwide to retail, stylist, and wholesale customers alike.'],
  ['What lengths are available?', 'All six textures are available from 14" to 32".'],
  ['How do I know which texture matches my hair?', 'Each texture is named and described for its specific curl or wave pattern (see the texture grid above) so you can match by description before you buy, rather than guessing from a generic product photo.'],
];

export default function HomePreview() {
  return (
    <>
      <section className="bg-brand-black text-brand-white flex flex-col items-center text-center gap-6 px-5 md:px-16 py-14 md:py-24">
        <h1 className="text-3xl md:text-6xl font-extrabold uppercase leading-tight tracking-tight max-w-4xl">
          Named. Traced. Never Guessed.
        </h1>
        <p className="max-w-2xl text-lg">
          100% Virgin Hair Extensions. Six Textures. One Standard. Shipped Nationwide.
        </p>
        <p className="max-w-2xl text-brand-on-surface-variant text-sm leading-relaxed">
          AmandaKelly Co. sources, sorts, and builds every bundle, closure, and frontal from single-donor virgin hair, cuticle intact and aligned in one direction. We serve retail buyers, working stylists, and wholesale salon and boutique accounts, all from the same standard, all shipped nationwide.
        </p>
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <Button variant="secondary" className="w-full md:w-auto">Shop the Textures</Button>
        </div>
      </section>

      <section className="px-5 md:px-16 py-12 md:py-20 max-w-3xl mx-auto text-center flex flex-col gap-4">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight">The Difference Is in the Sourcing</h2>
        <p className="text-brand-on-surface-variant leading-relaxed">
          AmandaKelly Co. builds every piece from single-donor virgin hair: cuticle intact, aligned in one direction, never stripped or re-processed. Each bundle is hand-picked, not bulk-sorted, and each closure or frontal is hand-tied to match. The standard is named at every step, from donor to finished texture, so nothing is left to guesswork.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-4">
          <div>
            <h3 className="font-display font-bold uppercase text-sm tracking-widest mb-1">Single-donor sourcing</h3>
            <p className="text-sm text-brand-on-surface-variant">One donor's hair is a finite supply by nature, not a marketing claim. We do not blend hair from multiple donors into one bundle.</p>
          </div>
          <div>
            <h3 className="font-display font-bold uppercase text-sm tracking-widest mb-1">Cuticle intact, aligned in one direction</h3>
            <p className="text-sm text-brand-on-surface-variant">The cuticle layer is left in place and run the same way root to tip, the way it grew.</p>
          </div>
          <div>
            <h3 className="font-display font-bold uppercase text-sm tracking-widest mb-1">Hand-picked, not bulk-sorted</h3>
            <p className="text-sm text-brand-on-surface-variant">Bundles are selected one at a time against that standard, not pulled in batches.</p>
          </div>
        </div>
        <p className="text-brand-on-surface-variant leading-relaxed mt-2">
          This is the process. It is the same process behind every texture, every length, every order size.
        </p>
      </section>

      <section className="px-5 md:px-16 py-12 md:py-20 border-t-2 border-brand-black">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-2">Six Textures. One Standard.</h2>
        <p className="text-brand-on-surface-variant max-w-xl mb-8">
          Every texture below is sourced and built to the same standard named above. Nothing changes texture to texture except the texture itself. All six available 14" to 32".
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-l-2 border-t-2 border-brand-black">
          {textures.map(([name, img]) => (
            <div key={name} className="border-r-2 border-b-2 border-brand-black">
              <div className="aspect-[1/2] overflow-hidden pointer-events-none">
                <img src={img} alt={name} className="w-full h-full object-cover" draggable="false" />
              </div>
              <div className="p-3">
                <span className="font-display font-bold uppercase text-xs tracking-widest">{name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="secondary">Shop the Textures</Button>
        </div>
      </section>

      <section className="bg-brand-black text-brand-white py-16 md:py-32 px-5 md:px-16 text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-6xl font-extrabold uppercase tracking-tight">Hand-Tied. Cuticle-Aligned. Named for What It Is.</h2>
        <div className="flex flex-col gap-6 max-w-2xl">
          <p className="text-lg leading-relaxed">Hand-tied construction means each weft is built by hand, strand by strand, rather than machine-assembled in bulk. Cuticle-aligned means every strand runs root to tip in the same direction it grew, not mixed or reversed, so it behaves consistently from the first install to the last.</p>
          <p className="text-lg leading-relaxed">We name our textures for what they are, not for what sounds better on a label. Burmese Curly is Burmese Curly. Straight is straight. There is no renaming a texture to make it sound more premium than it is.</p>
          <p className="text-lg leading-relaxed">This is the same standard described in the sourcing section above, carried into construction. Nothing new is being claimed here, the same claim is simply being shown at the level of the weft itself.</p>
        </div>
      </section>

      <section className="px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-8 text-center md:text-left">Closures and Frontals to Match</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {closuresFrontals.map(([title, desc, img]) => (
            <div key={title} className="flex flex-col gap-4">
              <div className="aspect-square bg-brand-surface border-2 border-brand-black overflow-hidden pointer-events-none">
                <img src={img} alt={title} className="w-full h-full object-cover" draggable="false" />
              </div>
              <div className="flex justify-between items-end border-b-2 border-brand-black pb-4">
                <div>
                  <h3 className="font-display font-bold uppercase text-lg">{title}</h3>
                  <p className="text-sm text-brand-on-surface-variant">{desc}</p>
                </div>
                <a href="#" className="font-display font-bold uppercase text-xs tracking-widest border-b-2 border-brand-red text-brand-red whitespace-nowrap ml-4">
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-brand-on-surface-variant max-w-3xl mt-8">
          Our 4x4 HD transparent lace closures are built for a natural center part, matched bundle for bundle to the texture and donor standard above. Our 13x4 HD transparent lace frontals extend that same match ear to ear, for a full hairline install. Closures and frontals are not a separate product tier. They are built from the same sourcing and the same hand-tied standard as every bundle they're meant to sit beside.
        </p>
      </section>

      <section className="bg-brand-surface px-5 md:px-16 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="border-l-4 border-brand-red pl-6 text-left inline-block">
            <p className="font-display italic text-xl text-brand-black leading-snug mb-3">
              "A bundle should tell you where it came from without you having to ask. That's the whole standard, in one line."
            </p>
            <cite className="font-display not-italic font-bold uppercase text-xs tracking-widest text-brand-red">— AmandaKelly Co.</cite>
          </blockquote>
        </div>
      </section>

      <section className="border-y-2 border-brand-black">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
          <div className="p-10 md:p-20 flex flex-col items-center text-center gap-3">
            <h3 className="text-2xl md:text-4xl font-extrabold uppercase">For the Chair</h3>
            <p className="text-brand-on-surface-variant max-w-sm">You're installing on paying clients. AmandaKelly Co. hair is built for repeat installs and color services, so you're not troubleshooting a texture mismatch in the chair. Stylist pricing reflects professional use, not a clearance rate.</p>
            <Button variant="ghost">See Stylist Pricing</Button>
          </div>
          <div className="p-10 md:p-20 flex flex-col items-center text-center gap-3">
            <h3 className="text-2xl md:text-4xl font-extrabold uppercase">For the Case</h3>
            <p className="text-brand-on-surface-variant max-w-sm">You're stocking a shelf or a salon inventory. Samples are available so you can verify our standard before committing to case minimums. Minimums are stated as terms of the relationship, not a bulk discount pitch.</p>
            <Button variant="ghost">Request Wholesale Access</Button>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-10 text-center">In Their Words</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(([quote, tag]) => (
            <TestimonialCard key={tag} quote={quote} tag={tag} />
          ))}
        </div>
      </section>

      <section className="bg-brand-surface border-t-2 border-brand-black px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-8 max-w-4xl mx-auto">FAQ</h2>
        <div className="max-w-4xl mx-auto flex flex-col divide-y-2 divide-brand-black border-y-2 border-brand-black">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-4">
              <summary className="flex justify-between items-center gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-display font-bold uppercase text-sm md:text-lg">{q}</span>
                <span className="text-xl font-bold shrink-0 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pt-3 text-sm text-brand-on-surface-variant leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-brand-red text-brand-white text-center px-5 md:px-16 py-16 md:py-32 flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-6xl font-extrabold uppercase tracking-tight">Find Your Texture</h2>
        <p className="max-w-2xl">Six named textures. One sourcing standard. Shipped nationwide to retail, stylist, and wholesale accounts alike.</p>
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <Button variant="invert" className="w-full md:w-auto">Find Your Texture</Button>
        </div>
      </section>
    </>
  );
}
