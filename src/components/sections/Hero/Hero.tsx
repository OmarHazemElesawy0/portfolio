'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button/Button';
import { Container } from '@/components/layout/Container/Container';
import styles from './Hero.module.scss';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section className={styles.section} id="hero" aria-label="Introduction">
      <HeroBackground />

      <Container>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.statusBadge}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span>Currently building checkout at noon</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.name}>
            Omar Elesawy
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.headline}>
            Building scalable e-commerce experiences
            <br className={styles.br} />
            <span className={styles.headlineAccent}>and payment journeys.</span>
          </motion.p>

          <motion.p variants={itemVariants} className={styles.subheadline}>
            Frontend Engineer with experience building checkout, cart,
            and payment experiences at scale.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.ctas}>
            <Button href="#experience" variant="primary" size="lg">
              View Experience
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Contact Me
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.meta}>
            <span className={styles.metaItem}>
              <span className={styles.metaDot} />
              Senior Frontend Engineer
            </span>
            <span className={styles.metaDivider} aria-hidden="true">·</span>
            <span className={styles.metaItem}>noon</span>
            <span className={styles.metaDivider} aria-hidden="true">·</span>
            <span className={styles.metaItem}>Cairo, Egypt</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function HeroBackground() {
  return (
    <div className={styles.bg} aria-hidden="true">
      <div className={styles.grid} />
      <div className={styles.gradientOrb1} />
      <div className={styles.gradientOrb2} />
      <div className={styles.gradientOrb3} />
      <div className={styles.noise} />
    </div>
  );
}
