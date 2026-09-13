'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const NAV_COLUMNS = [
  {
    heading: 'Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Studio', href: '/studio' },
      { label: 'Work Item', href: '/work' },
    ],
  },
  {
    heading: null,
    links: [
      { label: 'Works 1', href: '/work/1' },
      { label: 'Works 2', href: '/work/2' },
      { label: 'Works 3', href: '/work/3' },
    ],
  },
  {
    heading: null,
    links: [
      { label: 'Blog 1', href: '/blog/1', accent: true },
      { label: 'Blog 2', href: '/blog/2' },
      { label: 'Blog 3', href: '/blog/3' },
    ],
  },
  {
    heading: null,
    links: [
      { label: 'Contact 1', href: '/contact' },
      { label: 'Contact 2', href: '/contact' },
      { label: 'Contact 3', href: '/contact' },
    ],
  },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];

/* ── Social icons ─────────────────────────────────── */
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.25 2.25h6.977l4.259 5.638 4.758-5.638Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function IconDribbble() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M8.6 2.7C10 6.4 11.5 9.6 14.5 13M2.1 10.5c3.5.5 7 .4 10.5-.5M15.5 21.8c-1-4-2-7-5-11" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.inner}>

        {/* ── Top row ───────────────────────────────── */}
        <div className={styles.top}>

          {/* Left: nav columns */}
          <nav className={styles.navGrid} aria-label="Footer navigation">
            {NAV_COLUMNS.map((col, i) => (
              <div key={i} className={styles.navCol}>
                {col.heading && (
                  <span className={styles.colHeading}>{col.heading}</span>
                )}
                {col.links.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className={`${styles.navLink} ${link.accent ? styles.navLinkAccent : ''}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>

          {/* Right: social icons + newsletter */}
          <div className={styles.right}>
            {/* Social icons – top-right corner */}
            <div className={styles.socialRow}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className={styles.socialLink} aria-label="Instagram" id="footer-instagram">
                <IconInstagram />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer"
                className={styles.socialLink} aria-label="X (Twitter)" id="footer-x">
                <IconX />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer"
                className={styles.socialLink} aria-label="Dribbble" id="footer-dribbble">
                <IconDribbble />
              </a>
            </div>

            {/* Newsletter */}
            <div className={styles.newsletter}>
              <p className={styles.newsletterLabel}>Join the newsletter</p>
              {subscribed ? (
                <p className={styles.successMsg}>Thanks for subscribing! ✦</p>
              ) : (
                <form className={styles.newsletterForm} onSubmit={handleSubscribe} noValidate>
                  <input
                    id="footer-email"
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.emailInput}
                    aria-label="Email address"
                    required
                  />
                  <button type="submit" className={styles.subscribeBtn} id="footer-subscribe">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── Divider ───────────────────────────────── */}
        <div className={styles.hr} role="separator" />

        {/* ── Bottom bar ────────────────────────────── */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <span>© 2025 Artfolio</span>
            <span className={styles.dot}>·</span>
            <span>Designed & Developed by <a href="#" target="_blank"
              rel="noopener noreferrer" className={styles.poweredLink}>Tarun Sharma</a></span>
          </div>

          <nav className={styles.legalNav} aria-label="Legal links">
            {LEGAL_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={styles.legalLink}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  );
}
