'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './FAQ.module.css';


const FAQS = [
  {
    q: 'What do you specialize in?',
    a: `I’m a Web Designer with 6+ years of experience, focused on creating modern, responsive, and user-friendly websites. My work combines UI design, front-end development, and platforms like WordPress and Shopify.`,
  },
  {
    q: 'What tools and technologies do you work with?',
    a: `I work with Figma, HTML, CSS, JavaScript, jQuery, Bootstrap, WordPress, Shopify, and Next.js, with a strong focus on responsive design and clean implementation.`,
  },
  {
    q: 'What is your approach to web design?',
    a: `I focus on creating designs that are visually clean, easy to use, and responsive across different devices. I also pay attention to usability, performance, consistency, and the overall user experience.`,
  },
  {
    q: 'What are you looking for in your next opportunity?',
    a: `I’m looking for an opportunity where I can contribute my design and development skills, work on meaningful digital projects, learn new technologies, and continue growing as a Web Designer.`,
  },
];

function FAQItem({ index, question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ''}`}>
      <button
        className={styles.trigger}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        id={`faq-item-${index + 1}`}
      >
        <div className={styles.triggerLeft}>
          <span className={styles.number}>{index + 1}</span>
          <span className={styles.question}>{question}</span>
        </div>
        <span className={`${styles.icon} ${open ? styles.iconOpen : ''}`} aria-hidden="true">
          +
        </span>
      </button>

      <div
        className={styles.panel}
        style={{ maxHeight: open ? '300px' : '0px' }}
        aria-hidden={!open}
      >
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <motion.section 
      className={styles.section} 
      aria-label="Frequently asked questions"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.inner}>

        {/* ── Left column ─────────────────────────────── */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true">✦</span>
            FAQ
          </p>

          <h2 className={styles.heading}>
            Answered<br />questions.
          </h2>

          <p className={styles.sub}>
            Everything you might want to know—up front.
          </p>

          <div className={styles.accordion} role="list">
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                question={faq.q}
                answer={faq.a}
              />
            ))}
          </div>
        </div>

        {/* ── Right column — image ─────────────────────── */}
        <div className={styles.imageWrap}>
          <Image
            src="/faq-image.webp"
            alt="Artfolio Portfolio Website portrait"
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 45vw"
            priority
          />
        </div>

      </div>
    </motion.section>
  );
}
