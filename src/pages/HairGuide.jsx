import Button from '../components/Button';
import silkStraightImg from '../assets/textures/hairguide-silk-straight.webp';
import bodyWaveImg from '../assets/textures/hairguide-body-wave.webp';
import cambodianWavyImg from '../assets/textures/hairguide-cambodian-wavy.webp';

const compareRows = [
  ['VIRGIN (OURS)', 'STANDARD GRADE'],
  ['100% Raw Human Hair', 'Synthetic Blends / Acid Washed'],
  ['Intact Cuticles', 'Stripped or Reversed Cuticles'],
  ['Lifts to 613 Platinum', 'Damages at level 27'],
];

const steps = ['Select Texture', 'Pick Your Length', 'Quantity Matters'];

const textureData = [
  ['Silk Straight', "Unrivaled shine and precision. Perfect for sleek, architectural looks.", silkStraightImg],
  ['Body Wave', "Effortless volume with a natural 'S' pattern for timeless elegance.", bodyWaveImg],
  ['Cambodian Wavy', 'Soft, flowing waves with a thick, luxurious hair density.', cambodianWavyImg],
  ['Deep Wave', 'Defined, rhythmic curls for a high-impact, textured statement.', null],
  ['Indian Curly', 'Bouncy spirals with extreme definition and natural movement.', null],
  ['Burmese Curly', 'Coiled perfection. The tightest curl pattern in our luxury lineup.', null],
];

export default function HairGuide() {
  return (
    <>
      <section className="bg-[#141414] text-brand-white text-center px-5 md:px-16 py-16 md:py-32 flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tight">Find Your<br />Texture</h1>
        <p className="max-w-2xl">The ultimate guide to selecting, maintaining, and mastering the Noir & Crimson signature hair collection.</p>
        <Button variant="secondary">Explore Guide</Button>
      </section>

      <section className="bg-brand-surface px-5 md:px-16 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-4">What is Virgin Hair?</h2>
            <p className="leading-relaxed mb-4">
              Our Virgin hair is chemically unprocessed, harvested from a single donor. It remains in its natural state, ensuring the cuticle is intact and aligned. This is the gold standard of luxury hair extensions—durable, dyeable, and undeniably authentic.
            </p>
          </div>
          <div className="border border-brand-black p-6 bg-brand-white">
            <h3 className="font-display font-bold uppercase text-lg mb-4">Virgin vs. Beauty Supply</h3>
            <div className="flex flex-col gap-3">
              {compareRows.map(([left, right], i) => (
                <div key={i} className="grid grid-cols-2 gap-4 border-b border-gray-300 pb-3">
                  <span className={`text-xs font-display font-bold uppercase ${i === 0 ? 'text-brand-red' : ''}`}>{left}</span>
                  <span className="text-xs">{right}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-black text-brand-white px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-10 text-center">How to Choose Your Bundle</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div key={step} className="border border-brand-white p-8 flex flex-col items-center text-center">
              <h3 className="font-display font-bold uppercase text-lg tracking-widest">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-10">Signature Textures</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {textureData.map(([name, desc, img]) => (
            <div key={name} className="border border-brand-black">
              {img ? (
                <img src={img} alt={name} className="aspect-square w-full object-cover" />
              ) : (
                <div className="aspect-square bg-gray-200" />
              )}
              <div className="p-4">
                <h4 className="font-display font-bold uppercase text-base mb-1">{name}</h4>
                <p className="text-sm text-brand-on-surface-variant">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-surface px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-4">Measure the Impact</h2>
        <p className="max-w-2xl">Landmark Reference: use everyday reference points — shoulder, collarbone, waist — to estimate the length you need before you order.</p>
      </section>

      <section className="px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-6">Color & Customization</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Closure vs. Frontal', '4x4 Closure', '13x4 Frontal'].map((t) => (
            <span key={t} className="font-display font-bold uppercase text-sm">{t}</span>
          ))}
        </div>
      </section>

      <section className="bg-brand-surface px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight">Frequently Asked Questions</h2>
      </section>

      <section className="bg-brand-red text-brand-white text-center px-5 md:px-16 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">Master Your Look</h2>
      </section>
    </>
  );
}
