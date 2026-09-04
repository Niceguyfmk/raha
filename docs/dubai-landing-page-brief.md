# Raha Partners — Dubai Landing Page: Research, Strategy & Design Brief

Prepared 4 September 2026. Labels used throughout: **[VERIFIED]** sourced fact · **[RAHA-PUBLISHED]** copy Raha itself published previously (confirm before reuse) · **[JUDGEMENT]** recommendation · **[NEEDS INPUT]** cannot be published until you confirm.

---

## Phase 1 — Research

### 1.1 Raha Partners today (audit of rahapartners.com and the Next.js codebase)

**What the site currently says [VERIFIED, live site + repo on 4 Sep 2026]**

| Element | Current state |
|---|---|
| H1 | "— Build & scale brands across retail & digital ecosystems" |
| Scroll-reveal line | "We handle distribution, marketplace operations, and marketing execution so brands can focus on building great products." |
| Meta title / description | "Raha Partners \| B2C Services" / "Bespoke B2C solutions for modern businesses." |
| CTA | "Talk to our team → Book a Call" (Google Calendar appointment link), WhatsApp icon in footer, contact form |
| Hero stats (animated counters) | 50+ Retail Partners "From Carrefour to Amazon" · 15+ Countries "EMEA, India & SE Asia" · 30 Days "Concept to First Sale" · 10 Brands "Multi-Category Execution" |
| Services (4 accordions) | Bespoke distribution with a focus on GCC · Ecommerce, D2C and Digital Presence (Amazon, Noon, Shopify) · Digital Marketing and Optimization · Market Intelligence, Network & Regulation |
| Footer "What we offer" | Marketplace Operations · Distribution & Retail · Performance Marketing · GCC Market Entry · Regulatory & Labeling · Warehousing & logistics |
| Clients shown ("Brands We Scale") | Laurastar, LADAZ, Platable, TechXR, OS Fashion Eyewear (cards link to client sites; no descriptions or results) |
| Team | Mohammed Ayub (Investor & Advisor), Talal Aziz (Head of Operations), Faiz Mohammed Khan (Digital Solution Architect, Web & E-Commerce), Carol Rodrigues (Head of Admin), Zeeshan Ali (Head of International Business) |
| Contact | 2001 Grosvenor Business Tower, Barsha Heights, Dubai · +971 58 571 7283 · info@rahapartners.com |
| LinkedIn | "Dubai-based growth advisory firm enabling global brands to enter, scale, and expand across the UAE and GCC markets through structured, performance-led strategies." Founded 2024, 2–10 employees. |
| Visual identity | Pure-black / #161719 dark UI, orange accent (#FF5722 / #FA6F45), Inter variable font, 1400px container, rounded-xl/2xl cards, heavy motion (GSAP text reveals, Lenis smooth scroll, particle/video background, sticky-reveal footer) |
| Tone | Confident, operational, short sentences ("Operational muscle. Market expertise. Digital infrastructure.") |

**Noise in the git history [RAHA-PUBLISHED, removed in commit 61db2e3 "removed noise from our work"]**
> "Built the GCC e-commerce playbook for an Indian consumer electronics brand. Set up marketplace operations on Amazon and Noon, developed the content and listing strategy, and ran performance marketing to build initial traction."

And for Laurastar: "Took a European premium appliance brand from zero GCC presence to full marketplace and retail coverage across the UAE. Built the distribution infrastructure and secured retail partnerships." Both are usable as a starting point but need your re-confirmation **[NEEDS INPUT]**.

