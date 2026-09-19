'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  "Design",
  "Develop",
  "Deliver"
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <video
        className={styles.videoBg}
        autoPlay
        loop
        muted
        playsInline
        src="/videobg.webm"
      />
      <div className={styles.overlay} />
      
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={styles.textSlider}>
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlide}
              className={styles.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {slides[currentSlide]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
