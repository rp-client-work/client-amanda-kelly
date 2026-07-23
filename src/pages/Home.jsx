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

// Photography pending for these nine textures per intake notes. Textures with
// a matching legacy asset use it as a placeholder; the rest render a plain
// placeholder block until client photography lands. Do not reuse one origin's
// photo for its sibling (e.g. Cambodian Straight vs. Brazilian Straight).
const textures = [
  ['Burmese Curly', burmeseCurlyImg, 'Loose bundle of Burmese Curly raw hair extensions, tight springy curl pattern visible.'],
  ['Indian Wavy', indianCurlyImg, 'Loose bundle of Indian Wavy raw hair extensions, loose natural wave visible.'],
  ['Cambodian Wavy', cambodianWavyImg, 'Loose bundle of Cambodian Wavy raw hair extensions, soft fine-to-medium wave visible.'],
  ['Cambodian Straight', null, 'Loose bundle of Cambodian Straight raw hair extensions, sleek silky strand visible.'],
  ['Cambodian Deep Wave', null, 'Loose bundle of Cambodian Deep Wave raw hair extensions, tight defined S-wave pattern visible.'],
  ['Brazilian Wavy', null, 'Loose bundle of Brazilian Wavy raw hair extensions, fuller thicker wave visible.'],
  ['Brazilian Straight', straightImg, 'Loose bundle of Brazilian Straight raw hair extensions, fuller straight strand with visible body.'],
  ['Brazilian Deep Wave', deepWaveImg, 'Loose bundle of Brazilian Deep Wave raw hair extensions, looser fuller wave with visible volume.'],
  ['Brazilian Deep Curly', bodyWaveImg, 'Loose bundle of Brazilian Deep Curly raw hair extensions, tight springy curl with real bounce.'],
];

const buildBlocks = [
  ['Cuticle Intact', "Raw hair, by definition, keeps its cuticle layer. Nothing about it gets stripped or acid-washed to fake a smoothness it doesn't have naturally."],
  ['Aligned Root to Tip', "Every strand runs the direction it grew in. Root to tip. That's what raw hair is supposed to look like, and it's a big part of why it doesn't mat or tangle at the base after a few washes."],
  ['Hand-Tied Wefts', "Raw hair wefts are built by hand, one strand at a time. Slower to make. It lies flatter against the scalp and holds an install longer than a machine-sewn weft does."],
];

const testimonials = [
  ['"Reorders match the first install every time. That consistency is the whole point for me."', 'VERIFIED STYLIST'],
  ['"Ordered Burmese Curly bundles for a wedding. Minimal shedding, installed clean."', 'RETAIL BUYER'],
  ['"Case orders match the sample quality. That\'s what we needed to stock with confidence."', 'WHOLESALE ACCOUNT'],
];

