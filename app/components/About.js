'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import styles from './About.module.css';

export default function About() {
  return (
    <motion.section 
      id="about" 
      className={styles.section} 
      aria-label="About us section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.inner}>

        {/* ── Left Column (Image & Quote) ──────────────── */}
        <div className={styles.left}>
          <div className={styles.imageWrap}>
            <Image
              src="/about-gradient.png"
              alt="Abstract gradient background"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.quoteCard}>
              <p className={styles.quoteText}>
                {"\"Great websites don’t happen by accident. They come from thoughtful design, clean development, attention to detail, and a focus on creating experiences that simply work.\""}
              </p>
            </div>
          </div>
        </div>

        {/* ── Right Column (Content) ───────────────────── */}
        <div className={styles.right}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true">✦</span>
            ABOUT ME
          </p>

          <h2 className={styles.heading}>
            Transforming ideas into high-performing digital experiences.
          </h2>

          <div className={styles.description}>
            <p>
              I come from a commerce background with no formal tech degree, but my interest in design and technology led me to a completely different path.</p>

            <br />
            <p>
              I started my journey by learning web design at Arena Animation, where I built the foundation that shaped my career. What started as curiosity soon became a profession.
            </p>
            <br />
            <p>
              Today, with 6+ years of experience, I create modern, responsive, and user-focused websites that bring ideas to life.
            </p>
          </div>

          {/* <Link href="/about" className={styles.ctaBtn}>
            More about me
            <span className={styles.ctaDot} aria-hidden="true" />
          </Link> */}
        </div>

      </div>
    </motion.section >
  );
}
