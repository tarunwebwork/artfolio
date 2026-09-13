'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

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
      
      <div className={styles.content}>
        <div className={styles.textSlider}>
          {slides.map((text, index) => (
            <h1
              key={index}
              className={`${styles.heading} ${index === currentSlide ? styles.active : ''}`}
            >
              {text}
            </h1>
          ))}
        </div>
      </div>
    </section>
  );
}