export default function Home() {
  return (
    <>
      <section className="bg-brand-black text-brand-white flex flex-col items-center text-center gap-6 px-5 md:px-16 py-14 md:py-24">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-4xl">
          Raw Hair Extensions | AmandaKelly Co.
        </h1>
        <p className="max-w-2xl text-brand-on-surface-variant">
          Built to last, not just sold to you. AmandaKelly Co. is a raw hair extensions company. We sell raw hair bundles, closures, and frontals across nine textures, grouped under two origins, from 14" to 32". We ship nationwide across the US. One product line, built the same way for every order that leaves here.
        </p>
        <p className="max-w-2xl text-base text-brand-on-surface-variant">
          Retail, stylist, and wholesale accounts welcome. See options at checkout or reach out directly.
        </p>
        <Button variant="secondary" className="w-full md:w-auto">Shop the Textures</Button>
      </section>

      <section className="px-5 md:px-16 py-12 md:py-20 max-w-3xl mx-auto text-center flex flex-col gap-4">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Our Construction Process</h2>
        <p className="text-brand-on-surface-variant leading-relaxed">
          This is hair built to last for years, not just to look good in the package on day one. It holds real quality you can actually color, bleach, and style the way you want it to. That's the promise. It's also why raw hair costs more than virgin hair up front: you're paying for something that holds up for years, not just a name on the label. Here's what backs it up.
        </p>
      </section>

      <section className="px-5 md:px-16 py-12 md:py-20 border-t-2 border-brand-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {buildBlocks.map(([title, body]) => (
            <div key={title} className="flex flex-col gap-3">
              <h3 className="font-display font-bold text-lg">{title}</h3>
              <p className="text-base text-brand-on-surface-variant leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 max-w-3xl">
          <p className="font-display font-bold text-sm mb-2">
            What This Means
          </p>
          <p className="text-base text-brand-on-surface-variant leading-relaxed">
            The hair keeps its natural growth direction from root to tip, and every weft is assembled a strand at a time instead of run through a machine in bulk. Both of those things are why raw hair, cared for properly, is worth paying more for than it costs on day one.
          </p>
        </div>
      </section>

      <section className="bg-brand-black text-brand-white py-16 md:py-32 px-5 md:px-16 text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Our Quality Standard</h2>
        <div className="flex flex-col gap-6 max-w-2xl">
          <p className="text-lg leading-relaxed">
            There's no tier to guess between and no fine print to read twice. Every bundle, closure, and frontal we carry, across all nine textures, is built to the same standard above: cuticle intact, cuticle aligned, hand-tied.
          </p>
          <p className="text-lg leading-relaxed">
            Want the fuller story on how to tell real raw hair from hair that's been processed and relabeled? That full breakdown lives on our <a href="/faq" className="underline">FAQ</a>.
          </p>
        </div>
      </section>

      <section className="px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2 text-center md:text-left">Shop by Texture</h2>
        <p className="text-brand-on-surface-variant max-w-xl mb-8">
          Nine textures, two origins, every length from 14" to 32".
        </p>
        <div className="grid grid-cols-3 border-l-2 border-t-2 border-brand-black">
          {textures.map(([name, img, alt]) => (
            <div key={name} className="border-r-2 border-b-2 border-brand-black">
              <div className="aspect-[1/2] overflow-hidden pointer-events-none bg-gray-200">
                {img ? (
                  <img src={img} alt={alt} className="w-full h-full object-cover" draggable="false" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-center p-2" role="img" aria-label={alt}>
                    <span className="text-[10px] uppercase tracking-widest text-brand-on-surface-variant">Photography Pending</span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <span className="font-display font-bold uppercase text-xs tracking-widest">{name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 max-w-3xl">
          <p className="font-display font-bold text-sm mb-2">Available Lengths?</p>
          <p className="text-base text-brand-on-surface-variant leading-relaxed">
            All nine textures ship in every length from 14" to 32", as bundles, closures, and frontals.
          </p>
        </div>
        <p className="text-base text-brand-on-surface-variant max-w-2xl mt-6">
          Closures are 4x4 HD transparent lace with a natural part. Frontals are 13x4 HD transparent lace, ear to ear, built to the same three-point standard as every bundle above. Pricing by texture and length is available at checkout.
        </p>
        <Button variant="secondary" className="mt-6">Shop the Textures</Button>
      </section>

      <section className="px-5 md:px-16 py-12 md:py-20 border-t-2 border-brand-black">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-8 text-center md:text-left">Closures &amp; Frontals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <div className="aspect-square bg-brand-surface border-2 border-brand-black overflow-hidden pointer-events-none">
              <img src={closureImg} alt="4x4 HD transparent lace closure, natural part" className="w-full h-full object-cover" draggable="false" />
            </div>
            <div className="flex justify-between items-end border-b-2 border-brand-black pb-4">
              <div>
                <h3 className="font-display font-bold text-lg">4x4 HD Transparent Lace Closures</h3>
                <p className="text-base text-brand-on-surface-variant">Natural part, texture-matched to every bundle, built to the same three-point standard.</p>
              </div>
              <a href="#" className="font-display font-bold uppercase text-xs tracking-widest border-b-2 border-brand-red text-brand-red whitespace-nowrap ml-4">
                Shop Now
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="aspect-square bg-brand-surface border-2 border-brand-black overflow-hidden pointer-events-none">
              <img src={frontalImg} alt="13x4 HD transparent lace frontal, ear to ear" className="w-full h-full object-cover" draggable="false" />
            </div>
            <div className="flex justify-between items-end border-b-2 border-brand-black pb-4">
              <div>
                <h3 className="font-display font-bold text-lg">13x4 HD Transparent Lace Frontals</h3>
                <p className="text-base text-brand-on-surface-variant">Ear-to-ear, built for full parting flexibility, matched to the same three-point standard.</p>
              </div>
              <a href="#" className="font-display font-bold uppercase text-xs tracking-widest border-b-2 border-brand-red text-brand-red whitespace-nowrap ml-4">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-brand-black">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
          <div className="p-10 md:p-20 flex flex-col items-center text-center gap-3">
            <h3 className="text-xl md:text-2xl font-extrabold">Stylist Accounts</h3>
            <p className="text-brand-on-surface-variant">Stylist accounts see stylist-only options at checkout.</p>
            <Button variant="ghost">Join Pro Program</Button>
          </div>
          <div className="p-10 md:p-20 flex flex-col items-center text-center gap-3">
            <h3 className="text-xl md:text-2xl font-extrabold">Wholesale &amp; Bulk</h3>
            <p className="text-brand-on-surface-variant">Wholesale accounts see case pricing at checkout.</p>
            <Button variant="ghost">Inquire Wholesale</Button>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-10 text-center">What Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(([quote, tag]) => (
            <TestimonialCard key={tag} quote={quote} tag={tag} />
          ))}
        </div>
      </section>

      <section className="bg-brand-red text-brand-white text-center px-5 md:px-16 py-16 md:py-32 flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Shop the Textures</h2>
        <p className="max-w-2xl">Retail, stylist, and wholesale accounts welcome. See options at checkout or reach out directly.</p>
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <Button variant="invert" className="w-full md:w-auto">Shop the Textures</Button>
          <Button variant="ghostInverse" className="w-full md:w-auto">Wholesale Inquiry</Button>
        </div>
      </section>
    </>
  );
}
