'use client';

import Image from 'next/image';

import styles from './Services.module.css';

const SERVICES_DATA = [
  {
    num: 1,
    title: 'Web Design',
    chips: ['WordPress', 'Shopify', 'Next.js', 'Landing Page', 'Dashboard', 'E-Commerce'],
    image: '/service-web-design.jpg',
    desc: 'End-to-end website design and development — from wireframes to fully functional, responsive websites built on the right platform for your business.',
  },
  {
    num: 2,
    title: 'Figma Design',
    chips: ['UI/UX', 'Wireframe', 'Prototype', 'Design System', 'Landing Page'],
    image: '/portfolio-figma.png',
    desc: 'High-fidelity UI/UX design in Figma — pixel-perfect layouts, interactive prototypes, and scalable design systems tailored to your brand.',
  },
  {
    num: 3,
    title: 'Logo Design',
    chips: ['Brand Identity', 'Logo', 'Typography', 'Color Palette', 'Brand Guidelines'],
    image: '/service-logo.jpg',
    desc: 'Memorable logos and brand identities that communicate your values and set you apart — delivered with full source files and brand guidelines.',
  },
  {
    num: 4,
    title: 'Social Media Creative',
    chips: ['Posts', 'Stories', 'Reels Thumbnail', 'Infographics', 'Campaign', 'Canva', 'Photoshop'],
    image: '/service-social-creative.jpg',
    desc: 'Eye-catching social media creatives designed to stop the scroll — consistent, on-brand visuals for every platform and campaign.',
  },
  {
    num: 5,
    title: 'Figma to HTML',
    chips: ['HTML', 'CSS', 'Bootstrap', 'Pixel Perfect', 'Responsive'],
    image: '/service-figma-to-html.jpg',
    desc: 'Accurate conversion of Figma designs into clean, semantic HTML/CSS code — pixel-perfect, responsive, and ready for handoff or integration.',
  },
];


export default function Services() {
  return (
    <section id="services" className={styles.section} aria-label="Services section">
      <div className={styles.inner}>
        {/* ── Left Sidebar (Heading) ─────────────────── */}
        <div className={styles.sidebar}>
          <h2 className={styles.heading}>Services</h2>
        </div>

        {/* ── Main Content Area ──────────────────────── */}
        <div className={styles.mainContent}>
          {/* Header Row */}
          <div className={styles.headerRow}>
            <div className={styles.decorations} aria-hidden="true">
              <span>×</span>
              <span>×</span>
              <span>×</span>
              <span>×</span>
            </div>
            <span className={styles.count}>(05)</span>
          </div>

          {/* Services List */}
          <div className={styles.servicesList}>
            {SERVICES_DATA.map((service, index) => (
              <div key={index} className={styles.serviceRow}>
                {/* Left Column: Title & Chips */}
                <div className={styles.serviceLeft}>
                  <div className={styles.serviceTitleWrap}>
                    <span className={styles.number}>{service.num}</span>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                  </div>
                  <div className={styles.chips}>
                    {service.chips.map((chip) => (
                      <span key={chip} className={styles.chip}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Image & Description */}
                <div className={styles.serviceRight}>
                  <div className={styles.imageWrap}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <p className={styles.description}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
