import Button from '../components/Button';
import FormField from '../components/FormField';

const supportCols = [
  ['Retail Support', 'Questions about an existing order, shipping, or how to get the most from a product you already own? Our support team has you covered.'],
  ['Wholesale Inquiries', 'Salons, boutiques, and retailers who want to carry the AmandaKelly line: request the wholesale catalog and terms.'],
  ['Stylist Terms', 'Licensed stylists get first access to new drops, industry pricing, and technical education. Apply once, unlock the network.'],
];

export default function Contact() {
  return (
    <>
      <section className="bg-brand-black text-brand-white px-5 md:px-16 py-14 md:py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">
          Contact AmandaKelly<br />Get in Touch.
        </h1>
        <div className="max-w-4xl">
          <p className="leading-relaxed">
            The AmandaKelly haircare team reads every message and routes it to the right desk. Choose retail support for orders and product questions, wholesale for salon and retail partnerships, or stylist terms for licensed pros. Every inquiry gets a real reply within 2 business days.
          </p>
        </div>
      </section>

      <section className="border-b border-brand-black">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-2 divide-black">
          {supportCols.map(([title, desc]) => (
            <div key={title} className="p-8 md:p-12">
              <span className="font-display font-bold uppercase text-xs tracking-widest block mb-4">{title}</span>
              <p className="text-sm text-brand-on-surface-variant max-w-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-surface px-5 md:px-16 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-3">Direct Inquiry</h2>
            <p className="text-brand-on-surface-variant mb-6">
              Not sure which desk? Send a message here and we'll route it. Real people, real replies, within 2 business days.
            </p>
            <div className="pt-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-display font-bold uppercase text-xs tracking-widest">
                  Prefer social? Follow along
                </span>
                <a
                  href="https://instagram.com/amandakellycompany_"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-red hover:bg-brand-black transition-colors shrink-0"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-brand-white" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <form className="lg:col-span-8 flex flex-col gap-6 md:gap-8 p-6 md:p-12 bg-brand-surface border-2 border-brand-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField label="Full Name" placeholder="Jane Smith" />
              <div>
                <FormField label="Email Address" type="email" placeholder="jane@example.com" />
                <p className="text-[11px] uppercase opacity-40 mt-1">We'll only use this to reply to your message.</p>
              </div>
            </div>
            <FormField label="Inquiry Type" placeholder="Order or product support" />
            <FormField label="Message" textarea placeholder="Tell us how we can help." />
            <Button variant="secondary" type="submit" className="w-full flex justify-center items-center gap-3">
              Send Message →
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
