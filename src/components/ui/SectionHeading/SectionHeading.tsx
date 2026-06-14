'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants, viewportConfig } from '@/utils/motion';
import styles from './SectionHeading.module.scss';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`${styles.wrapper} ${styles[align]}`}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <span className={styles.label}>{label}</span>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  );
}
