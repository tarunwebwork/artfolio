'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import styles from './Contact.module.css';

const CONTACT_DETAILS = [
  {
    label: 'Email',
    value: 'sharmatarun5551@gmail.com',
    href: 'mailto:sharmatarun5551@gmail.com',
  },
  {
    label: 'Phone',
    value: '+91 (875) 058-0185',
    href: 'tel:+918750580185',
  },
  {
    label: 'Location',
    value: 'New Delhi, India',
    href: null,
  },
];

const SERVICES = ['Web Design', 'Figma Design', 'Logo Design', 'Social Media Creative', 'Figma to HTML', 'Other'];

export default function Contact() {
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  /* Mouse-tracked dot grid parallax */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, []);

  /* Entrance observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Form state */
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
      } else {
        setSent(true);
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      className={styles.section}
      aria-label="Contact section"
      style={{
        '--mx': `${mousePos.x}%`,
        '--my': `${mousePos.y}%`,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Dot-grid radial glow follows cursor */}
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.dotGrid} aria-hidden="true" />

      {/* Marquee ticker */}
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className={styles.tickerItem}>
              — MOVE YOUR MOUSE
            </span>
          ))}
        </div>
      </div>

      <div className={`${styles.inner} ${visible ? styles.innerVisible : ''}`}>

        {/* ── Left: contact details ───────────────────── */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Start a <br />
            conversation
          </h2>

          <a href="#contact-form" className={styles.ctaBtn} id="contact-get-in-touch">
            Get in touch
            <span className={styles.ctaArrow}>→</span>
          </a>

          <div className={styles.detailsGrid}>
            {CONTACT_DETAILS.map((item) => (
              <div key={item.label} className={styles.detailRow}>
                <span className={styles.detailLabel}>{item.label}</span>
                {item.href ? (
                  <a href={item.href} className={styles.detailValue}>
                    {item.value}
                  </a>
                ) : (
                  <span className={styles.detailValue}>
                    {item.value.split('\n').map((l, i) => (
                      <span key={i}>{l}<br /></span>
                    ))}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: form ─────────────────────────────── */}
        <div className={styles.right} id="contact-form">
          {sent ? (
            <div className={styles.successState}>
              <div className={styles.successIcon}>✦</div>
              <h3 className={styles.successTitle}>Message received.</h3>
              <p className={styles.successSub}>
                {"We'll be in touch within 24 hours."}
              </p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.formHeader}>
                <p className={styles.formEyebrow}>New project enquiry</p>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="cf-name">Full name</label>
                  <input
                    id="cf-name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={set('name')}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="cf-email">Email address</label>
                  <input
                    id="cf-email"
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={set('email')}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Service needed</label>
                <div className={styles.chips}>
                  {SERVICES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className={`${styles.chip} ${form.service === s ? styles.chipActive : ''}`}
                      onClick={() => setForm((f) => ({ ...f, service: s }))}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="cf-message">Tell us about your project</label>
                <textarea
                  id="cf-message"
                  placeholder="Describe your project, goals, timeline..."
                  value={form.message}
                  onChange={set('message')}
                  className={`${styles.input} ${styles.textarea}`}
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                id="cf-submit"
                disabled={loading}
              >
                {loading ? (
                  <span className={styles.spinner} aria-hidden="true" />
                ) : (
                  <>Send message <span className={styles.submitArrow}>→</span></>
                )}
              </button>

              {error && (
                <p className={styles.errorMsg} role="alert">{error}</p>
              )}
            </form>
          )}
        </div>

      </div>
    </motion.section>
  );
}
