# AmandaKelly Co. — project context

Resume file for the AmandaKelly Co. Copy Department job. Reference this file (not the template) when picking the job back up in a new chat.

## Business facts

- **Business/offer description:** AmandaKelly Co. is a virgin hair extensions brand. Three product lines: bundles, closures, frontals. 100% virgin, raw, unprocessed, cuticle-intact hair. Closures: 4x4 HD transparent lace. Frontals: 13x4 HD transparent lace. Bundle lengths run bob to waist and beyond. Local Baltimore pickup available at checkout.
- **Target audience:** Three segments served under one quality bar: retail buyers (single bundle for an event/install), working stylists (installing on paying clients, need bundle-to-bundle consistency), and wholesale accounts (stocking a shelf/salon inventory, ordering by the case). Same virgin quality across all three, order size does not change quality.
- **Primary goal:** Not yet explicitly confirmed with the user, working assumption based on site structure is e-commerce sales (Shop Bundles CTA) plus wholesale lead capture (Wholesale Inquiry CTA). Confirm at next intake.
- **Known competitors:** Not yet provided. Loren should research the virgin hair extensions category generally when this job resumes.
- **Existing site/staging build:** Live at https://amanda-kelly.vercel.app/ (site not finished, remaining pages need copy). Note: this URL was unreachable via WebFetch/curl in the session that gathered this context, blocked by the sandbox's outbound network policy (confirmed via proxy status, a 403 on the CONNECT tunnel, not a site-side error) — the user pasted the About page HTML directly instead. If a future session can reach the URL, pull the rest of the site directly; otherwise ask the user to paste remaining page content.
- **Sister brand:** Ureka's Catering & Bartending, same ownership, separate business, referenced on the About page with a cross-link.

## Real content already pulled from the live site (use as factual source, not a style anchor unless noted)

**About page (full HTML, current live copy):**
- Hero: "About AmandaKelly Co." / "100% Virgin Hair Extensions" — serves retail buyers, working stylists, and wholesale accounts nationwide, with local Baltimore pickup at checkout.
- "Why AmandaKelly Co. Started": sells bundles, closures, frontals to retail/stylist/wholesale, virgin hair does not change between segments. Selection: bundle lengths bob to waist+, every piece inspected for cuticle integrity. Construction: 4x4 HD transparent lace closures (center parts), 13x4 HD transparent lace frontals (ear-to-ear coverage).
- "What AmandaKelly Co. Stands For": 100% virgin, raw, unprocessed, cuticle-intact, can handle dye/bleach/heat. Bundles picked one at a time, not bulk-sorted. Closures/frontals matched to bundle quality for seamless installs. Bullet proof points: Raw Unprocessed Cuticle, Professional Grade Durability, Hand-Selected Inventory.
- "Serving: Retail, Stylist, and Wholesale": three-column breakdown, same quality bar across all three, order size does not change quality.
- Sister brand callout: Ureka's Catering & Bartending, shared ownership, "what is delivered is worth what was paid for."
- FAQ (7 questions, already written, live on site): what makes hair "virgin," does quality change for wholesale, where to pick up (Baltimore), can hair be bleached/dyed, what lace types offered, how are bundles selected, what lengths available.
- Reviews (3 testimonials shown): Verified Stylist (consistency across reorders), Retail Buyer (Burmese Curly bundles for wedding, minimal shedding), Wholesale Account (case orders match sample quality).
- Final CTA section: "Shop the Bundles" / "Shop Bundles" + "Wholesale Inquiry" buttons.
- **Brand voice/tone (existing, to revise-within not discard):** Bold, editorial, noir aesthetic (black/white/red color system, uppercase headers, heavy tracking, sharp square corners). Declarative short sentences. Repeated rhythm device: "Nothing more. Nothing less." / "Retail. Stylist. Wholesale." style triads. Confident, no hedging, no upselling language.

**Also already written on the live site (not yet pulled in full, re-fetch or ask user to paste when resuming):** Home page, Hair Guide page, Contact page.

## Page scope decisions (locked in, from user)

Full suggested page list:
- Core: Home, Shop/Catalog, individual product pages, Cart, Checkout, Account/login
- Trust/support: About, Contact, FAQ, Shipping & Returns, Privacy Policy, Terms of Use
- Content/conversion: Blog, Reviews/testimonials, Hair Guide (color/length/texture matching)

Decisions made for the first Copy Department run on this client:
- **Page set for this run:** Core conversion pages first (per user's "just the core conversion pages" pick): Home, About, Shop/Catalog, product page template, Reviews. Contact/FAQ/Shipping/Blog explicitly deferred to a follow-up run once these are approved.
- **Legal pages (Privacy Policy, Terms of Use):** Out of scope for Copy Department entirely, not revisited even in a follow-up copy run, treat as legal-reviewed templates.
- **Home and About:** Existing live copy found. Treatment = **revise/tighten the existing voice**, not a from-scratch rewrite. Raegan should keep the noir/editorial tone, section rhythm, and declarative style, and work within it rather than replacing it outright.
- **Cart, Checkout, Account/login:** Microcopy only (button labels, form field text, confirmation/empty-state messages, brief trust reassurance lines), not full section-by-section persuasive copy or a full Dulce layout pass. Product page template gets full treatment as a real conversion page.

## Hard guardrails

- **No fabricated stats/certifications.** Nothing in the pulled About copy claims a specific hair-sourcing certification, lab test, or country-of-origin guarantee beyond "virgin"/"raw"/"unprocessed" framing. Loren and Raegan must not invent one (e.g. a specific certifying body, a specific percentage claim) not present in this source material or a future user-provided fact.
- **Site access is blocked in-sandbox.** Do not assume WebFetch/curl can reach amanda-kelly.vercel.app in a fresh session, it failed in this one due to network policy, not a transient error. Ask the user to paste content rather than retrying the same fetch repeatedly.

## Pipeline status

- Foundation phase: **not started.** This file was created during intake/scoping conversation only, before Mina was ever dispatched for this client. No architecture, research, strategy, psychology, or layout docs exist yet for this job.
- Pages drafted and passed QA: none.
- Pages remaining: all (Home, About, Shop/Catalog, product page template, Reviews, plus deferred Contact/FAQ/Shipping/Blog for a later run).
- Delivery status: not delivered.

## Open questions

- Primary goal not explicitly confirmed (assumed e-commerce sales + wholesale lead capture from site CTAs, should be confirmed at intake rather than treated as fact).
- No competitor names provided yet, Loren will need to research the category cold.
- Whether Home's existing copy (not yet pulled into this file) also uses the same noir/triad voice as About, confirm by reading the live Home page or asking the user to paste it before Raegan starts.

## Resume notes

This job was scoped and paused before Stage 1 (Intake) was ever formally written, in the same session as a Copy Department pipeline test run (fictional Brightleaf Dental client, tracked separately in `COPY-DEPARTMENT-TODO.md`), because the user wanted to finish that test first. To resume: start a new chat, invoke `/copy-department`, and point it at this file plus the About HTML above for real content. Still need: Home and Hair Guide page content pulled (paste or re-fetch), primary goal confirmed, competitor names if the user has any.