**Strengths [JUDGEMENT]**
- The underlying proposition is genuinely differentiated: Raha does *operations* (marketplace, distribution, regulatory, logistics) as well as digital. Almost no Dubai "digital agency" can say that.
- Real, named international brands (Laurastar is a Swiss appliance brand; Noise is India's #1 smartwatch brand by IDC share).
- Low-friction CTAs already exist (calendar link, WhatsApp).
- Modern stack (Next.js 16, Tailwind 4) that can ship a fast page.

**Weaknesses [JUDGEMENT]**
- The H1 is category-vague. "Build & scale brands across retail & digital ecosystems" could describe a distributor, an ad agency or a SaaS. It does not say *who for* or *where*.
- Meta title "B2C Services" and description "Bespoke B2C solutions" are meaningless for search and for humans.
- The site removed Noise, its strongest credibility signal, and the remaining client cards carry no narrative or outcome.
- The four hero counters are unverifiable and read as vanity; "15+ countries" and "50+ retail partners" contradict the "founded 2024, 2–10 employees" LinkedIn profile and will erode trust with a diligent buyer.
- Heavy motion (autoplay video background, particle canvas, Lenis, GSAP) on a black page hurts LCP and mobile battery, and reads "creative agency" rather than "commercial operator".
- No UAE credibility markers beyond an address: no trade licence/TRN, no Google Business Profile link, no partner badges (Amazon, Noon, Shopify), no FAQ, no schema.
- Services are listed as capabilities, not as problems solved. Nothing tells a visitor what happens in the first 90 days.
- The word "digital" is used, but the site does not show a single storefront, listing or dashboard it built.

**What is unclear to a Dubai buyer**
1. Are you a distributor (you take stock and margin) or an agency (fee for service)? Or both, depending on the brand?
2. Who is the ideal client: a foreign brand entering the UAE, or a UAE business fixing its ecommerce?
3. What is the engagement model, timeline and starting point?
4. Which brands did you actually launch, and what happened?

**What would make Raha more credible to a Dubai client [JUDGEMENT]**
- Name the client category and geography in the H1.
- Show Noise and Laurastar as structured mini case studies with verified scope, not logos.
- Replace vanity counters with concrete, checkable facts (marketplaces operated on, retailers listed with, categories launched, time-to-first-sale).
- Add trade licence / TRN, physical office, Google Business Profile, LinkedIn team links.
- Show artefacts: a Shopify storefront, an Amazon A+ page, a Noon brand store, a launch-plan timeline.
- Faster, lighter page. Light-first UI with a dark proof section reads "advisor", not "startup".

### 1.2 The UAE market Raha sells into

**Demand-side facts [VERIFIED, sources at end of section]**
- UAE ecommerce revenue is estimated at US$8.1bn (2025, ECDB) to US$12.4bn (2026, Mordor), growing 10–15% a year; Dubai accounts for roughly 60% of it.
- Amazon.ae, Noon and Carrefour together hold roughly 45–50% of GMV. Noon (~9.1M monthly visits) and Amazon.ae (~8.0M) are neck-and-neck; Noon leads on quick delivery, Amazon on search habit for electronics.
- Smartphones carry ~79% of transaction volume; mobile connections are 195% of population. A page that is slow on a mid-range Android is a page that does not convert.
- Cash-on-delivery has fallen from 41% (2020) to ~20% (2023) in MENA and as low as ~10% in the UAE; digital wallets are ~44% of payments and BNPL (Tabby, Tamara) is the fastest-growing method.
- Shopify: 25,830 live UAE stores (Jul 2026, +16% YoY), 16,569 in Dubai, 398 on Shopify Plus; UAE Shopify GMV passed AED 300M in 2025.
- WhatsApp is used by 85.8% of UAE adults aged 16–64. A 2026 BCG–Meta study found 55% of large UAE organisations plan to make WhatsApp their top engagement investment; Meta/Kantar found 74.6% of people trust a business more when they can message it.
- ~40% of sellers on Amazon UAE/KSA are not locally based; India is the UAE's second-largest trading partner and ~3.5M Indians live in the UAE, which is the stated beachhead logic for boAt, Swiss Beauty and others.

**How international consumer brands actually enter the UAE (2023–2026) [VERIFIED]**

| Brand (origin) | When | Route | Channels |
|---|---|---|---|
| Noise (India) | Mar 2025 | Regional distributor (Lime Concepts) + anchor retailer | Virgin Megastore first; now Amazon.ae and Noon |
| boAt (India) | Jul 2025 | Omnichannel launch with local agency; Lulu, Carrefour, Noon later | Online + offline |
| Swiss Beauty (India) | Dec 2025 | Cross-border enabler (Modist Global): compliance, logistics, distribution | Amazon.ae, Noon, pharmacies |
| Nothing (UK) | Jan 2023 | Retailer partnership (Sharaf DG) | Sharaf DG, Jumbo, Amazon.ae, Noon |
| MANSCAPED (US) | Nov 2025 | Distributor (Monster Middle East) after online-only phase | Retail + marketplaces |
| Wakefit (India) | Aug 2023 | Amazon Global Selling cross-border | Amazon.ae |
| Mamaearth (India) | Dec 2020 | Local distributor | Supermarkets, Noon |

Three routes recur: distributor-led with an anchor retailer; enabler-led marketplace launch optimised for speed and compliance; marketplace-only cross-border. Offline retail is usually added within 6–12 months of the online launch. **[JUDGEMENT]** Raha's service set spans all three routes, which is exactly what no single competitor offers (see 1.3).

Sources: [ECDB UAE](https://ecdb.com/resources/sample-data/market/ae/all) · [Mordor UAE ecommerce](https://www.mordorintelligence.com/industry-reports/united-arab-emirates-ecommerce-market) · [Redseer on Noon](https://redseer.com/articles/local-champions-noon-now-holds-the-leading-position-in-the-uaes-online-retail-sector/) · [Checkout.com MENA report](https://www.checkout.com/newsroom/checkout-coms-4th-annual-mena-report-finds-cash-on-delivery-usage-halved-amongst-maturing-digital-economy) · [StoreLeads UAE Shopify](https://storeleads.app/reports/shopify/AE/top-stores) · [DataReportal UAE 2025](https://datareportal.com/reports/digital-2025-united-arab-emirates) · [BCG–Meta UAE study](https://www.tahawultech.com/news/bcg-meta-study-indicates-uae-businesses-are-going-to-make-whatsapp-their-top-investment-channel-for-digital-engagement/) · [Meta/Kantar State of Business Messaging](https://business.whatsapp.com/resources/resource-library/state-of-business-messaging) · [Helium10 Amazon UAE](https://www.helium10.com/podcast/how-to-sell-on-amazon-uae-in-2025/) · [Inc42 Noise GCC](https://inc42.com/buzz/d2c-startup-noise-enters-gcc-region-as-part-of-global-expansion-plans/) · [Khaleej Times boAt](https://www.khaleejtimes.com/boat-indias-no1-and-worlds-no3-audio-wearables-brand-enters-uae) · [Professional Beauty Swiss Beauty](https://professionalbeauty.in/swiss-beauty-expands-to-the-uae-with-modist-global-partnership) · [Gulf News Nothing](https://gulfnews.com/business/corporate-news/nothing-enters-uae-with-sharaf-dg-1.1673338499271) · [BusinessWire MANSCAPED](https://www.businesswire.com/news/home/20251126315698/en/MANSCAPED-Partners-with-Monster-Middle-East-for-its-Inaugural-Retail-Rollout-in-the-GCC)

### 1.3 Who Raha actually competes with for a client's budget

Research covered 22 Dubai/GCC companies plus 11 international benchmarks (29 searches, 33 page fetches). Several names from the brief turned out not to be live competitors: Crayon Digital is Crayons Communications (a 360 ad agency, acquired by YAAP); Bruce Clay MENA was folded into Incubeta in 2022; Uplers, Blackbox, Sellvo and Frog have no meaningful Dubai ecommerce presence.

The market splits into five camps. A brand entering or scaling in the UAE typically talks to one company from each and stitches them together.

| Camp | Who | What they sell | Where they stop |
|---|---|---|---|
| Full-service digital agencies | Chain Reaction (Publicis, 190+ staff), Nexa (100+ staff, HubSpot Elite), Digital Gravity (200+ staff), Traffic Digital, Prism | Web, SEO, paid media, social, some Amazon PPC | At the storefront and the ad account. No Noon, no stock, no retail |
| Shopify specialists | Creative971 (Premier + Plus partner, 300+ stores), Element8 (Hisense, Garmin), Radiant (KAYALI, Godiva), Lumina | Store design, build, migration, CRO | Build and support. Marketplaces and operations are out of scope |
| Marketplace managers / enablers | NEULABS (AED 1.5–4k/month), ProCommerce (training-led), SellerVine and SalesDuo (international programmatic UAE pages), Yalla!Hub (quick commerce), EcomBridge, Modist Global | Amazon.ae/Noon listings, PPC, VAT/customs, warehousing | SME tier or single-marketplace. No brand storefront, no performance marketing, no retail |
| Distributors with ecommerce teams | Vivandi (health/beauty, 24 years), Infinity Distribution (electronics trader), Lime Concepts (Noise's GCC distributor) | Take stock, sell into retail and marketplaces | Category-siloed; margin-based; no digital build capability |
| Market-entry consultancies | Market Navigator (FMCG regulatory), Accurate Middle East, Publicis Sapient (enterprise) | Entry strategy, licences, regulatory approvals | Advice and paperwork. Execution is someone else's problem |

**The four that will actually take budget from Raha [JUDGEMENT]:** Creative971 (the default "Shopify in Dubai" answer), Chain Reaction (now Publicis-backed for performance and Amazon), Element8 (enterprise positioning with KPI-led case cards), Nexa (20 years, absorbs "digital growth" budgets by default). Watch-list: Radiant (design-quality benchmark with a Downtown Dubai office), Vivandi (the distributor a beauty brand calls first), SalesDuo/SellerVine (harvesting "Amazon agency UAE" search).

### 1.4 Strong landing pages: what the good ones do

Twenty-six pages were fully analysed (11 UAE/GCC-primary, 15 international). The ones worth learning from:

| # | Company · market | Headline (verbatim) | Primary CTA | Why it matters for Raha |
|---|---|---|---|---|
| 1 | [Spreetail](https://www.spreetail.com/) · US ecommerce operator | "Ecommerce is complex. We handle the heavy lifting." | "Talk to an Expert" | The clearest operator model: problem headline, 4 operational stats in the hero (40% Y1 growth, 99.8% same-day shipped), explicit comparison of two engagement models. Light UI. |
| 2 | [Pattern](https://pattern.com/) · US marketplace accelerator | "Opportunities don't wait. Neither does Pi." | "Grow with Pattern" | Operator-scale stats (8m+ units/month, 70+ markets, 99.8% on-time) instead of agency vanity numbers; every service has an outcome line. |
| 3 | [Charle](https://www.charle.co.uk/) · UK Shopify | "Leading Shopify Agency, UK" | "Get in touch" | Portfolio-wide averages ("44% avg. conversion uplift", "£300m+ revenue through Charle stores") are the most credible proof format found. Intent quick-links in the hero. |
| 4 | [Common Thread Collective](https://commonthreadco.com/) · US DTC growth | "…your ecommerce profit partner." | "Introducing the Prophit Engine" | Financial KPIs (+42% contribution margin) not traffic; "Apply Now" selective framing. |
| 5 | [Element8](https://www.element8.ae/) · Dubai | "Enterprise Web Design Company in Dubai" | "Book a 30-min scoping call" | Only Dubai agency with a KPI on every case card (Garmin 275%, Hisense 92%). Three outcome pillars. |
| 6 | [Creative971](https://www.creative971.com/) · Dubai | "We build scalable, high-performance Shopify stores for the GCC" | "Get In Touch" + WhatsApp | Partner-ecosystem strip in the hero (Shopify, DHL, Adyen, Checkout, Mashreq, TDRA); GCC framing; FAQ kept below conversion sections. |
| 7 | [Swanky](https://swankyagency.com/) · UK Shopify Plus | "Compelling digital experiences for international brands on Shopify Plus." | "Discover more" | Navigation by client lifecycle: Launch / Grow / Results. Tech-partner strip as capability proof. |
| 8 | [We Make Websites](https://wemakewebsites.com/) · London/NY | "The Shopify agency for international brands." | "View our work" | Client logos inside the hero; case cards tagged "Ongoing Success"; six sections only. |
| 9 | [Huge](https://www.hugeinc.com/) · New York | "Hello." / "We make things that matter to people." | "Let's talk" | Relationship longevity as proof ("Google: a 14+ year partnership"); logo marquee directly under hero; seven sections. |
| 10 | [DEPT](https://www.deptagency.com/) · Amsterdam | "THE GROWTH INVENTION COMPANY" | "View all work" | Verb-first services ("Drive commerce growth"); partner-tier awards with years. |
| 11 | [Market Navigator](https://www.marketnavigator.ae/) · Dubai | "UAE Market Entry & Growth Consultants: From Insight to Impact." | "Unleash My Business Potential" | Only Dubai site with regulatory outcomes as KPIs ("+50 regulatory approvals", "9 market entries"). Copy is weak, idea is right. |
| 12 | [Blue Beetle](https://www.bluebeetle.ae/) · Dubai | "Strategy-lead websites & marketing that connect, convert, & grow" | "Book a discovery call" (3 Calendly routes) | "We're not for everyone" / "Who we're for" sections; a chooser that routes by need. |
| 13 | [Radiant](https://byradiant.com/) · Birmingham + Downtown Dubai | "The Shopify Premier Partner agency for brands that burn brighter." | "Our Services" | The only Dubai-office site with international-grade restraint: light, photographic, no badge wall. |
| 14 | [Unbundl](https://unbundl.com/) · India/Dubai | "Growth Engine for Category Defining Brands" | "Request a callback" | Badges explained in plain words ("Google Premier Partner – top 3%"); "We reply within one business day" beside the form. |
| 15 | [NEULABS](https://neu.ae/) · Dubai | "Your marketing team. Without the headcount." | "Get Your Free Site Audit" | Published prices, "48h from signup to live", anonymised results. SME-tier, but proves concreteness sells here. |
| 16 | [Vivandi](https://vivandidistribution.com/) · Dubai distributor | "Leading Distributor for Premium International Brands in the UAE and GCC" | "Become A Partner" | Brand-principal testimonials and retailer logos (Boots, Life, Bin Sina) are the proof a distributor needs. |

**Verified performance evidence vs. design judgement.** None of these companies publish landing-page conversion data. Charle, Spreetail, Pattern, SalesDuo and Element8 publish client outcome metrics, which is evidence of commercial success, not of page performance. Everything in the "why it matters" column is design/CRO judgement.

**Recurring patterns across the 26 pages (counts are verified)**
- 17/26 primary CTAs are a contact action; 9 route to work or a product first.
- 19/26 show client logos; only 6 place them in or directly under the hero. Monochrome treatment on 8.
- Partner badges on 14/26. Named testimonials on 12/26. Awards on 8/26.
- Quantified outcomes on the homepage: 9/26. All four ecommerce operators (Pattern, Spreetail, CTC, Xeller) lead with outcome metrics; 5 of 6 pure Shopify design agencies show no numbers.
- Problem-led headline: only 2/26 (Spreetail, Xeller), both operators.
- WhatsApp: 6/26, all UAE-based. 0 of the international benchmarks use it.
- Sticky CTA: 8/26. Inline homepage form: 5/26 (4–8 fields, median 6). Response-time promise: 2/26.
- FAQ accordion: 7/26, all regional/SEO pages, none of the international benchmarks.
- International pages run 5–9 sections; UAE pages run 12–22.
- Dark UI dominates Dubai agencies (8/11); light dominates operators (Spreetail, Xeller, Thrasio, Ecommerce Pro).

### 1.5 2026 design and conversion trends: what is durable, what is fashion

| Trend | Evidence | Verdict for Raha |
|---|---|---|
| Large editorial typography, short copy | Universal on 2025–26 Awwwards Business & Services winners | **Durable. Use.** Cheap, fast, accessible. |
| Kinetic/animated type, 3D/WebGL heroes | Studio Meyer's mid-2026 review: "demo-reel only"; 0.8–2MB JS before first paint | **Fashion. Avoid.** |
| Dark-first UI | Majority of Dubai agencies; split among award winners; operators go light | **Evolve to light-first with a dark proof band.** Reads "advisor", separates Raha from the dark-agency crowd, better for photography of real products and storefronts. |
| Bento / modular card grids | Held up in 2026; just a modular grid | **Durable for the capabilities section.** Skip the glossy treatment. |
| Subtle gradients, glass | Glass costs 15–30% FPS on mid-tier Android | One restrained gradient at most. No blur. |
| Scroll-triggered reveals, micro-interactions | Fine in small doses; harmful when uncontrollable | **Durable in small doses.** Fade/rise on scroll, hover states, honour reduced-motion. |
| Hero video / carousels | Homepage carousel CTRs of 0.16–0.65% in the one B2B study found; NN/g calls auto-rotation error-prone | **Drop the autoplay background video.** Static hero, one message. |
| Big client logos under hero | Table stakes on every ranking Dubai page | **Use, with recognisable names**, and give Noise and Laurastar a case, not a logo. |
| Metric-led proof | Enterprise buyers respond to quantified case studies; vanity counters are noise | **Use verified operational facts only.** No fabricated percentages. |
| Founder / team credibility | Buyers of a consultancy buy people; 74.6% trust a business they can message | **Use.** Named team, LinkedIn links, real photos. |
| Minimal navigation | 3–5 items on award winners | **Use.** 4 items + one CTA. |
| Mobile-first | 79% of UAE transactions on mobile | **Non-negotiable.** |
| WhatsApp conversion | 85.8% usage; 55% of large UAE firms making it their top channel; 6/11 Dubai competitors use it, 0 international | **Use.** Floating on mobile, inline in hero and contact. |
| Calendly / booking | Raha already has a Google appointment link | **Use, embedded on the page**, not a redirect to a blank scheduler. |
| "AI-powered" positioning | Saying it is now noise; showing a specific use is signal | Keep AI out of the headline. Mention AI-assisted catalogue and listing work inside capabilities. |
| Local credibility signals | Address on every ranking page; TRN/licence on none; Arabic on one | **Add licence/TRN, Google Business Profile, +971 numbers, Arabic-capable listings as a capability.** Full Arabic site is low priority for this audience. |
| Page speed | Deloitte/Google: 0.1s faster mobile → +8.4% retail conversions, −8.3% lead-gen bounce | **Treat as a design constraint.** Budget: LCP under 2.0s on 4G, route JS under 150KB. |

Sources: [Studio Meyer 2026 reality check](https://studiomeyer.io/en/blog/webdesign-trends-2026-reality-check) · [Awwwards Business & Services](https://www.awwwards.com/websites/winner_category_business-services/) · [VWO on carousels](https://vwo.com/blog/image-slider-alternatives/) · [Deloitte Milliseconds Make Millions](https://www.deloitte.com/ie/en/services/consulting/research/milliseconds-make-millions.html) · [HubSpot form-field data](https://blog.hubspot.com/marketing/optimize-conversion-forms) · [Statista UAE platforms](https://www.statista.com/statistics/1391532/uae-most-used-social-media-platforms/)

---

## Phase 2 — Strategy

### 2.1 Target customer

**Primary audience: consumer brands launching or in their first two years in the UAE, and the people who own that decision.**
- Who: founders/CEOs, heads of international business, ecommerce directors at consumer-product brands (electronics and wearables, small appliances, beauty and personal care, lifestyle, F&B) headquartered in India, Europe, the UK or the US, plus the Dubai-based regional GMs and distributors who represent them.
- Why they are the most commercially attractive [JUDGEMENT, grounded in 1.2–1.4]: they buy the whole stack (entry, storefront, marketplaces, marketing, distribution) on a retained basis rather than a one-off build; the market-entry flow is real and growing (Noise, boAt, Swiss Beauty, MANSCAPED, Nothing all entered 2023–2025); Raha's two strongest proof points, Noise and Laurastar, are exactly this customer; and no competitor packages the full journey (1.3). Many of these buyers sit in Dubai regional offices or are represented by Dubai distributors, so the page still targets Dubai decision-makers as briefed.

**Secondary audience: established UAE consumer businesses and distributors whose ecommerce is under-built.**
- Who: owners and commercial directors of UAE brands, retailers and distributors selling offline or on a single marketplace, who need a proper Shopify storefront, Amazon.ae/Noon operations and performance marketing run by one accountable team.
- Why secondary: larger in number and searchable ("ecommerce agency Dubai"), but price-compared against Creative971, Nexa and NEULABS. The page serves them through the "Already selling in the UAE?" path and the capabilities section, without diluting the headline.

**Deliberately not targeted:** startups with no product-market fit at home, pure service businesses, government/enterprise digital transformation (Publicis Sapient territory), and sellers looking for AED 1,500/month marketplace management.

### 2.2 Positioning: why choose Raha over an agency, a consultancy or an enabler

Territories explored, with the research verdict:

| Territory | Who already owns it | Verdict |
|---|---|---|
| "Digital agency in Dubai" | Chain Reaction, Nexa, Digital Gravity, Prism, plus ~100 Clutch listings | Crowded, generic, price-compared against 200-person firms. **Reject.** |
| "Shopify / ecommerce development partner" | Creative971, Element8, Radiant, Lumina | They hold Premier/Plus badges and 300+ store portfolios; Raha does not. **Reject as lead, keep as capability.** |
| "Performance / ecommerce growth partner" | Chain Reaction (Publicis), HavStrategy, SalesDuo | Media-buying scale wins here. **Reject as lead.** |
| "UAE market-entry consultancy" | Market Navigator, Accurate Middle East | Consultancies stop at advice and paperwork; buyers know it. **Half right.** |
| "Marketplace operator / enabler" | NEULABS, ProCommerce, EcomBridge, Modist | SME-tier, single-channel, price-led. **Half right.** |
| **"Launch-and-operate partner for consumer brands in the UAE"** | Nobody (1.3, gap 1) | Combines the two half-right territories and adds the storefront and demand generation that enablers and distributors lack. Matches Raha's actual service set and proof. **Recommend.** |

**Positioning statement [JUDGEMENT]**

> Raha Partners launches and operates consumer brands in the UAE. One Dubai team handles regulatory clearance, the Shopify storefront, Amazon.ae and Noon operations, performance marketing and retail distribution, so a brand gets to first sale fast and keeps growing after it.

In one line for the hero: **"We launch and run consumer brands in the UAE."**

Why this creates the clearest differentiation:
1. It names the customer (consumer brands), the geography (UAE) and the job (launch and run) in eight words. Every competitor headline in the research fails at least one of those.
2. "Run" is the word no agency can use. Agencies build and hand over; Raha operates seller accounts, stock and retail relationships.
3. It is provable with what Raha already has: Noise and Laurastar are launch-and-operate stories, and the service list on the current site is already the operator stack.
4. It is durable. Platforms will change (agentic commerce, quick commerce) but "get a brand selling in the UAE and keep it selling" will not.

### 2.3 Competitive differentiation table

| Competitor | Positioning | Strength | Weakness | What Raha can learn | Opportunity for Raha |
|---|---|---|---|---|---|
| Creative971 | "Shopify stores for the GCC" | Premier + Plus badges, 300+ stores, fashion logos (Ted Baker, Sandro), WhatsApp | Stops at the store; no marketplaces, ops or outcome metrics; 19-section page | Partner strip in hero; GCC framing; FAQ below the fold | Own "store + marketplaces + retail" where they only own "store" |
| Element8 | "Enterprise web design company in Dubai" | KPI on every case card; 85 in-house; "Book a 30-min scoping call" | Enterprise web, not commerce operations; no Noon/Amazon | KPI-led case cards; concrete CTA with a duration | Be the commerce equivalent: outcome per case, scoping-call CTA |
| Chain Reaction (Publicis) | "Fully integrated digital agency… making brands matter online" | 190+ staff, 110+ awards, Samsung/Xiaomi testimonials, holding-company backing | Abstract headline; team-photo hero; no Noon; Amazon page shows no partner badge | Named testimonials with titles | Out-specify them: name the marketplaces, the retailers, the process |
| Nexa | "Award-winning end-to-end AI & digital solutions" | 20 years, 100+ staff, HubSpot Elite, 20+ testimonials, chatbot + WhatsApp | Everything-to-everyone; Shopify buried; vanity stats | Volume of named testimonials; Riyadh presence | Specialise where they generalise |
| Digital Gravity | "Your website should sell" / "#1 ecommerce development" | Badge wall, video testimonials, qualifying form (service, timeline, budget), WhatsApp | "#1" claims; SEO-stuffed; 15 sections | Qualifying form fields; process section | Credibility through restraint and verified facts |
| Radiant | "Shopify Premier Partner agency for brands that burn brighter" | International design quality, KAYALI/Godiva, Downtown Dubai office | Affordable-luxury beauty only; no marketplaces; no WhatsApp | Light, photographic restraint | Match the craft level in a commercial (not creative) register |
| NEULABS | "Your marketing team. Without the headcount." | Published prices, "48h to live", cost comparison, WhatsApp | SME-tier, no named clients | Concreteness: timelines, prices, promises | Bring the same concreteness to a mid-market offer |
| SalesDuo / SellerVine | "Amazon agency in the UAE that delivers real results" | Amazon Ads partner badges, 250+ brands, KPI cases, "Book your 1:1 growth call" | US proof on a UAE landing page; no Noon; no local team visible | Marketplace snapshot stats; audit CTA | Be the local, Noon-and-Amazon operator with a Dubai team on the page |
| Vivandi Distribution | "Leading distributor for premium international brands in the UAE and GCC" | 24 years, retailer logos (Boots, Life), brand-principal testimonials, regulatory department | Health/beauty only; template site; no digital build | Retailer logos and principal testimonials as proof | Offer distribution plus the digital layer they cannot build |
| Market Navigator | "UAE market entry & growth consultants" | Regulatory approvals as KPI ("+50"), McLaren/Nestlé logos | FMCG-focused; execution thin; weak copy | Regulatory outcomes as numbers | Make "first sale" the KPI, not "approval" |
| Blue Beetle | "Strategy-led websites & marketing that connect, convert & grow" | "We're not for everyone", chooser CTA with 3 Calendly routes | Hospitality/real estate; 14 staff; no commerce | Qualification and routing by need | Route "entering" vs "already selling" visitors from the hero |
| Spreetail (US) | "Ecommerce is complex. We handle the heavy lifting." | Problem headline, operational stats, two engagement models compared | Not in UAE | Hero structure; engagement-model comparison | Adopt the operator hero pattern for the UAE |
| Charle (UK) | "Leading Shopify agency, UK" | Portfolio-wide averages ("44% avg conversion uplift"); intent quick-links | Keyword H1; 22 sections | Aggregate proof format; quick-links | Publish aggregate operating facts once verified |
| Pattern (US) | "Make ecommerce easy as Pi" | Operator stats (units shipped, on-time %), outcome line per service | Not in UAE; product-led | Outcome line under every capability | Same structure, UAE channels |

### 2.4 Common things everyone in Dubai says (verbatim from the research)

"Best digital marketing agency in Dubai" · "Dubai's #1 ecommerce website development" · "#1 partner" · "Award-winning" · "Leading Shopify agency" · "Leading distributor" · "Fully integrated digital agency" · "End-to-end" · "360°" · "Done-for-you" · "Ambitious brands" · "High-performance" · "Scalable" · "Unlock your growth potential" · "Unleash your business potential" · "10+ years of experience" · "Trusted by leading brands across the UAE, KSA & the Middle East" · "Get in touch" · "Let's connect" · "Get a free consultation".

None of these will appear on the new page.

### 2.5 Opportunities competitors are missing

1. **The integrated operator position.** Nobody says "we build the store, run Amazon.ae and Noon, drive demand and put it on shelves." (1.3)
2. **First sale as the KPI.** Consultancies count approvals, agencies count launches, enablers count listings. "Days to first sale in the UAE" is the number the buyer cares about. Raha's current site already claims a 30-day average; verify it and it becomes the hero fact **[NEEDS INPUT]**.
3. **Structured, honest case studies.** Only Element8 quantifies. A Client / Challenge / Role / Execution / Outcome format with verified scope beats a logo carousel even without percentages.
4. **Journey-based structure** (Enter → Sell online → Grow demand → Reach retail) instead of a 15-item service list.
5. **Routing visitors by situation** ("Entering the UAE" vs "Already selling here") the way Blue Beetle and Charle do, which nobody in commerce does locally.
6. **Concrete engagement models** (retained operator, project build, distribution partnership) shown side by side, as Spreetail does.
7. **Local credibility signals nobody shows:** trade licence and TRN in the footer, Google Business Profile, the actual Dubai office, Arabic-capable listings as a capability.
8. **Craft.** Dubai sites are template-grade. A light, typographic, fast page with real product and storefront imagery will look like a different category of company.

### 2.6 Raha Partners' strongest potential differentiation

**One accountable Dubai team that takes a consumer brand from regulatory clearance to first sale and then keeps operating it across Shopify, Amazon.ae, Noon and retail.** Proven by Noise (India's number-one smartwatch brand) and Laurastar (Swiss premium appliances), and made credible by concrete facts rather than "award-winning" claims.

### 2.7 Noise as a strategic proof point

**Verified public facts about Noise (usable without permission because they are public):**
- Founded 2014 in Gurugram by Amit and Gaurav Khatri; India's number-one smartwatch brand with 26.6% share in CY2025 (IDC); top-three in TWS earbuds (Counterpoint); revenue of roughly INR 1,000–1,400 crore a year; Bose Corporation is its sole external investor (US$10M in 2023, ~US$20M in 2025).
- Entered the GCC in March 2025 via Dubai distributor Lime Concepts with Virgin Megastore as anchor retailer; products are now listed on Amazon.ae, Noon and Virgin Megastore UAE. Entered UK/EU (Selfridges, Printemps) the same month.
- No public source links Raha Partners to Noise. The relationship must be stated on the strength of Raha's own records and with Noise's permission.

**What Raha previously published [RAHA-PUBLISHED]:** "Built the GCC e-commerce playbook for an Indian consumer electronics brand. Set up marketplace operations on Amazon and Noon, developed the content and listing strategy, and ran performance marketing to build initial traction."

**How to present it [JUDGEMENT]:** not as a logo, but as the featured engagement, framed around the pattern in 1.2: an established international brand entering the UAE through marketplaces, with Raha as the operating team. The headline for the section is "International brands. Local execution." and the case uses the compact format from section 3.5.

**Before publishing, confirm [NEEDS INPUT]:**
1. Permission to name Noise and use its logo.
2. Exact role: were the Amazon.ae/Noon seller accounts operated by Raha, and how does that sit alongside Lime Concepts and Virgin Megastore?
3. Dates (start, first sale, current status: ongoing or completed).
4. Which SKUs/categories (smartwatches, TWS, Luna Ring) and any verified outcome (time to first sale, listings live, ranking, rating, review counts, revenue) you are willing to publish.

### 2.8 Conversion strategy

**Primary CTA comparison**

| Option | Fit with primary audience | Clarity of next step | Friction | Verdict |
|---|---|---|---|---|
| Book a Consultation | Generic; every Dubai agency uses it | Medium | Medium (calendar) | No |
| Discuss Your Project | Neutral; assumes a defined project | Medium | Low | Secondary only |
| Start a Project | Too committal for a first click | Low | High | No |
| Talk to Our Team | Warm but vague | Low | Low | Use for WhatsApp label |
| **Plan Your UAE Launch** | Speaks directly to the market-entry buyer; outcome-framed | High | Low if it opens a 4-field form or booking | **Primary** |
| Get a Digital Audit | Good for the secondary audience ("already selling") | High | Low | **Secondary path**, labelled "Get a channel audit" |

**Recommended mechanism stack**
- Navigation: persistent "Book a call" button (embedded Google appointment schedule in the contact section; the existing link is fine).
- Hero: primary "Plan your UAE launch" (scrolls to the contact form with the "Entering the UAE" option preselected) and secondary "WhatsApp us" (deep link with pre-filled message).
- Situation router below the hero: "Entering the UAE" / "Already selling in the UAE", each jumping to the relevant capability block with the form option preset.
- Mobile: a slim sticky bar with WhatsApp and Book a call, appearing after the visitor scrolls past the hero. No floating bubble over content on desktop.
- Contact section: a four-field form (name, work email, company, "Where are you today?" select), optional phone, "We reply within one business day" promise, the embedded booking calendar beside it, WhatsApp, email and phone. Three fields plus a select stays inside the HubSpot finding that every extra field costs conversions and required phone fields cost ~37%.
- No chatbot, no pop-ups, no exit-intent, no newsletter modal.

### 2.9 SEO / GEO strategy

**Reality check [VERIFIED]:** public volume data exists only for broad terms (Keyword Planner UAE, June 2026: "seo agency dubai" 8,100/mo, "digital marketing agency dubai" 5,400, "web design dubai" 4,400). Volumes for the target queries below are estimates and must be confirmed in Ahrefs/Semrush (UAE) before committing. Ranking pages share a pattern: exact-match title, "Dubai" in the H1, a services grid, one FAQ block, an address, and increasingly WhatsApp. Almost none show quantified outcomes or Arabic.

| Query | Intent | Est. UAE volume | Competition | Role |
|---|---|---|---|---|
| ecommerce development Dubai | Commercial | 300–800 | Medium-high | Secondary |
| Dubai ecommerce agency | Commercial | 200–500 | Medium | Secondary |
| performance marketing agency Dubai | Commercial | 200–500 | Medium-high | Secondary (service page) |
| Shopify development Dubai / Shopify agency Dubai | Commercial | 100–300 each | Medium | Secondary (service page) |
| UAE market entry consultant | Commercial, high value | 50–150 | Low-medium | **Primary theme** |
| ecommerce consulting Dubai | Commercial | 30–100 | Low | Whitespace |
| Amazon.ae account management / Noon seller management | Commercial | 50–200 each | Low | Whitespace, service page |
| UAE ecommerce partner | Vague | under 50 | Low | Do not build a page on it |

**Primary keyword theme:** UAE market entry and ecommerce launch for consumer brands ("UAE market entry", "launch brand in UAE", "sell in UAE", "Amazon.ae and Noon for brands").
**Secondary themes:** ecommerce agency Dubai; Shopify development Dubai; Amazon.ae / Noon account management; performance marketing Dubai; ecommerce consulting Dubai.

**On-page recommendations**
- Meta title (58 chars): `UAE Market Entry & Ecommerce Partner for Consumer Brands | Raha Partners`
- Meta description (155 chars): `Raha Partners launches and operates consumer brands in the UAE: Shopify storefronts, Amazon.ae & Noon operations, performance marketing and retail distribution. Dubai-based.`
- H1: `We launch and run consumer brands in the UAE.`
- H2 structure: Brands we have launched and operated in the UAE · Entering the UAE is easy. Selling here is not. · What we do, from clearance to repeat orders · Featured engagement: Noise · Selected work · How an engagement runs · Why brands choose a Dubai operator · Platforms and channels we operate · Questions brands ask before entering the UAE · Plan your UAE launch
- Internal linking: from each capability block to a dedicated service page (Shopify development Dubai; Amazon.ae and Noon account management; performance marketing Dubai; UAE market entry for consumer brands; retail distribution UAE) and from each case card to a full case page. Those five service pages carry the secondary keywords so the landing page stays persuasive rather than stuffed.
- FAQ topics (also the GEO answer set): How long does it take to start selling in the UAE? · Do we need a UAE entity to sell on Amazon.ae and Noon? · Amazon.ae or Noon: which should a brand launch on first? · What does UAE product registration and labelling involve? · Do you buy stock or work on a fee? · Can you run our existing Shopify store and marketplaces? · Do you cover Saudi Arabia and the rest of the GCC?
- Schema: `Organization` (legal name, Dubai address, +971 phone, sameAs to LinkedIn and Google Business Profile), `ProfessionalService` with `areaServed` UAE/GCC, `FAQPage`, `Person` for the named team, `Service` for each capability.
- GEO/AEO: Google states no special requirements for AI Overviews; Ahrefs found only 38% of cited pages rank top-10, and brand mentions correlate with AI visibility. `llms.txt` has no measurable effect. So: answer-shaped H2s with a 40–60 word direct answer, dated original data (a "UAE marketplace launch checklist 2026" article), profiles on Clutch, Shopify Partners, Amazon SPN and Google Business, and do not block GPTBot, PerplexityBot or ClaudeBot in robots.txt.

Sources: [markamo UAE keyword data](https://markamo.com/en/blog/uae-digital-advertising-statistics-2026) · [Google AI features doc](https://developers.google.com/search/docs/appearance/ai-features) · [Ahrefs AIO citation study](https://news.designrush.com/ai-overview-citations-drop-ahrefs) · [Ahrefs on llms.txt](https://ahrefs.com/blog/what-is-llms-txt/) · [Creative971](https://www.creative971.com/) · [Eastside Co Dubai](https://eastsideco.com/shopify-web-design-dubai) · [Accurate ME market entry](https://meaccurate.com/uae-market-entry/)

---

## Phase 3 — Information architecture

### 3.1 Why not Hero → About → Services → Clients → Contact

The research shows the standard order buries proof under self-description. Operators (Spreetail, Pattern) and the best Dubai page (Element8) put proof and the problem before capabilities. The recommended narrative:

1. **Claim** (hero): who we are for, what we do, what to do next.
2. **Proof** (client strip): show that real international brands trusted us before the visitor reads a word of services.
3. **Stakes** (problem): why "a website and a listing" is not enough in the UAE. This creates the need for an operator.
4. **Answer** (what we do, by journey): Enter → Sell online → Grow demand → Reach retail.
5. **Evidence** (featured engagement: Noise; then selected work).
6. **Mechanism** (how an engagement runs, engagement models): removes the "what happens next" uncertainty.
7. **Trust** (why a Dubai operator; team; platforms).
8. **Objections** (FAQ, doubles as SEO/GEO).
9. **Action** (contact, booking, WhatsApp, licence details).

Eleven sections. Longer than the international benchmarks (5–9) because a UAE buyer expects FAQ and local details, shorter than the Dubai norm (12–22) because nothing is there for keyword padding.

### 3.2 Section-by-section specification

| # | Section | Purpose | Layout | CTA | Desktop | Mobile | Motion |
|---|---|---|---|---|---|---|---|
| 0 | Navigation | Orientation and a persistent conversion path | Logo left; 4 links (What we do, Work, How we work, Team); WhatsApp icon + "Book a call" button right | Book a call | Sticky, 64px, turns solid on scroll | Logo + WhatsApp icon + hamburger; full-screen menu with the same 4 links and both CTAs | Background fade on scroll only |
| 1 | Hero | Five-second comprehension | Two columns: left copy (eyebrow, H1, sub, two CTAs, fact row); right a "launch ledger" card that lists the channels a brand goes live on | Plan your UAE launch · WhatsApp us | 12-col grid, copy spans 7, card spans 5 | Copy stacks; card below CTAs, condensed to 4 rows | One staggered rise on load (≤600ms); card rows tick in; none if reduced-motion |
| 2 | Situation router + client strip | Route by need; prove trust immediately | Two pill links ("Entering the UAE →", "Already selling here →") above a monochrome logo row with the caption "Brands we have launched and operated in the UAE" | Router links | Single row of 6 logos | Two rows of 3 | None (no marquee) |
| 3 | Stakes | Create the need for an operator | Section title + three short problem cards | None | 3 columns | Stacked | Fade-in on scroll |
| 4 | What we do | Explain the offer by journey, outcome first | 4 large cards in a 2×2 bento; each: step number, outcome headline, one-line promise, 4 concrete deliverables, link to service page | "See how it runs" anchor | 2×2 with the first card slightly wider | Stacked, deliverables collapse to 3 | Fade-in; hover lifts card 2px |
| 5 | Featured engagement: Noise | Turn the strongest credibility signal into a story | Dark band. Left: Client / Challenge / Role / Execution / Outcome ledger. Right: product imagery and 3 verified facts about Noise | "Read the full case" (future page) | 2 columns | Ledger first, image second | Rows reveal on scroll |
| 6 | Selected work | Show breadth without fabricating results | 3 compact cards (Laurastar, LADAZ, TechXR) using the same ledger format, shortened | "All work" (future) | 3 columns | Horizontal snap-scroll | None |
| 7 | How we work | Remove uncertainty about process and commercial model | Timeline of 3 phases with week ranges; below, 3 engagement-model cards side by side | Plan your UAE launch | Timeline horizontal; models 3 columns | Timeline vertical; models stacked | Progress line draws on scroll |
| 8 | Why a Dubai operator + team | Trust in people and locality | 4 reason blocks; then 5 team cards with photo, name, role, LinkedIn | None | 4 reasons in a row; team 5-up | 2×2 reasons; team horizontal scroll | None |
| 9 | Platforms and channels | Capability proof | Monochrome logo strip: Shopify, Amazon.ae, Noon, Carrefour, Meta, Google + a line naming retailers | None | One row | Two rows | None |
| 10 | FAQ | Objections; SEO/GEO | Accordion, 7 questions, answers 40–60 words | None | Single column, 760px | Same | Height transition |
| 11 | Contact | Convert | Left: 4-field form + promise. Right: embedded booking calendar. Below: WhatsApp, phone, email, office, licence/TRN | Send · Book a call · WhatsApp | 2 columns | Form first, then a "Book a call" button that expands the calendar | None |
| 12 | Footer | Legal and links | Logo, address, licence, links to service pages, LinkedIn | None | 4 columns | Stacked | None |
| — | Mobile sticky bar | Low-friction conversion | WhatsApp + Book a call | Both | Hidden | Appears after 80% of hero scrolls out | Slide-up |

### 3.3 Hero concepts (five distinct approaches)

| Concept | Approach | Headline | Sub-headline | Verdict |
|---|---|---|---|---|
| A. Operator claim | Say the job plainly | **We launch and run consumer brands in the UAE.** | Shopify storefront, Amazon.ae and Noon operations, performance marketing and retail distribution, from one Dubai team. | **Selected.** Passes the five-second test on all four questions; owns the whitespace; durable. |
| B. Problem-led (Spreetail pattern) | Name the pain the visitor already feels | Entering the UAE is easy. Selling here is not. | Licences, labelling, two marketplaces that reward operators, and retailers who want a local partner. We handle all of it. | Strong, but it delays "what we do" to the sub-line and reads slightly negative for a first impression. **Used as the section-3 title instead.** |
| C. Outcome / time-to-first-sale | Lead with the KPI | From clearance to first UAE sale in 30 days. | We handle the entity, the listings, the store and the demand so your product is selling, not just registered. | Most persuasive if the number is verified. Currently unverifiable. **Hold until [NEEDS INPUT] is resolved; then A/B test against A.** |
| D. Proof-led (Noise) | Borrow the client's credibility | The operating team behind Noise's UAE ecommerce launch. | Now taking on the next consumer brands entering the Gulf. | Requires Noise's permission and overstates unless the scope is confirmed. Risky as a headline; **used as the featured-engagement framing instead.** |
| E. Selective / qualifying (CTC pattern) | Signal that Raha chooses clients | For brands that want to be sold in the UAE, not just listed. | We take a small number of consumer brands from clearance to shelf and screen each year. | Distinctive, but a 2024-founded firm cannot yet afford to look exclusive. **Reuse the line "sold, not just listed" inside the stakes section.** |
| F. Category/SEO | Match the search phrase | Dubai's ecommerce and market-entry partner for consumer brands. | … | Reads like everyone else. **Rejected; the phrase goes in the meta title.** |

**Selected hero, full specification**
- Eyebrow: `Dubai · UAE & GCC · Consumer brands`
- H1: `We launch and run consumer brands in the UAE.`
- Sub: `One Dubai team for regulatory clearance, your Shopify storefront, Amazon.ae and Noon operations, performance marketing and retail distribution. From first listing to repeat orders.`
- Primary CTA: `Plan your UAE launch` · Secondary: `WhatsApp us`
- Fact row (all verifiable from Raha's own operations, replacing the counters): `Dubai-registered operator` · `Amazon.ae & Noon seller operations` · `Shopify storefronts` · `Retail & distribution`
- Right-hand "launch ledger" card: a list of channels with status ticks (Trade licence & product registration · Shopify storefront · Amazon.ae · Noon · Retail listings · Performance campaigns), headed "One brand. Every channel." It communicates the integrated stack visually in one glance and needs no photography.

---

## Phase 4 — Copy

All copy below is final draft English. Items marked **[NEEDS INPUT]** must be confirmed before publishing.

### Navigation
What we do · Work · How we work · Team · [WhatsApp] · **Book a call**

### 1. Hero
**Eyebrow:** Dubai · UAE & GCC · Consumer brands
**H1:** We launch and run consumer brands in the UAE.
**Sub:** One Dubai team for regulatory clearance, your Shopify storefront, Amazon.ae and Noon operations, performance marketing and retail distribution. From first listing to repeat orders.
**CTAs:** Plan your UAE launch · WhatsApp us
**Fact row:** Dubai-registered operator · Amazon.ae & Noon seller operations · Shopify storefronts · Retail & distribution
**Ledger card title:** One brand. Every channel.
**Ledger rows:** Product registration & labelling · Shopify storefront · Amazon.ae · Noon · Retail listings · Performance campaigns

### 2. Router + client strip
**Router:** Entering the UAE → · Already selling here →
**Caption:** Brands we have launched and operated in the UAE
**Logos:** Noise **[NEEDS INPUT: permission + logo file]** · Laurastar · LADAZ · Platable · TechXR · OS Fashion Eyewear **[NEEDS INPUT: confirm each may be shown and supply monochrome logo files]**

### 3. Stakes
**H2:** Entering the UAE is easy. Selling here is not.
**Intro:** Registering a company takes days. Getting a product cleared, listed, ranked, stocked and reordered takes an operator. Three places brands stall:
1. **The border.** Product registration, Arabic labelling, conformity and import documents stop more launches than pricing does.
2. **The marketplaces.** Amazon.ae and Noon are roughly half of UAE online retail. They reward sellers who manage content, ads, stock and reviews every day, not once at launch.
3. **The shelf.** Carrefour, Lulu, Virgin and Sharaf DG want a local partner who handles supply, returns and promotion. A brand store alone does not get you listed.
**Closing line:** We take brands from cleared to sold, not just listed.

### 4. What we do
**H2:** What we do, from clearance to repeat orders
**Intro:** Four stages, one accountable team. Take the whole journey or the stage you are missing.

**01 · Enter — Get your product legally sellable in the UAE.**
Product registration, Arabic and English labelling, conformity and import paperwork, and the right commercial structure so you sell from day one without a UAE entity if you don't need one.
- Municipality and product registration
- Labelling and compliance
- Import and customs coordination
- Distributor or consignment structure, so you sell without setting up a UAE entity **[CONFIRMED 4 Sep 2026: Raha acts as distributor or consignment partner, not entity set-up]**
Link: UAE market entry for consumer brands →

**02 · Sell online — A storefront and marketplaces that convert.**
A fast Shopify store built for UAE checkout habits (wallets, BNPL, COD where it still matters), plus Amazon.ae and Noon accounts we set up and operate.
- Shopify design, build and speed optimisation
- Amazon.ae and Noon account setup and daily operations
- Catalogue, A+ content and Arabic/English listings
- Payments, shipping and 3PL integrations
Link: Shopify development Dubai → · Amazon.ae & Noon operations →

**03 · Grow demand — Acquisition that pays for itself.**
Performance marketing across Google and Meta, marketplace advertising, and the creators and reviews that move UAE shoppers.
- Google Shopping and Meta campaigns
- Amazon and Noon sponsored ads
- Search and generative-search optimisation
- Influencer, affiliate and review programmes
Link: Performance marketing Dubai →

**04 · Reach retail — From screens to shelves.**
Channel strategy, retailer onboarding, warehousing and logistics, and in-store execution once online traction proves the demand.
- Retailer and distributor onboarding
- Warehousing, logistics and returns
- In-store promoters, pop-ups and activations
- GCC expansion: Saudi Arabia and beyond **[NEEDS INPUT: confirm markets actually served]**
Link: Retail distribution UAE →

### 5. Featured engagement: Noise
**Eyebrow:** Featured engagement
**H2:** International brands. Local execution.
**Ledger**
- **Client:** Noise. India's number-one smartwatch brand (26.6% share, IDC 2025), backed by Bose, with a Gurugram HQ and a Made-in-India product range across smartwatches, earbuds and the Luna smart ring.
- **Challenge:** Establish and grow Noise's ecommerce presence in the UAE as part of its first international expansion, in a market where Amazon.ae and Noon set the terms. **[NEEDS INPUT: confirm wording]**
- **Role:** GCC ecommerce playbook, marketplace operations on Amazon.ae and Noon, content and listing strategy, performance marketing. **[RAHA-PUBLISHED; confirm each item and how it sits alongside Lime Concepts and Virgin Megastore]**
- **Execution:** Seller account setup, catalogue and A+ content, pricing and promotion calendar, sponsored ads, review and rating management, stock and fulfilment coordination. **[NEEDS INPUT: keep only what was actually delivered]**
- **Outcome:** [To be supplied. Candidates: date of first UAE sale, listings live, category rank, rating, review count, revenue growth. If none can be published, the row reads: "Live on Amazon.ae and Noon since [month year]; engagement ongoing." **[NEEDS INPUT]**]
**Verified fact chips (right column):** #1 smartwatch brand in India (IDC, CY2025) · Bose-backed since 2023 · GCC entry March 2025
**CTA:** Read the full case (future page)

### 6. Selected work
**H2:** Selected work
Cards (Client · Challenge · Role · Outcome):
- **Laurastar** · Swiss premium garment-care appliances with no GCC presence · Distribution infrastructure, retail partnerships, marketplace and retail coverage across the UAE **[RAHA-PUBLISHED; confirm]** · Outcome: [NEEDS INPUT]
- **LADAZ** · [NEEDS INPUT: one-line challenge] · [NEEDS INPUT: role] · [NEEDS INPUT]
- **TechXR** · [NEEDS INPUT] · [NEEDS INPUT] · [NEEDS INPUT]
(Platable and OS Fashion Eyewear stay in the logo strip until their scope is confirmed.)

### 7. How we work
**H2:** How an engagement runs
**Phase 1 · Weeks 0–2 · Diagnose and plan.** Category and pricing review, channel plan, compliance checklist, launch timeline and a commercial model you sign off before anything is built.
**Phase 2 · Weeks 2–8 · Build and list.** Registration and labelling, storefront build, marketplace accounts, catalogue and content, logistics set-up, campaign build. **[NEEDS INPUT: confirm typical durations]**
**Phase 3 · Week 8 onward · Operate and scale.** Daily marketplace operations, campaigns, stock and returns, retailer onboarding, monthly reporting against the plan.

**Engagement models**
- **Retained operator.** We run your UAE channels end to end on a monthly retainer with performance-linked terms. Best for brands entering the market or scaling past a single channel.
- **Project build.** A defined scope: storefront, marketplace launch or compliance package. Fixed timeline, fixed price.
- **Distribution partnership.** For selected categories we take stock and margin and sell into retail and marketplaces ourselves. **[NEEDS INPUT: confirm you offer this and for which categories]**
**CTA:** Plan your UAE launch

### 8. Why a Dubai operator, and who you will work with
**H2:** Why brands choose a Dubai operator
- **One accountable team.** Store, marketplaces, marketing and distribution are run by the same people, so nothing falls between an agency, an enabler and a distributor.
- **We operate, we don't hand over.** Seller accounts, stock, returns and retailer relationships stay managed after launch.
- **Built for this market.** Arabic and English listings, UAE payment habits, Noon and Amazon.ae playbooks, and relationships with the retailers that matter.
- **Priced on outcomes.** Retainers with performance-linked terms; no lock-in beyond the agreed launch period. **[NEEDS INPUT: confirm commercial terms]**

**H3:** The team
- Talal Aziz · Head of Operations
- Faiz Mohammed Khan · Digital Solution Architect, Web & Ecommerce
- Zeeshan Ali · Head of International Business
- Carol Rodrigues · Head of Admin
- Mohammed Ayub · Investor & Advisor
(Each with photo and LinkedIn link. Bios trimmed to one line each on this page.)

### 9. Platforms and channels
**Caption:** Platforms and channels we operate
Shopify · Amazon.ae · Noon · Carrefour · Google · Meta
**Line:** Retail partners include Carrefour and [others] **[NEEDS INPUT: list only retailers you have actually listed products with; the current site says "From Carrefour to Amazon"]**

### 10. FAQ
**H2:** Questions brands ask before entering the UAE
1. **How long does it take to start selling in the UAE?** With compliant products and stock available, marketplace listings can be live within weeks and a storefront within one to two months; the sequence depends on product registration. We give you a dated plan in the first two weeks. **[NEEDS INPUT: confirm typical range]**
2. **Do we need a UAE entity to sell on Amazon.ae and Noon?** Not always. Depending on category and volume, brands sell through a local partner, a consignment structure or their own entity. We recommend the structure after reviewing your category, margins and plans for retail.
3. **Amazon.ae or Noon first?** Both matter: together with Carrefour they hold roughly half of UAE online retail. Amazon.ae tends to win search-led categories such as electronics, Noon wins frequency and quick delivery. Most brands we work with launch on both within the same quarter.
4. **What does product registration and labelling involve?** Category-specific registration with the relevant authority, Arabic and English labelling, and conformity documents for import. Electronics, cosmetics and food each follow different paths; we run the process and the paperwork.
5. **Do you buy stock or work on a fee?** Both models exist. Most engagements are retained operations on a fee with performance-linked terms; for selected categories we take stock and margin as a distributor. **[NEEDS INPUT]**
6. **Can you take over an existing store and marketplace accounts?** Yes. We audit the storefront, listings, advertising and logistics, then either fix specific gaps as a project or run the channels on a retainer.
7. **Do you cover Saudi Arabia and the rest of the GCC?** The UAE is our operating base. We extend to Saudi Arabia and other GCC markets once the UAE channel is performing. **[NEEDS INPUT: confirm]**

### 11. Contact
**H2:** Plan your UAE launch
**Sub:** Tell us what you sell and where you are today. We reply within one business day with a short assessment and a proposed call.
**Form fields:** Name · Work email · Company · Where are you today? (Entering the UAE / Already selling in the UAE / Exploring the GCC) · Phone (optional)
**Button:** Send
**Alternatives:** Book a 30-minute call (embedded calendar) · WhatsApp +971 58 571 7283 · info@rahapartners.com
**Office:** 2001 Grosvenor Business Tower, Barsha Heights, Dubai, UAE
**Licence:** Raha Partners [legal entity name], Trade licence no. [ ], TRN [ ] **[NEEDS INPUT]**

### Footer
Raha Partners · Dubai, UAE · What we do · Work · How we work · Team · LinkedIn · Privacy · © 2026 Raha Partners
Service links: UAE market entry for consumer brands · Shopify development Dubai · Amazon.ae & Noon operations · Performance marketing Dubai · Retail distribution UAE

### Microcopy
- WhatsApp pre-filled message: "Hi Raha Partners, we're a [category] brand looking at the UAE. Can we talk?"
- Form success: "Thanks. You'll hear from [name] within one business day."
- Mobile sticky bar: "WhatsApp" · "Book a call"

---

## Phase 5 — Visual direction and mini design system

### 5.1 Should the identity evolve?

Yes, in one direction: keep the orange, keep Inter, drop the black. The current site's pure-black canvas, particle canvas and autoplay video read "creative agency", which is the crowded camp in Dubai (8 of 11 local agencies are dark). Operators and consultancies that buyers trust (Spreetail, Radiant, Element8's case cards) use light, photographic, typographic layouts. A warm off-white ground with one dark proof band keeps Raha's brand recognisable while moving it into the "serious operator" register. The orange stays as the single accent so the page still reads as Raha.

### 5.2 Tokens

**Colour**
| Token | Value | Use |
|---|---|---|
| `--paper` | #F6F4F0 | Page background (warm off-white; avoids the clinical SaaS white) |
| `--paper-2` | #ECE8E1 | Alternate section background, card fills on paper |
| `--ink` | #14161A | Headlines, body on paper, dark band background |
| `--ink-2` | #1E2126 | Cards on the dark band |
| `--ink-soft` | #4A4E57 | Body text secondary |
| `--muted` | #8A8F99 | Captions, eyebrows, logo strip |
| `--line` | rgba(20,22,26,0.10) | Hairlines on paper |
| `--line-dark` | rgba(255,255,255,0.10) | Hairlines on ink |
| `--orange` | #F0532A | Brand accent: primary buttons, active states, ledger ticks |
| `--orange-deep` | #D9441D | Button hover |
| `--orange-tint` | #FDEDE7 | Accent backgrounds (router pills, tags) |
| `--green` | #1F8A5B | "Live" status ticks in the ledger only |

Contrast: ink on paper 15.6:1; orange on paper 3.9:1 (use for buttons with white text, 4.6:1, and never for body copy); muted on paper 4.5:1.

**Typography** (Inter Variable, already self-hosted in the repo; display sizes use `font-feature-settings: "cv11", "ss01"` and tighter tracking)
| Role | Size (desktop / mobile) | Weight | Tracking | Line height |
|---|---|---|---|---|
| Display / H1 | 72 / 40 px | 600 | −0.035em | 1.02 |
| H2 | 44 / 30 px | 600 | −0.03em | 1.08 |
| H3 | 24 / 20 px | 600 | −0.02em | 1.2 |
| Lead | 20 / 17 px | 400 | −0.01em | 1.5 |
| Body | 16 / 16 px | 400 | 0 | 1.6 |
| Small / captions | 13 px | 500 | 0.02em | 1.4 |
| Eyebrow | 12 px | 600 | 0.12em, uppercase | 1 |
| Ledger / data | 14 px, tabular numerals | 500 | 0 | 1.4 |

**Spacing and grid.** 4px base. Section padding 96px desktop / 64px mobile. Container 1200px with 24px gutters (the current 1400px is too wide for reading). 12-column grid, 24px gap. Card padding 28px. Vertical rhythm between heading and body: 16px; between intro and content: 48px.

**Radius.** 6px inputs and tags, 12px cards, 999px pills and buttons. No 24px+ radii; large radii are the "startup" tell.

**Buttons.**
- Primary: orange fill, white text, 999px, 48px tall, 20px horizontal padding, 15px/600. Hover: orange-deep, 1px rise. Focus: 2px ink outline offset 2px.
- Secondary: transparent, 1px ink border, ink text; on dark band 1px white/30 border, white text. Hover: paper-2 fill.
- Tertiary/link: ink text, 1px underline offset 4px, orange on hover.
- WhatsApp: secondary style with the WhatsApp glyph; never green-filled on this page (green is reserved for status).

**Cards.** Paper-2 fill on paper sections, ink-2 on dark sections; 1px line border; no drop shadow at rest; hover translateY(−2px) with a 1px orange top border on the bento cards only.

**Ledger component** (used in hero and case studies): a table-like list with 14px labels left, values right, tabular numerals, 1px hairlines, and a 16px status glyph (orange tick = delivered, green dot = live, muted dash = not in scope). It is the visual signature of the page: proof presented like an operating record, not a brochure.

**Icons.** 1.5px stroke, 20px, ink; only in the stakes cards and contact block. No icon per service (that is the template look).

**Photography.** Real product and storefront imagery only: Noise and Laurastar product shots (with permission), screenshots of live Amazon.ae/Noon listings and the Shopify storefronts, retail shelf photos, the actual Dubai office, real team portraits on the paper background. No stock skyline, no handshake, no abstract 3D.

**Client logos.** Monochrome ink at 60% opacity, 28px tall, equal optical weight; full opacity on hover. Static row, no marquee.

**Animation.** One load stagger in the hero (opacity + 12px rise, 500ms, 60ms stagger); section fade-in on scroll via IntersectionObserver (opacity + 16px, 400ms, once); the how-we-work progress line draws on scroll; FAQ height transition 200ms. Everything gated by `prefers-reduced-motion`. No smooth-scroll library, no GSAP, no canvas.

**Hover states.** Links: underline colour to orange. Cards: 2px rise. Logos: opacity 0.6→1. Team cards: LinkedIn glyph appears.

**Dark band.** Sections 5 (Noise) and 11 (Contact) sit on ink with paper text; everything else on paper. The alternation gives the page rhythm without a dark-mode toggle.

---

## Phase 6 — Wireframes

Coordinates are for a 1440px desktop viewport and a 390px mobile viewport.

**0 Navigation.** Desktop: 64px bar, logo 120px left, links centred with 32px gaps, WhatsApp icon (24px) and primary button right. Transparent over hero, paper/90 with 1px line after 40px scroll. Mobile: 56px bar; logo, WhatsApp icon, hamburger. Menu is a full-height paper overlay listing 4 links at 28px with both CTAs pinned at the bottom.

**1 Hero.** Desktop: 120px top padding; grid 12; columns 1–7 hold eyebrow (12px), H1 at 72px over three lines ("We launch and run / consumer brands / in the UAE."), lead at 20px max-width 560px, button row (primary 160px, secondary 140px, 16px gap), then a fact row of four items separated by 1px vertical hairlines at 13px. Columns 8–12 hold the ledger card (paper-2, 12px radius, 28px padding, 6 rows of 44px, title "One brand. Every channel.", each row: label left, status glyph right, last row orange "Live"). Height ≈ 720px. Mobile: eyebrow, H1 at 40px over four lines, lead 17px, buttons full-width stacked (primary first), fact row as a 2×2 grid at 12px, ledger card full-width with 4 rows.

**2 Router + logos.** Desktop: two pill links centred (orange-tint fill, ink text, arrow), 24px below the hero; then a caption at 12px uppercase muted, then 6 logos in one 1200px row, 28px tall, 64px gaps. 120px section height. Mobile: pills full-width stacked; logos 3 per row, 2 rows.

**3 Stakes.** Desktop: H2 at 44px, max-width 720px, left-aligned; intro 20px; three cards (paper-2, 12px radius) in columns 1–4, 5–8, 9–12, each with a 20px icon, H3 at 24px, 16px body; closing line at 20px/600 below. Mobile: stacked cards, 16px gap.

**4 What we do.** Desktop: H2 + intro; bento 2×2, first row card 1 spans columns 1–7 and card 2 spans 8–12, second row card 3 spans 1–5 and card 4 spans 6–12 (the asymmetry keeps it from looking like a template). Each card: eyebrow "01 · Enter", H3 24px, one-line promise 16px, four deliverables as a 14px list with 1px hairlines, tertiary link. Card height 320px. Mobile: four full-width cards, deliverables show 3 with the fourth behind "+1".

**5 Noise (dark band).** Desktop: ink background, 112px padding. Eyebrow orange; H2 "International brands. Local execution." at 44px paper; columns 1–6 hold the ledger (five rows: Client, Challenge, Role, Execution, Outcome; labels 12px uppercase muted, values 16px paper, 1px white/10 hairlines, 20px row padding); columns 7–12 hold a product image (4:5, 12px radius) with three fact chips beneath (ink-2 fill, 13px). Secondary button "Read the full case". Mobile: H2, ledger, then image at 16:10, chips stacked.

**6 Selected work.** Desktop: H2; three cards columns 1–4, 5–8, 9–12; each card: client name 24px, three ledger rows (Challenge, Role, Outcome), 260px tall. Mobile: horizontal snap-scroll, 85% width cards, 16px gap, scroll hint.

**7 How we work.** Desktop: H2; horizontal timeline: a 2px line across 12 columns with three nodes at 0%, 33%, 66%; below each node the phase label (12px orange), title 24px, body 16px. 64px gap, then three engagement-model cards in columns 1–4, 5–8, 9–12 with title, body and a 13px "Best for" line. Primary button centred beneath. Mobile: vertical timeline with the line at 16px left and nodes; model cards stacked.

**8 Why + team.** Desktop: H2; four reason blocks in one row (no cards; 1px top hairline each, H3 20px, body 15px). 80px gap; H3 "The team"; five 200px cards: 4:5 photo (grayscale at rest, colour on hover), name 16px/600, role 13px muted, LinkedIn glyph. Mobile: reasons 2×2; team horizontal scroll at 160px cards.

**9 Platforms.** Desktop: caption 12px; seven monochrome logos in one row; retail line 14px muted centred beneath. 100px section. Mobile: logos 4 + 3.

**10 FAQ.** Desktop: H2 left in columns 1–4, accordion in columns 5–12 (760px), each item 18px/600 question with plus/minus glyph, 16px answer, 1px hairlines. Mobile: H2 then accordion full-width.

**11 Contact (dark band).** Desktop: H2 44px paper, sub 18px; columns 1–6: form (inputs ink-2 fill, 1px white/15 border, 48px tall, 6px radius, labels 13px), select, optional phone, primary button, promise line 13px; columns 7–12: booking embed in a 12px-radius ink-2 frame 520px tall with the "Book a 30-minute call" title; below both, a row of four contact items (WhatsApp, email, phone, office) at 14px with glyphs, then the licence line at 12px muted. Mobile: form first; a secondary full-width button "Book a call" toggles the embed; contact items stacked.

**12 Footer.** Paper, 1px top line, four columns (brand + address, Navigate, Services, Legal), 13px, 64px padding. Mobile: stacked.

**Mobile sticky bar.** 64px tall, paper/95 with 1px line, two equal buttons (secondary WhatsApp, primary Book a call), safe-area padding, appears once the hero's CTA row leaves the viewport.

---

## Performance and accessibility budget

- Route JS under 150KB gzipped: no framer-motion, GSAP, Lenis or canvas on this route. Reveal animation is 40 lines of IntersectionObserver.
- LCP element is the H1 text (self-hosted Inter with `font-display: swap` and a size-adjusted fallback), not an image. Target LCP under 2.0s on 4G, CLS under 0.05, INP under 200ms.
- Images: AVIF/WebP via `next/image`, explicit dimensions, lazy below the fold, the Noise product shot preloaded only when the band enters the viewport. No video.
- Booking embed loads on interaction (button click) rather than on page load; WhatsApp is a plain link.
- Every interactive element reachable by keyboard with visible focus; accordion uses `button` + `aria-expanded`; form labels are real labels; colour is never the only status indicator in the ledger (glyph shape differs).
- `prefers-reduced-motion` disables all transitions.
- Semantic landmarks (header, main, section with headings, footer) and JSON-LD for Organization, ProfessionalService, FAQPage and Person.

---

## Phase 7 — Final design and prototype

The recommended design is implemented as a working, responsive Next.js route in this repository at `/uae` (files under `app/uae/` and `components/uae/`). It uses the design system above, the final copy from Phase 4, the section order from Phase 3, and no third-party animation libraries. Placeholders that require your input are visibly marked in the prototype with a dotted orange outline and the label "Needs input" so nothing unverified can ship by accident.

Run it locally:

```bash
npm run dev
```

and open http://localhost:3000/uae.

**Before this page can go live, supply:**
1. Noise: permission, exact role, dates, any publishable outcome (2.7).
2. Laurastar, LADAZ, TechXR: one-line challenge, role and outcome each; permission to show logos; monochrome logo files for all six brands.
3. Which retailers you have actually listed products with (for the platforms line and the hero fact row).
4. Typical launch durations and the "30 days to first sale" figure, if it is to be used.
5. Engagement models and whether the distribution (stock-taking) model is offered.
6. Trade licence number, TRN and legal entity name for the footer.
7. Markets served beyond the UAE.
8. Team photos on a neutral background and LinkedIn URLs.
