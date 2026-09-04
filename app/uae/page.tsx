import type { Metadata } from 'next';
import Image from 'next/image';
import './uae.css';
import { Nav, Reveal, Faq, ContactForm, Timeline, StickyBar, WhatsAppIcon, WHATSAPP_URL, BOOKING_URL } from '@/components/uae/Interactive';

export const metadata: Metadata = {
  title: 'UAE Market Entry & Ecommerce Partner for Consumer Brands | Raha Partners',
  description:
    'Raha Partners launches and operates consumer brands in the UAE: Shopify storefronts, Amazon.ae & Noon operations, performance marketing and retail distribution. Dubai-based.',
  alternates: { canonical: 'https://rahapartners.com/uae' },
  openGraph: {
    title: 'We launch and run consumer brands in the UAE | Raha Partners',
    description: 'One Dubai team for regulatory clearance, Shopify, Amazon.ae and Noon operations, performance marketing and retail distribution.',
    locale: 'en_AE',
    type: 'website',
  },
};

/* Inline marker for anything that must be confirmed before publishing. */
function Needs({ children, title = 'Confirm before publishing' }: { children: React.ReactNode; title?: string }) {
  return (
    <span className="needs" title={title}>
      {children}
    </span>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

const FAQ = [
  {
    q: 'How long does it take to start selling in the UAE?',
    a: 'With compliant products and stock available, marketplace listings can be live within weeks and a storefront within one to two months; the sequence depends on product registration. We give you a dated plan in the first two weeks.',
    needs: true,
  },
  {
    q: 'Do we need a UAE entity to sell on Amazon.ae and Noon?',
    a: 'Not always. Depending on category and volume, brands sell through a local partner, a consignment structure or their own entity. We recommend the structure after reviewing your category, margins and plans for retail.',
  },
  {
    q: 'Amazon.ae or Noon first?',
    a: 'Both matter: together with Carrefour they hold roughly half of UAE online retail. Amazon.ae tends to win search-led categories such as electronics, Noon wins frequency and quick delivery. Most brands we work with launch on both within the same quarter.',
  },
  {
    q: 'What does product registration and labelling involve?',
    a: 'Category-specific registration with the relevant authority, Arabic and English labelling, and conformity documents for import. Electronics, cosmetics and food each follow different paths; we run the process and the paperwork.',
  },
  {
    q: 'Do you buy stock or work on a fee?',
    a: 'Both models exist. Most engagements are retained operations on a fee with performance-linked terms; for selected categories we take stock and margin as a distributor.',
    needs: true,
  },
  {
    q: 'Can you take over an existing store and marketplace accounts?',
    a: 'Yes. We audit the storefront, listings, advertising and logistics, then either fix specific gaps as a project or run the channels on a retainer.',
  },
  {
    q: 'Do you cover Saudi Arabia and the rest of the GCC?',
    a: 'The UAE is our operating base. We extend to Saudi Arabia and other GCC markets once the UAE channel is performing.',
    needs: true,
  },
];

const TEAM = [
  { name: 'Talal Aziz', role: 'Head of Operations', img: '/images/talal-pp.jpeg' },
  { name: 'Faiz Mohammed Khan', role: 'Digital Solution Architect', img: '/images/faiz-pp.jpeg' },
  { name: 'Zeeshan Ali', role: 'Head of International Business', img: '/images/zeeshan-pp.jpeg' },
  { name: 'Carol Rodrigues', role: 'Head of Admin', img: '/images/carol-pp.png' },
  { name: 'Mohammed Ayub', role: 'Investor & Advisor', img: '/images/ayub-pp.jpeg' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': 'https://rahapartners.com/#org',
      name: 'Raha Partners',
      url: 'https://rahapartners.com/',
      email: 'info@rahapartners.com',
      telephone: '+971585717283',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2001 Grosvenor Business Tower, Barsha Heights',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
      areaServed: ['AE', 'SA', 'GCC'],
      sameAs: ['https://www.linkedin.com/company/raha-partners'],
      description:
        'Raha Partners launches and operates consumer brands in the UAE: regulatory clearance, Shopify storefronts, Amazon.ae and Noon operations, performance marketing and retail distribution.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
};

export default function UaeLandingPage() {
  return (
    <div className="uae" id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <main>
        {/* 1. Hero */}
        <section className="hero" aria-labelledby="h1">
          <div className="container grid">
            <div className="copy">
              <Reveal>
                <span className="eyebrow">Dubai · UAE &amp; GCC · Consumer brands</span>
                <h1 id="h1">We launch and run consumer brands in the UAE.</h1>
              </Reveal>
              <Reveal delay={80}>
                <p className="lead">
                  One Dubai team for regulatory clearance, your Shopify storefront, Amazon.ae and Noon operations, performance marketing and retail distribution. From first listing to repeat orders.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <div className="cta-row" id="hero-cta">
                  <a className="btn btn-primary" href="#contact">
                    Plan your UAE launch <Arrow />
                  </a>
                  <a className="btn btn-secondary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon /> WhatsApp us
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal className="aside" delay={200}>
              <div className="card ledger-card" aria-label="One brand, every channel">
                <div className="head">
                  <strong>One brand. Every channel.</strong>
                  <span className="small muted">Launch ledger</span>
                </div>
                <ul className="ledger">
                  {[
                    ['Product registration & labelling', 'Cleared', 'done'],
                    ['Shopify storefront', 'Built', 'done'],
                    ['Amazon.ae', 'Live', 'live'],
                    ['Noon', 'Live', 'live'],
                    ['Retail listings', 'Onboarding', 'done'],
                    ['Performance campaigns', 'Running', 'live'],
                  ].map(([label, status, kind]) => (
                    <li key={label}>
                      <span className="value">{label}</span>
                      <span className="status">
                        <i className={`tick ${kind}`} aria-hidden="true">
                          {kind === 'done' ? (
                            <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M1.5 5.5l2.3 2.3L8.5 2.5" />
                            </svg>
                          ) : (
                            <svg width="6" height="6" viewBox="0 0 6 6">
                              <circle cx="3" cy="3" r="3" fill="#fff" />
                            </svg>
                          )}
                        </i>
                        {status}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="foot">The stack we set up and operate for a brand entering the UAE.</p>
              </div>
            </Reveal>
          </div>
          <div className="container">
            <Reveal delay={240}>
              <div className="facts" aria-label="Facts">
                <span>Dubai-registered operator</span>
                <span>Amazon.ae &amp; Noon seller operations</span>
                <span>Shopify storefronts</span>
                <span>Retail &amp; distribution</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 2. Router + client strip */}
        <section className="proof" aria-label="Who we work with">
          <div className="container">
            <div className="router">
              <a className="pill" href="#what-we-do">
                Entering the UAE <Arrow />
              </a>
              <a className="pill" href="#sell-online">
                Already selling here <Arrow />
              </a>
            </div>
            <p className="caption">Brands we have launched and operated in the UAE</p>
            <div className="logos" aria-label="Client brands">
              <Needs title="Confirm permission and supply logo file">
                <span className="logo">noise</span>
              </Needs>
              <Needs title="Confirm permission and supply logo file">
                <span className="logo wide">Laurastar</span>
              </Needs>
              <Needs title="Confirm permission and supply logo file">
                <span className="logo wide">LADAZ</span>
              </Needs>
              <Needs title="Confirm permission and supply logo file">
                <span className="logo">Platable</span>
              </Needs>
              <Needs title="Confirm permission and supply logo file">
                <span className="logo">TechXR</span>
              </Needs>
              <Needs title="Confirm permission and supply logo file">
                <span className="logo wide">OS Eyewear</span>
              </Needs>
            </div>
          </div>
        </section>

        {/* 3. Stakes */}
        <section aria-labelledby="stakes">
          <div className="container">
            <Reveal className="section-head">
              <h2 id="stakes">Entering the UAE is easy. Selling here is not.</h2>
              <p className="lead intro">Registering a company takes days. Getting a product cleared, listed, ranked, stocked and reordered takes an operator. Three places brands stall:</p>
            </Reveal>
            <div className="stakes-grid">
              {[
                {
                  t: 'The border.',
                  p: 'Product registration, Arabic labelling, conformity and import documents stop more launches than pricing does.',
                  icon: <path d="M3 12h18M12 3v18M5 5l14 14" />,
                },
                {
                  t: 'The marketplaces.',
                  p: 'Amazon.ae and Noon are roughly half of UAE online retail. They reward sellers who manage content, ads, stock and reviews every day, not once at launch.',
                  icon: <path d="M4 6h16l-1.5 9h-13L4 6Zm3 13a1 1 0 1 0 0 .1M17 19a1 1 0 1 0 0 .1" />,
                },
                {
                  t: 'The shelf.',
                  p: 'Carrefour, Lulu, Virgin and Sharaf DG want a local partner who handles supply, returns and promotion. A brand store alone does not get you listed.',
                  icon: <path d="M3 9h18v11H3zM3 9l2-5h14l2 5M9 14h6" />,
                },
              ].map((c, i) => (
                <Reveal key={c.t} className="card" delay={i * 60}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {c.icon}
                  </svg>
                  <h3>{c.t}</h3>
                  <p>{c.p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="closing">We take brands from cleared to sold, not just listed.</p>
            </Reveal>
          </div>
        </section>

        {/* 4. What we do */}
        <section id="what-we-do" aria-labelledby="wwd">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">What we do</span>
              <h2 id="wwd">From clearance to repeat orders</h2>
              <p className="lead intro">Four stages, one accountable team. Take the whole journey or the stage you are missing.</p>
            </Reveal>
            <div className="bento">
              <Reveal className="card lift">
                <div className="num">01 · Enter</div>
                <h3>Get your product legally sellable in the UAE.</h3>
                <p className="promise">Product registration, labelling, conformity and import paperwork, and the right commercial structure so you sell from day one, with or without a UAE entity.</p>
                <ul>
                  <li>Municipality and product registration</li>
                  <li>Arabic and English labelling and compliance</li>
                  <li>Import and customs coordination</li>
                  <li>
                    <Needs>Entity, distributor or consignment structure</Needs>
                  </li>
                </ul>
                <a className="link" href="#contact">
                  UAE market entry for consumer brands
                </a>
              </Reveal>
              <Reveal className="card lift" delay={60}>
                <div className="num" id="sell-online">
                  02 · Sell online
                </div>
                <h3>A storefront and marketplaces that convert.</h3>
                <p className="promise">A fast Shopify store built for UAE checkout habits, plus Amazon.ae and Noon accounts we set up and operate daily.</p>
                <ul>
                  <li>Shopify design, build and speed</li>
                  <li>Amazon.ae and Noon setup and operations</li>
                  <li>Catalogue, A+ content, bilingual listings</li>
                  <li>Payments, shipping and 3PL integrations</li>
                </ul>
                <a className="link" href="#contact">
                  Shopify, Amazon.ae &amp; Noon operations
                </a>
              </Reveal>
              <Reveal className="card lift" delay={120}>
                <div className="num">03 · Grow demand</div>
                <h3>Acquisition that pays for itself.</h3>
                <p className="promise">Performance marketing across Google, Meta and TikTok, marketplace advertising, and the creators and reviews that move UAE shoppers.</p>
                <ul>
                  <li>Google Shopping, Meta and TikTok campaigns</li>
                  <li>Amazon and Noon sponsored ads</li>
                  <li>Search and generative-search optimisation</li>
                  <li>Influencer, affiliate and review programmes</li>
                </ul>
                <a className="link" href="#contact">
                  Performance marketing Dubai
                </a>
              </Reveal>
              <Reveal className="card lift" delay={180}>
                <div className="num">04 · Reach retail</div>
                <h3>From screens to shelves.</h3>
                <p className="promise">Channel strategy, retailer onboarding, warehousing and logistics, and in-store execution once online traction proves the demand.</p>
                <ul>
                  <li>Retailer and distributor onboarding</li>
                  <li>Warehousing, logistics and returns</li>
                  <li>In-store promoters, pop-ups and activations</li>
                  <li>
                    <Needs>GCC expansion: Saudi Arabia and beyond</Needs>
                  </li>
                </ul>
                <a className="link" href="#contact">
                  Retail distribution UAE
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 5. Featured engagement: Noise */}
        <section className="band feature" id="work" aria-labelledby="noise">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow accent">Featured engagement</span>
              <h2 id="noise">International brands. Local execution.</h2>
            </Reveal>
            <div className="grid">
              <Reveal className="ledger-wrap">
                <ul className="ledger">
                  <li>
                    <span className="label">Client</span>
                    <span className="value">
                      <strong>Noise.</strong> India&apos;s number-one smartwatch brand (26.6% share, IDC 2025), backed by Bose, with a Made-in-India range across smartwatches, earbuds and the Luna smart ring.
                    </span>
                  </li>
                  <li>
                    <span className="label">Challenge</span>
                    <span className="value">
                      <Needs>Establish and grow Noise&apos;s ecommerce presence in the UAE as part of its first international expansion, in a market where Amazon.ae and Noon set the terms.</Needs>
                    </span>
                  </li>
                  <li>
                    <span className="label">Role</span>
                    <span className="value">
                      <Needs title="Previously published by Raha; confirm each item">GCC ecommerce playbook, marketplace operations on Amazon.ae and Noon, content and listing strategy, performance marketing.</Needs>
                    </span>
                  </li>
                  <li>
                    <span className="label">Execution</span>
                    <span className="value">
                      <Needs>Seller account setup, catalogue and A+ content, pricing and promotion calendar, sponsored ads, review and rating management, stock and fulfilment coordination.</Needs>
                    </span>
                  </li>
                  <li>
                    <span className="label">Outcome</span>
                    <span className="value">
                      <Needs title="Supply verified outcome or use the fallback line">Live on Amazon.ae and Noon since [month year]; engagement ongoing.</Needs>
                    </span>
                  </li>
                </ul>
                <div className="cta-row">
                  <a className="btn btn-secondary" href="#contact">
                    Read the full case <Arrow />
                  </a>
                </div>
              </Reveal>
              <Reveal className="visual" delay={100}>
                <Image src="/images/noise.webp" alt="Noise Master series headphones" width={1200} height={900} sizes="(max-width: 1024px) 100vw, 480px" />
                <div className="chips">
                  <span className="chip">#1 smartwatch brand in India (IDC, CY2025)</span>
                  <span className="chip">Bose-backed since 2023</span>
                  <span className="chip">GCC entry March 2025</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 6. Selected work */}
        <section aria-labelledby="work-h">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">Selected work</span>
              <h2 id="work-h">Brands we have taken to market</h2>
            </Reveal>
            <div className="work-grid">
              {[
                {
                  name: 'Laurastar',
                  challenge: 'Swiss premium garment-care appliances with no GCC presence.',
                  role: 'Distribution infrastructure, retail partnerships, marketplace and retail coverage across the UAE.',
                  outcome: 'Outcome to be supplied.',
                  needs: ['role', 'outcome'],
                },
                { name: 'LADAZ', challenge: 'Challenge to be supplied.', role: 'Role to be supplied.', outcome: 'Outcome to be supplied.', needs: ['challenge', 'role', 'outcome'] },
                { name: 'TechXR', challenge: 'Challenge to be supplied.', role: 'Role to be supplied.', outcome: 'Outcome to be supplied.', needs: ['challenge', 'role', 'outcome'] },
              ].map((w, i) => (
                <Reveal key={w.name} className="card" delay={i * 60}>
                  <h3>{w.name}</h3>
                  <ul className="ledger">
                    <li>
                      <span className="label">Challenge</span>
                      <span className="value">{w.needs.includes('challenge') ? <Needs>{w.challenge}</Needs> : w.challenge}</span>
                    </li>
                    <li>
                      <span className="label">Role</span>
                      <span className="value">{w.needs.includes('role') ? <Needs>{w.role}</Needs> : w.role}</span>
                    </li>
                    <li>
                      <span className="label">Outcome</span>
                      <span className="value">{w.needs.includes('outcome') ? <Needs>{w.outcome}</Needs> : w.outcome}</span>
                    </li>
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 7. How we work */}
        <section id="how-we-work" aria-labelledby="hww">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">How we work</span>
              <h2 id="hww">How an engagement runs</h2>
            </Reveal>
            <Timeline>
              <div className="phase">
                <div className="when">Weeks 0–2</div>
                <h3>Diagnose and plan</h3>
                <p>Category and pricing review, channel plan, compliance checklist, launch timeline and a commercial model you sign off before anything is built.</p>
              </div>
              <div className="phase">
                <div className="when">
                  <Needs>Weeks 2–8</Needs>
                </div>
                <h3>Build and list</h3>
                <p>Registration and labelling, storefront build, marketplace accounts, catalogue and content, logistics set-up, campaign build.</p>
              </div>
              <div className="phase">
                <div className="when">Week 8 onward</div>
                <h3>Operate and scale</h3>
                <p>Daily marketplace operations, campaigns, stock and returns, retailer onboarding, monthly reporting against the plan.</p>
              </div>
            </Timeline>
            <div className="models">
              <Reveal className="card">
                <h3>Retained operator</h3>
                <p>We run your UAE channels end to end on a monthly retainer with performance-linked terms.</p>
                <div className="best">Best for brands entering the market or scaling past a single channel.</div>
              </Reveal>
              <Reveal className="card" delay={60}>
                <h3>Project build</h3>
                <p>A defined scope: storefront, marketplace launch or compliance package. Fixed timeline, fixed price.</p>
                <div className="best">Best for brands with an in-house team that needs one piece done properly.</div>
              </Reveal>
              <Reveal className="card" delay={120}>
                <h3>
                  <Needs title="Confirm this model is offered">Distribution partnership</Needs>
                </h3>
                <p>For selected categories we take stock and margin and sell into retail and marketplaces ourselves.</p>
                <div className="best">Best for proven products that want a local partner with skin in the game.</div>
              </Reveal>
            </div>
            <div className="center">
              <a className="btn btn-primary" href="#contact">
                Plan your UAE launch <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* 8. Why + team */}
        <section id="team" aria-labelledby="why">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow">Why Raha Partners</span>
              <h2 id="why">Why brands choose a Dubai operator</h2>
            </Reveal>
            <div className="reasons">
              {[
                ['One accountable team.', 'Store, marketplaces, marketing and distribution are run by the same people, so nothing falls between an agency, an enabler and a distributor.'],
                ['We operate, we don’t hand over.', 'Seller accounts, stock, returns and retailer relationships stay managed after launch.'],
                ['Built for this market.', 'Arabic and English listings, UAE payment habits, Noon and Amazon.ae playbooks, and relationships with the retailers that matter.'],
                ['Priced on outcomes.', 'Retainers with performance-linked terms and no lock-in beyond the agreed launch period.'],
              ].map(([t, p], i) => (
                <Reveal key={t} delay={i * 50}>
                  <h3>{t}</h3>
                  <p>{i === 3 ? <Needs title="Confirm commercial terms">{p}</Needs> : p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <h3 style={{ marginTop: 80 }}>The team</h3>
              <div className="team">
                {TEAM.map((m) => (
                  <div className="member" key={m.name}>
                    <Image src={m.img} alt={m.name} width={400} height={500} sizes="(max-width: 768px) 160px, 220px" />
                    <strong>{m.name}</strong>
                    <span>{m.role}</span>
                    <a href="https://www.linkedin.com/company/raha-partners" target="_blank" rel="noopener noreferrer">
                      LinkedIn <Arrow />
                    </a>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 9. Platforms */}
        <section className="platforms" aria-label="Platforms and channels">
          <div className="container">
            <p className="caption">Platforms and channels we operate</p>
            <div className="platform-row">
              {['Shopify', 'amazon.ae', 'noon', 'Carrefour', 'Google', 'Meta', 'TikTok'].map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
            <p className="retail-line">
              <Needs title="List only retailers you have listed products with">Retail partners include Carrefour and others across the UAE.</Needs>
            </p>
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="faq" aria-labelledby="faq-h">
          <div className="container grid">
            <h2 id="faq-h">Questions brands ask before entering the UAE</h2>
            <Faq items={FAQ} />
          </div>
        </section>

        {/* 11. Contact */}
        <section className="band contact" id="contact" aria-labelledby="contact-h">
          <div className="container">
            <Reveal className="section-head">
              <span className="eyebrow accent">Get started</span>
              <h2 id="contact-h">Plan your UAE launch</h2>
              <p className="lead intro">Tell us what you sell and where you are today. We reply within one business day with a short assessment and a proposed call.</p>
            </Reveal>
            <div className="grid">
              <div className="form">
                <ContactForm />
              </div>
              <div className="book">
                <div className="card">
                  <div>
                    <strong style={{ fontSize: 18 }}>Book a 30-minute call</strong>
                    <p className="muted" style={{ fontSize: 14, marginTop: 6 }}>
                      Pick a time that suits you. Calls are with a member of the operating team, not a sales rep.
                    </p>
                  </div>
                  <div className="slots" aria-hidden="true">
                    {['Sun 10:00', 'Mon 14:30', 'Tue 11:00', 'Wed 16:00', 'Thu 09:30', 'More…'].map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Open the calendar <Arrow />
                  </a>
                  <p className="small muted">Prototype: replace with the embedded appointment schedule on launch.</p>
                </div>
              </div>
            </div>
            <div className="contact-items">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <span className="k">WhatsApp</span>
                <span className="v">+971 58 571 7283</span>
              </a>
              <a href="mailto:info@rahapartners.com">
                <span className="k">Email</span>
                <span className="v">info@rahapartners.com</span>
              </a>
              <a href="tel:+971585717283">
                <span className="k">Phone</span>
                <span className="v">+971 58 571 7283</span>
              </a>
              <div>
                <span className="k">Office</span>
                <span className="v">2001 Grosvenor Business Tower, Barsha Heights, Dubai</span>
              </div>
            </div>
            <p className="licence">
              <Needs title="Supply legal entity, licence number and TRN">Raha Partners [legal entity] · Trade licence no. [ ] · TRN [ ]</Needs>
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="grid">
            <div>
              <span className="brand">
                <i /> Raha Partners
              </span>
              <p style={{ marginTop: 12 }}>We launch and run consumer brands in the UAE.</p>
              <p className="muted" style={{ marginTop: 8 }}>
                Barsha Heights, Dubai, UAE
              </p>
            </div>
            <div>
              <span className="k">Navigate</span>
              <ul>
                <li>
                  <a href="#what-we-do">What we do</a>
                </li>
                <li>
                  <a href="#work">Work</a>
                </li>
                <li>
                  <a href="#how-we-work">How we work</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
              </ul>
            </div>
            <div>
              <span className="k">Services</span>
              <ul>
                <li>
                  <a href="#what-we-do">UAE market entry for consumer brands</a>
                </li>
                <li>
                  <a href="#sell-online">Shopify development Dubai</a>
                </li>
                <li>
                  <a href="#sell-online">Amazon.ae &amp; Noon operations</a>
                </li>
                <li>
                  <a href="#what-we-do">Performance marketing Dubai</a>
                </li>
                <li>
                  <a href="#what-we-do">Retail distribution UAE</a>
                </li>
              </ul>
            </div>
            <div>
              <span className="k">Contact</span>
              <ul>
                <li>
                  <a href="mailto:info@rahapartners.com">info@rahapartners.com</a>
                </li>
                <li>
                  <a href="tel:+971585717283">+971 58 571 7283</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/raha-partners" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="legal">
            <span>© 2026 Raha Partners. All rights reserved.</span>
            <span>Dotted outlines mark content that needs confirmation before publishing.</span>
          </div>
        </div>
      </footer>

      <StickyBar />
    </div>
  );
}
