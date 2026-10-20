'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

export const WHATSAPP_URL =
  "https://wa.me/971585717283?text=Hi%20Raha%20Partners%2C%20we're%20a%20consumer%20brand%20looking%20at%20the%20UAE.%20Can%20we%20talk%3F";
export const BOOKING_URL = 'https://calendar.app.google/gWSCEHNpq7X7drDC6';

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.4-4.2a8.5 8.5 0 1 1 15.6-4.6Z" />
      <path d="M9.2 8.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .4-.1.5l-.5.6c-.1.1-.2.3 0 .5a6 6 0 0 0 2.9 2.6c.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.5-.1l1.6.8c.2.1.3.2.3.4 0 .9-.6 1.8-1.7 1.9-1 .1-2.6-.4-4.3-2-1.7-1.6-2.4-3.2-2.4-4.3 0-.6.2-1.1.6-1.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ---------- Navigation ---------- */
const LINKS = [
  ['#what-we-do', 'What we do'],
  ['#work', 'Work'],
  ['#how-we-work', 'How we work'],
  ['#team', 'Team'],
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className={`nav${solid ? ' solid' : ''}`}>
        <div className="container">
          <a href="#top" className="brand" aria-label="Raha Partners">
            <i /> Raha Partners
          </a>
          <nav className="nav-links" aria-label="Primary">
            {LINKS.map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <a className="icon-btn" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Raha Partners">
              <WhatsAppIcon />
            </a>
            <a className="btn btn-primary btn-sm" href="#contact">
              Book a call
            </a>
            <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
              <span />
            </button>
          </div>
        </div>
      </header>
      {open && (
        <div className="menu" role="dialog" aria-modal="true" aria-label="Menu">
          <button className="close" aria-label="Close menu" onClick={() => setOpen(false)}>
            ×
          </button>
          <nav>
            {LINKS.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <div className="actions">
            <a className="btn btn-secondary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> WhatsApp us
            </a>
            <a className="btn btn-primary" href="#contact" onClick={() => setOpen(false)}>
              Plan your UAE launch
            </a>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- Reveal on scroll ---------- */
export function Reveal({ children, className = '', as: Tag = 'div', delay = 0 }: { children: ReactNode; className?: string; as?: 'div' | 'section' | 'li' | 'article'; delay?: number }) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.classList.add('in');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as 'div';
  return (
    <Comp ref={ref as never} className={`${className} reveal${inView ? ' in' : ''}`.trim()} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Comp>
  );
}

/* ---------- FAQ ---------- */
export function Faq({ items }: { items: { q: string; a: string; needs?: boolean }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className="qa" key={item.q} data-open={isOpen}>
            <button aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpenIndex(isOpen ? null : i)}>
              <span>{item.q}</span>
              <span className="glyph" aria-hidden="true">
                +
              </span>
            </button>
            <div className="answer" id={`faq-${i}`}>
              <div>
                <p className={item.needs ? 'needs' : undefined}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Contact form ---------- */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="success" role="status">
        <strong>Thanks. You&apos;ll hear from us within one business day.</strong>
        <p className="promise">Prototype only: no message was sent. Wire this form to your CRM or email before launch.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="email">Work email</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" required autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="stage">Where are you today?</label>
        <select id="stage" name="stage" defaultValue="entering">
          <option value="entering">Entering the UAE</option>
          <option value="selling">Already selling in the UAE</option>
          <option value="gcc">Exploring the GCC</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="phone">Phone (optional)</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <button className="btn btn-primary" type="submit">
        Send
      </button>
      <p className="promise">We reply within one business day with a short assessment and a proposed call.</p>
    </form>
  );
}

/* ---------- Timeline (draws the progress line on scroll) ---------- */
export function Timeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`timeline${inView ? ' in' : ''}`}>
      {children}
    </div>
  );
}

/* ---------- Mobile sticky bar ---------- */
export function StickyBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.getElementById('hero-cta');
    if (!hero) return;
    const io = new IntersectionObserver((entries) => setShow(!entries[0].isIntersecting), { threshold: 0 });
    io.observe(hero);
    return () => io.disconnect();
  }, []);
  return (
    <div className={`sticky${show ? ' show' : ''}`} aria-hidden={!show}>
      <a className="btn btn-secondary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon /> WhatsApp
      </a>
      <a className="btn btn-primary" href="#contact">
        Book a call
      </a>
    </div>
  );
}
