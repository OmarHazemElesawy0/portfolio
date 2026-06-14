'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container/Container';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { Badge } from '@/components/ui/Badge/Badge';
import { EXPERIENCE_ITEMS } from '@/constants/data';
import { staggerContainerVariants, staggerItemVariants, viewportConfig } from '@/utils/motion';
import styles from './Experience.module.scss';

export function Experience() {
  return (
    <section className={styles.section} id="experience" aria-label="Work Experience">
      <Container>
        <SectionHeading
          label="Experience"
          title="Where I've worked"
          subtitle="A short history. The recent stuff is all frontend, e-commerce, and payments."
        />

        <div className={styles.timeline}>
          {EXPERIENCE_ITEMS.map((item, index) => (
            <TimelineItem key={item.company + item.role} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

interface TimelineItemProps {
  item: (typeof EXPERIENCE_ITEMS)[number];
  index: number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.div
      className={styles.item}
      variants={staggerItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      transition={{ delay: index * 0.08 }}
    >
      <div className={styles.timelineTrack} aria-hidden="true">
        <div className={styles.dot} />
        <div className={styles.line} />
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardMeta}>
            <div className={styles.companyRow}>
              <span className={styles.company}>{item.company}</span>
              {item.current && <Badge variant="success">Current</Badge>}
            </div>
            <h3 className={styles.role}>{item.role}</h3>
            <div className={styles.details}>
              <span className={styles.period}>{item.period}</span>
              <span className={styles.separator} aria-hidden="true">·</span>
              <span className={styles.location}>{item.location}</span>
            </div>
          </div>
        </div>

        <p className={styles.description}>{item.description}</p>

        <motion.ul
          className={styles.highlights}
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          role="list"
        >
          {item.highlights.map((highlight) => (
            <motion.li key={highlight} className={styles.highlight} variants={staggerItemVariants}>
              <span className={styles.bullet} aria-hidden="true" />
              <span>{highlight}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}
