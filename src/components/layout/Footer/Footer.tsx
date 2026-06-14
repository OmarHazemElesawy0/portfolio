import styles from './Footer.module.scss';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <p className={styles.copy}>
          {`© ${year} Omar Elesawy · Built with Next.js & Framer Motion.`}
        </p>
        <a href="#" className={styles.toTop} aria-label="Back to top">
          ↑ Top
        </a>
      </div>
    </footer>
  );
}
