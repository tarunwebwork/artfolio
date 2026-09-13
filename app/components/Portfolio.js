'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import styles from './Portfolio.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TABS = [
  { id: 'website', label: 'Website' },
  { id: 'figma', label: 'Figma' },
  { id: 'infographics', label: 'Infographics' },
  { id: 'logos', label: 'Logos' },
];

const PORTFOLIO_DATA = {
  website: [
    {
      id: 'w3',
      name: 'Muvro',
      tags: ['Next.js', 'Css', 'Strape'],
      year: '2026',
      status: 'Live',
      image: '/website/Muvro-Cover.webp',
      link: 'https://muvro.com/',
    },
    {
      id: 'w4',
      name: 'The Natura Soul',
      tags: ['Shopify'],
      year: '2025',
      status: 'Live',
      image: '/website/TheNaturaSoul-Cover.webp',
      link: 'https://www.thenaturasoul.com/',
    },
    {
      id: 'w2',
      name: 'Manishri',
      tags: ['WordPress', 'UI/UX', 'Elementor'],
      year: '2024',
      status: 'Live',
      image: '/website/Manishri-Web-Cover.webp',
      link: 'https://manishri.com/',
    },
    {
      id: 'w5',
      name: 'Inerrant Accounting',
      tags: ['Html', 'Css', 'Bootstrap'],
      year: '2023',
      status: 'Live',
      image: '/website/innerant-accounting-cover.webp',
      link: 'https://inerrantaccounting.com/',
    },
    {
      id: 'w1',
      name: 'Gems & Co',
      tags: ['WordPress', 'Theme Customization'],
      year: '2022',
      status: 'Live',
      image: '/website/Gems-Co-Cover.webp',
      link: 'https://gemsandco.co.in/',
    },
  ],
  figma: [
    {
      id: 'f1',
      name: 'Baar Baar',
      tags: ['Figma', 'UI/UX', 'Layout Design'],
      year: '2025',
      status: 'Completed',
      image: '/figma/Baar-Baar-Layout-Cover.webp',
      link: 'https://www.figma.com/design/GUzqw0by06wT4EVjiEwKRc/BAAR-BAAR-HOMEPAGE_DESIGN_TARUN_8750580185?node-id=0-1&t=oUalH7U4cMR30KwC-1',
    },
    {
      id: 'f5',
      name: 'Kraft Cushions',
      tags: ['Figma', 'UI/UX', 'Layout Design'],
      year: '2024',
      status: 'Completed',
      image: '/figma/kraft-cushions-layout.webp',
      link: 'https://www.figma.com/design/MaifisPTiQZGytnE4LCOdv/Kraft-Cushions-Figma?node-id=94-44&p=f&t=oUalH7U4cMR30KwC-0',
    },
    {
      id: 'f2',
      name: 'Badalta India',
      tags: ['Figma', 'UI/UX', 'Layout Design'],
      year: '2025',
      status: 'Completed',
      image: '/figma/Badalta-India-Layout-Cover.webp',
      link: 'https://www.figma.com/design/Eeu84ePVlGNflge0AZzVnm/Badalta-India-Homepage-Figma--Copy-?t=oUalH7U4cMR30KwC-1',
    },
    {
      id: 'f3',
      name: 'Manishri',
      tags: ['Figma', 'UI/UX', 'Layout Design'],
      year: '2024',
      status: 'Completed',
      image: '/figma/Manishri-Layout-Cover.webp',
      link: 'https://www.figma.com/design/7y7dmYipl76OZsDPDvhyUs/Manishri_Web?t=oUalH7U4cMR30KwC-1',
    },
    {
      id: 'f4',
      name: 'Trueroots',
      tags: ['Figma', 'UI/UX', 'Layout Design'],
      year: '2024',
      status: 'Completed',
      image: '/figma/Trueroots-Layout-Cover.webp',
      link: 'https://www.figma.com/design/Xf1hAVvm0LXIJjAoJnzZ91/TRP_FIGMA?t=oUalH7U4cMR30KwC-1',
    },
  ],
  infographics: [
    {
      id: 'i1',
      name: 'Pure Ayurveda Cure',
      tags: ['Social Media', 'Photoshop'],
      year: '2024',
      status: 'Completed',
      image: '/socialmedia/gydr9tvc2ju2qmfwpbv9.webp',
    },
    {
      id: 'i2',
      name: 'CA Sudhir K. Dash',
      tags: ['Social Media', 'Photoshop'],
      year: '2022',
      status: 'Completed',
      image: '/socialmedia/iclyq3vrxw4wcjf4b0ya.webp',
    },
    {
      id: 'i3',
      name: 'Affordable Housing',
      tags: ['Social Media', 'Photoshop'],
      year: '2021',
      status: 'Completed',
      image: '/socialmedia/kk6n7739famal8q3u2e8.webp',
    },
    {
      id: 'i4',
      name: 'Medicine Post',
      tags: ['Social Media', 'Photoshop'],
      year: '2024',
      status: 'Completed',
      image: '/socialmedia/nbhse7pacuhh20khyjk9.webp',
    },
    {
      id: 'i5',
      name: 'Bachpan Play School',
      tags: ['Social Media', 'Photoshop'],
      year: '2023',
      status: 'Completed',
      image: '/socialmedia/post004.webp',
    },
    {
      id: 'i6',
      name: 'Crocs Social Media',
      tags: ['Social Media', 'Canva'],
      year: '2024',
      status: 'Completed',
      image: '/socialmedia/post007.webp',
    },
    {
      id: 'i7',
      name: 'Pure Ayurveda Cure',
      tags: ['Social Media', 'Photoshop'],
      year: '2024',
      status: 'Completed',
      image: '/socialmedia/qvwgjxjlmmedcjbyr0mu.webp',
    },
    {
      id: 'i8',
      name: 'Shuttle2Home',
      tags: ['Social Media', 'Canva'],
      year: '2024',
      status: 'Completed',
      image: '/socialmedia/tjibij0dgt3coxvfonmw.webp',
    },
    {
      id: 'i9',
      name: 'Affordable Housing',
      tags: ['Social Media', 'Photoshop'],
      year: '2021',
      status: 'Completed',
      image: '/socialmedia/x3oijs4rdazacuizlooe.webp',
    },
    {
      id: 'i10',
      name: 'Bachpan Play School',
      tags: ['Social Media', 'Photoshop'],
      year: '2023',
      status: 'Completed',
      image: '/socialmedia/xvq0sgjawvhm4u0cunjy.webp',
    },
  ],
  logos: [
    {
      id: 'l1',
      name: 'Logo 1',
      tags: ['Logo Design'],
      year: '2025',
      status: 'Live',
      image: '/logos/Logo_1.webp',
    },
    {
      id: 'l2',
      name: 'Gems&Co',
      tags: ['Logo Design'],
      year: '2024',
      status: 'Live',
      image: '/logos/Logo_2.webp',
    },
    {
      id: 'l3',
      name: 'Inerrant Accounting',
      tags: ['Logo Design'],
      year: '2024',
      status: 'Live',
      image: '/logos/Logo_3.webp',
    },
    {
      id: 'l4',
      name: 'The Real Voice',
      tags: ['Logo Design'],
      year: '2023',
      status: 'Live',
      image: '/logos/Logo_4.webp',
    },
    {
      id: 'l5',
      name: 'Cord',
      tags: ['Logo Design'],
      year: '2023',
      status: 'Live',
      image: '/logos/Logo_5.webp',
    },
    {
      id: 'l6',
      name: 'Digny',
      tags: ['Logo Design'],
      year: '2022',
      status: 'Live',
      image: '/logos/Logo_6.webp',
    },
    {
      id: 'l7',
      name: 'Bimahelpdex',
      tags: ['Logo Design'],
      year: '2022',
      status: 'Live',
      image: '/logos/Logo_7.webp',
    },
    {
      id: 'l8',
      name: 'Amitix',
      tags: ['Logo Design'],
      year: '2022',
      status: 'Live',
      image: '/logos/Logo_8.webp',
    },
    {
      id: 'l9',
      name: 'MCSA',
      tags: ['Logo Design'],
      year: '2021',
      status: 'Live',
      image: '/logos/Logo_9.webp',
    },
    {
      id: 'l10',
      name: 'World Medical Trade',
      tags: ['Logo Design'],
      year: '2021',
      status: 'Live',
      image: '/logos/Logo_10.webp',
    },
  ],
};

