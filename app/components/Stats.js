'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Stats.module.css';
import { motion } from 'framer-motion';

const STATS = [

  {
    prefix: '',
    value: 75,
    suffix: '+',
    label: 'Projects Completed',
    footnote: '',
  },
  {
    prefix: '',
    value: 6,
    suffix: '+',
    label: 'Years of Experience',
    footnote: null,
  },
  {
    prefix: '',
    value: 3,
    suffix: '',
    label: "Companies Worked With",
    footnote: '',
  },
];

const FOOTNOTES = [
  '1 – Project numbers are approximate and include work completed across different companies. Figures may vary over time.',
  // '2 – Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo.',
];

/* ── Animated counter hook ───────────────────────── */
function useCountUp(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

/* ── Single stat card ────────────────────────────── */
function StatCard({ prefix, value, suffix, label, footnote, started, delay }) {
  const count = useCountUp(value, 1800, started);
  const lines = label.split('\n');

  return (
    <div className={styles.card} style={{ transitionDelay: `${delay}ms` }}>
      <div className={`${styles.number} ${started ? styles.numberVisible : ''}`}>
        {prefix}
        {count}
        {suffix}
        {footnote && <sup className={styles.sup}>{footnote}</sup>}
      </div>
      <p className={styles.label}>
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  );
}

/* ── Stats section ───────────────────────────────── */
export default function Stats() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className={styles.section}
      aria-label="Studio statistics"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.inner}>

        {/* Stat cards */}
        <div className={styles.grid}>
          {STATS.map((stat, i) => (
            <StatCard key={i} {...stat} started={started} delay={i * 120} />
          ))}
        </div>

        {/* Divider */}
        <div className={styles.hr} role="separator" />

        {/* Footnotes */}
        <div className={styles.footnotes}>
          {FOOTNOTES.map((note, i) => (
            <p key={i} className={styles.footnote}>{note}</p>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
