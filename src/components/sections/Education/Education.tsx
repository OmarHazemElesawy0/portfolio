'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container/Container';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { Badge } from '@/components/ui/Badge/Badge';
import { EDUCATION_ITEMS } from '@/constants/data';
import { staggerContainerVariants, staggerItemVariants, viewportConfig } from '@/utils/motion';
import styles from './Education.module.scss';

export function Education() {
  return (
    <section className={styles.section} id="education" aria-label="Education">
      <Container>
        <SectionHeading
          label="Education"
          title="Where I studied"
          subtitle="Computer engineering, split between Cairo and Berlin."
        />

        <motion.div
          className={styles.grid}
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {EDUCATION_ITEMS.map((item, index) => (
            <motion.div key={item.institution} className={styles.card} variants={staggerItemVariants}>
              <div className={styles.header}>
                <div className={styles.indexBadge} aria-hidden="true">
                  0{index + 1}
                </div>
                <div className={styles.meta}>
                  <span className={styles.institution}>{item.institution}</span>
                  <span className={styles.location}>{item.location}</span>
                </div>
              </div>

              <h3 className={styles.degree}>{item.degree}</h3>

              <div className={styles.details}>
                <span className={styles.period}>{item.period}</span>
                {item.honours && <Badge variant="accent">{item.honours}</Badge>}
              </div>

              {item.gpa && (
                <div className={styles.gpa}>
                  <span className={styles.gpaLabel}>GPA</span>
                  <span className={styles.gpaValue}>{item.gpa}</span>
                  <span className={styles.gpaNote}>(German scale — 1.0 is highest)</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.note}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p>
            It was a dual-track program between GUC in Cairo and GIU in Berlin, which
            meant studying in both places — a good chunk of why I&apos;m comfortable
            working across cultures and time zones.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