// Tabs that open images in a lightbox instead of a link
const LIGHTBOX_TABS = ['infographics', 'logos'];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('website');
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const activeProjects = PORTFOLIO_DATA[activeTab] || [];
  const isLightboxTab = LIGHTBOX_TABS.includes(activeTab);

  // Open lightbox
  const openLightbox = useCallback((index) => {
    setLightbox({ open: true, index });
    document.body.style.overflow = 'hidden';
  }, []);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setLightbox({ open: false, index: 0 });
    document.body.style.overflow = '';
  }, []);

  // Navigate prev
  const lightboxPrev = useCallback(() => {
    setLightbox((prev) => ({
      open: true,
      index: (prev.index - 1 + activeProjects.length) % activeProjects.length,
    }));
  }, [activeProjects.length]);

  // Navigate next
  const lightboxNext = useCallback(() => {
    setLightbox((prev) => ({
      open: true,
      index: (prev.index + 1) % activeProjects.length,
    }));
  }, [activeProjects.length]);

  // Keyboard: ESC closes, arrows navigate
  useEffect(() => {
    if (!lightbox.open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lightboxPrev();
      if (e.key === 'ArrowRight') lightboxNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox.open, closeLightbox, lightboxPrev, lightboxNext]);

  // Auto-close lightbox on tab switch
  useEffect(() => {
    closeLightbox();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const currentProject = activeProjects[lightbox.index];

  return (
    <section id="portfolio" className={styles.section} aria-label="Portfolio section">
      <div className={styles.inner}>

        {/* ── Header ─────────────────────────────────────── */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true">✦</span>
              PORTFOLIO
            </p>
            <h2 className={styles.heading}>
              {"Selected works & creative solutions."}
            </h2>
          </div>

          {/* Slider controls (Arrows) */}
          <div className={styles.controls}>
            <button className={styles.prevBtn} aria-label="Previous slide">
              <span className={styles.arrowIcon}>←</span>
            </button>
            <button className={styles.nextBtn} aria-label="Next slide">
              <span className={styles.arrowIcon}>→</span>
            </button>
          </div>
        </div>

        {/* ── Tabs Navigation ────────────────────────────── */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabs} role="tablist" aria-label="Portfolio Category Tabs">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Slider Content ─────────────────────────────── */}
        <div className={styles.sliderWrapper}>
          <Swiper
            key={activeTab}
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
            }}
            navigation={{
              prevEl: `.${styles.prevBtn}`,
              nextEl: `.${styles.nextBtn}`,
            }}
            pagination={{
              clickable: true,
              el: `.${styles.paginationDots}`,
              bulletClass: styles.paginationDot,
              bulletActiveClass: styles.paginationDotActive,
            }}
            className={styles.swiperContainer}
          >
            {activeProjects.map((project, index) => {
              const cardClass =
                project.status === 'Live' || project.status === 'Completed'
                  ? styles.card
                  : `${styles.card} ${styles.cardConcept}`;

              const cardInner = (
                <>
                  {/* Background Image */}
                  <div className={styles.imageWrap}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className={styles.overlayGradient} />
                  </div>

                  {/* Card Content Overlay */}
                  <div className={styles.cardContent}>
                    {/* Top Row: Year and Status */}
                    <div className={styles.cardHeader}>
                      <span className={styles.year}>{project.year}</span>
                      <span className={`${styles.statusBadge} ${styles[project.status.toLowerCase().replace(' ', '')] || styles.defaultStatus}`}>
                        <span className={styles.statusDot} aria-hidden="true" />
                        {project.status}
                      </span>
                    </div>

                    {/* Bottom Content: Name & Tags */}
                    <div className={styles.cardFooter}>
                      <h3 className={styles.projectName}>{project.name}</h3>
                      <div className={styles.tags}>
                        {project.tags.map((tag) => (
                          <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                      </div>
                      {project.link && (
                        <span className={styles.viewLink} aria-hidden="true">View Project ↗</span>
                      )}
                      {isLightboxTab && (
                        <span className={styles.viewLink} aria-hidden="true">View Image ⊕</span>
                      )}
                    </div>
                  </div>
                </>
              );

              return (
                <SwiperSlide key={project.id} className={styles.swiperSlide}>
                  {isLightboxTab ? (
                    /* Lightbox trigger for Infographics & Logos */
                    <button
                      className={`${cardClass} ${styles.cardLightboxBtn}`}
                      onClick={() => openLightbox(index)}
                      aria-label={`Open ${project.name} in lightbox`}
                    >
                      {cardInner}
                    </button>
                  ) : project.link ? (
                    /* External link (Figma etc.) */
                    <a
                      href={project.link}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className={`${cardClass} ${styles.cardLink}`}
                      aria-label={`View ${project.name} on Figma`}
                    >
                      {cardInner}
                    </a>
                  ) : (
                    /* Plain card */
                    <div className={cardClass}>{cardInner}</div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* ── Pagination Dots ────────────────────────────── */}
        <div className={styles.paginationDotsContainer}>
          <div className={styles.paginationDots} />
        </div>

      </div>

      {/* ── Lightbox Modal ──────────────────────────────── */}
      {lightbox.open && currentProject && (
        <div
          className={styles.lbOverlay}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox: ${currentProject.name}`}
        >
          {/* Inner panel — click inside doesn't close */}
          <div className={styles.lbPanel} onClick={(e) => e.stopPropagation()}>

            {/* Close */}
            <button className={styles.lbClose} onClick={closeLightbox} aria-label="Close lightbox">
              ✕
            </button>

            {/* Prev */}
            <button
              className={`${styles.lbNav} ${styles.lbPrev}`}
              onClick={lightboxPrev}
              aria-label="Previous image"
            >
              ←
            </button>

            {/* Image */}
            <div className={styles.lbImageWrap}>
              <Image
                key={currentProject.id}
                src={currentProject.image}
                alt={currentProject.name}
                fill
                className={styles.lbImage}
                sizes="90vw"
                priority
              />
            </div>

            {/* Next */}
            <button
              className={`${styles.lbNav} ${styles.lbNext}`}
              onClick={lightboxNext}
              aria-label="Next image"
            >
              →
            </button>

            {/* Caption */}
            <div className={styles.lbCaption}>
              <span className={styles.lbCounter}>
                {lightbox.index + 1} / {activeProjects.length}
              </span>
              <span className={styles.lbName}>{currentProject.name}</span>
              <div className={styles.lbTags}>
                {currentProject.tags.map((tag) => (
                  <span key={tag} className={styles.lbTag}>{tag}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
