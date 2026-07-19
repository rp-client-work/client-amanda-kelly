# Schema Stack — canonical types per category

**Base layer, every site regardless of category:**
- Organization (site-wide: logo, sameAs social links, contactPoint)
- WebSite (site-wide, SearchAction where site search exists)
- BreadcrumbList (every page except homepage)
- WebPage (every page, speakable spec where relevant)

**Category layer — add only what applies:**
- Service business with physical presence: LocalBusiness (correct subtype: Restaurant, MedicalBusiness, HomeAndConstructionBusiness, ChildCare, LegalService, FinancialService, etc.) + PostalAddress + ContactPoint + OpeningHoursSpecification + GeoCoordinates
- Service business without physical presence: Service (areaServed, provider, offers, serviceType)
- E-commerce: Product + Offer + Brand + priceValidUntil where relevant
- Founder-led / personal brand: Person + Organization (linked via founder/employee properties)
- Content pages: Article or BlogPosting per post (author, datePublished, dateModified, headline, image)
- Any page with FAQ content: FAQPage (nested Question/Answer pairs)
- Any page with process/steps: HowTo (HowToStep, estimatedCost, totalTime where relevant)
- Reviews/ratings anywhere: Review + AggregateRating (nested inside parent Product/Service/LocalBusiness)
- Fit-for-content extras: Event, Course, Recipe, VideoObject, ImageObject (hero images), JobPosting (careers), SoftwareApplication (SaaS), RealEstateListing, MedicalCondition

Every schema block must validate against Schema.org spec and pass Google Rich Results Test criteria before it's considered complete.
