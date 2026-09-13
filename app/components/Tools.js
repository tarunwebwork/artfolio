'use client';

import styles from './Tools.module.css';

const tools = [
  { id: 1, name: 'HTML5', description: 'Markup Language', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { id: 2, name: 'CSS3', description: 'Styling', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { id: 3, name: 'JavaScript', description: 'Scripting', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { id: 4, name: 'Bootstrap', description: 'CSS Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
  { id: 5, name: 'jQuery', description: 'JS Library', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg' },
  { id: 6, name: 'Next.js', description: 'React Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { id: 7, name: 'WordPress', description: 'CMS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg' },
  { id: 8, name: 'Shopify', description: 'E-commerce', icon: 'https://cdn.simpleicons.org/shopify/95BF47' },
  { id: 9, name: 'Figma', description: 'Design Tool', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { id: 10, name: 'Photoshop', description: 'Photo Editing', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' },
  { id: 11, name: 'Illustrator', description: 'Vector Graphics', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg' },
  { id: 12, name: 'GitHub', description: 'Version Control', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
];

export default function Tools() {
  return (
    <section className={styles.section} aria-label="Tools section">
      <div className={styles.topContainer}>
        <div className={styles.eyebrowContainer}>
          <span className={styles.eyebrowDot} aria-hidden="true">•</span>
          <span className={styles.eyebrowText}>TOOLS I USE</span>
        </div>
        <h2 className={styles.heading}>
          Technologies and tools that power <br /> my creative process and development.
        </h2>
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.sliderTrack}>
          {[...tools, ...tools].map((tool, index) => (
            <div key={`${tool.id}-${index}`} className={styles.card}>
              <div className={styles.logoWrapper}>
                <div className={styles.logoPlaceholder}>
                  <img src={tool.icon} alt={tool.name} style={{ width: '72px', height: '72px', objectFit: 'contain' }} />
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardName}>{tool.name}</h3>
                <p className={styles.cardDescription}>{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
