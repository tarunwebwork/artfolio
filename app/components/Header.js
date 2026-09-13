'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        {/* Left: Logo + Barcode + tagline */}
        <div className={styles.brand}>
          <span className={styles.logoMark}>Artfolio<sup>®</sup></span>
          <div className={styles.divider} />
          <div className={styles.barcodeWrap}>
            {/* Barcode SVG stripes */}
            <svg
              className={styles.barcode}
              viewBox="0 0 60 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Varying-width bars to look like a real barcode */}
              <rect x="0" width="2" height="28" fill="currentColor" />
              <rect x="4" width="1" height="28" fill="currentColor" />
              <rect x="7" width="3" height="28" fill="currentColor" />
              <rect x="12" width="1" height="28" fill="currentColor" />
              <rect x="15" width="2" height="28" fill="currentColor" />
              <rect x="19" width="1" height="28" fill="currentColor" />
              <rect x="22" width="3" height="28" fill="currentColor" />
              <rect x="27" width="1" height="28" fill="currentColor" />
              <rect x="30" width="2" height="28" fill="currentColor" />
              <rect x="34" width="1" height="28" fill="currentColor" />
              <rect x="37" width="3" height="28" fill="currentColor" />
              <rect x="42" width="1" height="28" fill="currentColor" />
              <rect x="45" width="2" height="28" fill="currentColor" />
              <rect x="49" width="1" height="28" fill="currentColor" />
              <rect x="52" width="3" height="28" fill="currentColor" />
              <rect x="57" width="1" height="28" fill="currentColor" />
              <rect x="60" width="2" height="28" fill="currentColor" />
            </svg>
          </div>
          <div className={styles.divider} />
          <span className={styles.tagline}>Portfolio Website</span>
        </div>

        {/* Right: Nav links + hamburger */}
        <nav className={styles.nav} aria-label="Primary navigation">
          <Link href="#home" className={styles.navLink} id="nav-home">Home</Link>
          <Link href="#about" className={styles.navLink} id="nav-about">About</Link>
          <Link href="#portfolio" className={styles.navLinkBadge} id="nav-portfolio">
            Portfolio
          </Link>
          <Link href="#services" className={styles.navLink} id="nav-services">Services</Link>
          <Link href="#contact" className={styles.navLink} id="nav-contact">Contact</Link>

          {/* Hamburger / menu icon */}
          <button
            id="menu-toggle"
            className={styles.menuToggle}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className={styles.menuBar} />
            <span className={`${styles.menuBar} ${styles.menuBarShort}`} />
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`} aria-hidden={!menuOpen}>
        <Link href="#home" className={styles.drawerLink} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="#about" className={styles.drawerLink} onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="#portfolio" className={styles.drawerLink} onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link href="#services" className={styles.drawerLink} onClick={() => setMenuOpen(false)}>Services</Link>
        <Link href="#contact" className={styles.drawerLink} onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </header>
  );
}
