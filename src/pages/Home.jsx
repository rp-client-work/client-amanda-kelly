import Button from '../components/Button';
import TestimonialCard from '../components/TestimonialCard';
import burmeseCurlyImg from '../assets/textures/burmese-curly.jpg';
import cambodianWavyImg from '../assets/textures/cambodian-wavy.jpg';
import straightImg from '../assets/textures/straight.jpg';
import deepWaveImg from '../assets/textures/deep-wave.jpg';
import indianCurlyImg from '../assets/textures/indian-curly.jpg';
import bodyWaveImg from '../assets/textures/body-wave.jpg';

const textures = [
  ['Burmese Curly', burmeseCurlyImg],
  ['Cambodian Wavy', cambodianWavyImg],
  ['Straight', straightImg],
  ['Deep Wave', deepWaveImg],
  ['Indian Curly', indianCurlyImg],
  ['Body Wave', bodyWaveImg],
];

const signatureTextures = [
  ['4x4 HD Transparent Lace Closures', 'Middle-part closures on 4x4 HD transparent lace. Sized for standard sew-in and wig installs. Texture-matched to every bundle order.'],
  ['13x4 HD Transparent Lace Frontals', 'Ear-to-ear frontals on 13x4 HD transparent lace. Available in 16 to 18 inch. Sized for full parting flexibility and natural hairline recreation.'],
];

const testimonials = [
  ['"The consistency is what keeps me coming back. As a stylist, I need to know the hair will behave the same every single time. AmandaKelly Co. never fails."', 'VERIFIED STYLIST'],
  ['"Bought 3 bundles of the Burmese Curly for my wedding and it was stunning. Minimal shedding and it held the coils all through the honeymoon."', 'RETAIL BUYER'],
  ['"Wholesale cases arrive organized and the quality is identical to my initial sample order. Highly recommend for any salon owner."', 'WHOLESALE ACCOUNT'],
];

const faqs = [
  'Is AmandaKelly really 100% virgin hair?',
  'What textures do you carry?',
  'Can I dye, bleach, and heat style AmandaKelly hair?',
  'Do you offer wholesale and custom orders?',
  'How do I pick the right texture and length?',
];

export default function Home() {
  return (
    <>
      <div className="bg-brand-red text-brand-white text-center text-xs md:text-sm font-display font-bold uppercase tracking-widest py-2.5 px-3">
        Baltimore-based. Local pickup available.
      </div>

      <section className="bg-brand-black text-brand-white flex flex-col items-center text-center gap-6 px-5 md:px-16 py-14 md:py-24">
        <h1 className="text-3xl md:text-6xl font-extrabold uppercase leading-tight tracking-tight max-w-4xl">
          Six Virgin Hair Textures.<br />Picked to Our Standard.
        </h1>
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <Button variant="secondary" className="w-full md:w-auto">Shop Bundles</Button>
          <Button variant="ghostInverse" className="w-full md:w-auto">
            Explore Closures + Frontals
          </Button>
        </div>
      </section>

      <section className="px-5 md:px-16 py-12 md:py-20 max-w-3xl mx-auto text-center flex flex-col gap-4">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight">What Makes AmandaKelly Different</h2>
        <p className="text-brand-on-surface-variant leading-relaxed">
          In an industry saturated with mediocrity, we choose obsession. Our process doesn't start at the sale; it starts at the source. Every single bundle is hand-inspected for cuticle alignment, weight consistency, and natural luster. We don't just sell hair; we provide the architectural foundation for your confidence.
        </p>
      </section>

      <section className="px-5 md:px-16 py-12 md:py-20 border-t-2 border-brand-black">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-2">Six Textures. One Standard.</h2>
        <p className="text-brand-on-surface-variant max-w-xl mb-8">
          Each texture is ethically sourced and maintained in its most natural, raw state to ensure longevity and seamless blending. Available in every length from 14 to 32 inch.
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
      </section>

      <section className="bg-brand-black text-brand-white py-16 md:py-32 px-5 md:px-16 text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-6xl font-extrabold uppercase tracking-tight">What Sets Virgin Hair Apart</h2>
        <div className="flex flex-col gap-6 max-w-2xl">
          <p className="text-lg leading-relaxed">Our bundles are 100% virgin hair, picked to a standard bold enough for every day and elevated enough for any occasion. That standard is what makes the hair behave through months of wear.</p>
          <p className="text-lg leading-relaxed">You have probably tried bundles that promised virgin and shed in two weeks. That tangled by wash three. That felt dead the moment they left the box. This is not that.</p>
          <p className="text-lg leading-relaxed">Every bundle is picked to the same standard we would wear ourselves. Same standard for retail. Same standard for wholesale.</p>
          <p className="text-lg leading-relaxed">That is why our bundles behave for months, not weeks.</p>
        </div>
        <Button variant="secondary">Shop All Bundles</Button>
      </section>

      <section className="px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-8 text-center md:text-left">Closures and Frontals to Match</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {signatureTextures.map(([title, desc]) => (
            <div key={title} className="flex flex-col gap-4">
              <div className="aspect-square bg-brand-surface border-2 border-brand-black" />
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
      </section>

      <section className="bg-brand-surface px-5 md:px-16 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative p-8 border-2 border-brand-black w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-red" />
              <div className="w-full aspect-[4/5] bg-gray-200" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-6">Picked the Way We Would Pick for Ourselves</h2>
            <blockquote className="border-l-4 border-brand-red pl-6">
              <p className="font-display italic text-xl text-brand-black leading-snug mb-3">
                "We spent years testing suppliers until we found hair that didn't just look good in the box, but looked better after 6 months of wear. We don't sell anything we wouldn't wear to our own most important events."
              </p>
              <cite className="font-display not-italic font-bold uppercase text-xs tracking-widest text-brand-red">— AmandaKelly Team</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-brand-black">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
          <div className="p-10 md:p-20 flex flex-col items-center text-center gap-3">
            <h3 className="text-2xl md:text-4xl font-extrabold uppercase">For the Chair</h3>
            <p className="text-brand-on-surface-variant">Exclusive stylist discounts & early access.</p>
            <Button variant="ghost">Join Pro Program</Button>
          </div>
          <div className="p-10 md:p-20 flex flex-col items-center text-center gap-3">
            <h3 className="text-2xl md:text-4xl font-extrabold uppercase">For the Case</h3>
            <p className="text-brand-on-surface-variant">Wholesale pricing for salons & boutiques.</p>
            <Button variant="ghost">Inquire Wholesale</Button>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-10 text-center">In Their Own Words</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(([quote, tag]) => (
            <TestimonialCard key={tag} quote={quote} tag={tag} />
          ))}
        </div>
      </section>

      <section className="bg-brand-surface border-t-2 border-brand-black px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-8 max-w-4xl mx-auto">Common Questions</h2>
        <div className="max-w-4xl mx-auto flex flex-col">
          {faqs.map((q) => (
            <div key={q} className="flex justify-between items-center border-b-2 border-brand-black py-4">
              <span className="font-display font-bold uppercase text-sm md:text-lg">{q}</span>
              <span className="text-xl font-bold">+</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-red text-brand-white text-center px-5 md:px-16 py-16 md:py-32 flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-6xl font-extrabold uppercase tracking-tight">Shop the Bundles</h2>
        <p className="max-w-2xl">Ready to see the hair for yourself? Browse the full bundle line, or reach out for wholesale case pricing and terms.</p>
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <Button variant="invert" className="w-full md:w-auto">Shop Bundles</Button>
          <Button variant="ghostInverse" className="w-full md:w-auto">Wholesale Inquiry</Button>
        </div>
      </section>
    </>
  );
}
