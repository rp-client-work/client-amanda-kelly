import Button from '../components/Button';
import burmeseCurlyImg from '../assets/textures/hairguide-burmese-curly.webp';
import indianCurlyImg from '../assets/textures/hairguide-indian-curly.webp';
import cambodianWavyImg from '../assets/textures/hairguide-cambodian-wavy.webp';
import silkStraightImg from '../assets/textures/hairguide-silk-straight.webp';
import deepWaveImg from '../assets/textures/hairguide-deep-wave.webp';
import bodyWaveImg from '../assets/textures/hairguide-body-wave.webp';

const compareRows = [
  ['RAW (OURS)', 'STANDARD GRADE'],
  ['Cuticle Intact', 'Stripped or Acid-Washed'],
  ['Aligned Root to Tip', 'Reversed or Mixed Direction'],
  ['Hand-Tied, Strand by Strand', 'Machine-Sewn in Bulk'],
];

const steps = ['Select Texture', 'Pick Your Length', 'Choose Quantity'];

// Photography pending for these nine textures per intake notes, matching the
// homepage mapping. Do not reuse one origin's photo for its sibling.
const textureData = [
  ['Burmese Curly', 'Tight, springy curl pattern with real bounce.', burmeseCurlyImg],
  ['Indian Wavy', 'Loose, natural wave from root to tip.', indianCurlyImg],
  ['Cambodian Wavy', 'Soft, fine-to-medium wave with a natural fall.', cambodianWavyImg],
  ['Cambodian Straight', 'Sleek, silky strand with a clean line.', null],
  ['Cambodian Deep Wave', 'Tight, defined S-wave pattern.', null],
  ['Brazilian Wavy', 'Fuller, thicker wave with visible body.', null],
  ['Brazilian Straight', 'Fuller straight strand with visible body.', silkStraightImg],
  ['Brazilian Deep Wave', 'Looser, fuller wave with real volume.', deepWaveImg],
  ['Brazilian Deep Curly', 'Tight, springy curl with real bounce.', bodyWaveImg],
];

export default function HairGuide() {
  return (
    <>
      <section className="bg-[#141414] text-brand-white text-center px-5 md:px-16 py-16 md:py-32 flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Find Your Texture | AmandaKelly Co.</h1>
        <p className="max-w-2xl">The guide to selecting, matching, and maintaining every texture in the AmandaKelly Co. raw hair lineup.</p>
        <Button variant="secondary">Explore Guide</Button>
      </section>

      <section className="bg-brand-surface px-5 md:px-16 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">What Is Raw Hair?</h2>
            <p className="leading-relaxed mb-4">
              Raw hair keeps its cuticle layer intact, aligned root to tip, the direction it grew in. Nothing is stripped or acid-washed to fake a smoothness it doesn't have naturally, and every weft is hand-tied, strand by strand, instead of run through a machine in bulk. That's why raw hair takes color, bleach, and daily styling the way it's supposed to.
            </p>
          </div>
          <div className="border border-brand-black p-6 bg-brand-white">
            <h3 className="font-display font-bold text-lg mb-4">Raw vs. Beauty Supply</h3>
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
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-10 text-center">How to Choose Your Bundle</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div key={step} className="border border-brand-white p-8 flex flex-col items-center text-center">
              <h3 className="font-display font-bold text-lg tracking-widest">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2">Nine Textures, Two Origins</h2>
        <p className="text-brand-on-surface-variant max-w-xl mb-8">
          Burmese and Indian textures, plus Cambodian and Brazilian, each ship in every length from 14" to 32", as bundles, closures, and frontals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {textureData.map(([name, desc, img]) => (
            <div key={name} className="border border-brand-black">
              {img ? (
                <img src={img} alt={name} className="aspect-square w-full object-cover" />
              ) : (
                <div className="aspect-square bg-gray-200 flex items-center justify-center text-center p-2" role="img" aria-label={name}>
                  <span className="text-[10px] uppercase tracking-widest text-brand-on-surface-variant">Photography Pending</span>
                </div>
              )}
              <div className="p-4">
                <h4 className="font-display font-bold text-base mb-1">{name}</h4>
                <p className="text-base text-brand-on-surface-variant">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-surface px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">How Much Hair You Need</h2>
        <p className="max-w-2xl">Landmark Reference: use everyday reference points — shoulder, collarbone, waist — to estimate the length you need before you order.</p>
      </section>

      <section className="px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-6">Closures &amp; Frontals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Closure vs. Frontal', '4x4 HD Closure', '13x4 HD Frontal'].map((t) => (
            <h3 key={t} className="font-display font-bold text-lg">{t}</h3>
          ))}
        </div>
      </section>

      <section className="bg-brand-surface px-5 md:px-16 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">Frequently Asked Questions</h2>
      </section>

      <section className="bg-brand-red text-brand-white text-center px-5 md:px-16 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Shop Your Texture Now</h2>
      </section>
    </>
  );
}
