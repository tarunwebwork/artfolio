import styles from './Welcome.module.css';

export default function Welcome() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Welcome to Artfolio</h1>
        <p className={styles.description}>
          We are a premium creative agency dedicated to crafting unforgettable digital experiences and innovative solutions for ambitious brands.
        </p>
      </div>
    </section>
  );
}
