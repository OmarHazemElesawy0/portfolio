'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container/Container';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { CodeIcon, CpuIcon, WrenchIcon } from '@/components/ui/icons';
import { SKILL_CATEGORIES } from '@/constants/data';
import { staggerContainerVariants, staggerItemVariants, viewportConfig } from '@/utils/motion';
import styles from './Skills.module.scss';

const CATEGORY_ICON = {
  frontend: CodeIcon,
  engineering: CpuIcon,
  tools: WrenchIcon,
} as const;

export function Skills() {
  return (
    <section className={styles.section} id="skills" aria-label="Technical Skills">
      <Container>
        <SectionHeading
          label="Skills"
          title="What I work with"
          subtitle="The tools and areas I reach for most. Roughly grouped, not ranked."
        />

        <motion.div
          className={styles.grid}
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {SKILL_CATEGORIES.map((category) => {
            const Icon = CATEGORY_ICON[category.type];
            return (
            <motion.div
              key={category.title}
              className={`${styles.card} ${styles[category.type]}`}
              variants={staggerItemVariants}
            >
              <div className={styles.cardHeader}>
                <span className={styles.categoryIcon} aria-hidden="true">
                  <Icon />
                </span>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>
              <ul className={styles.items} role="list">
                {category.items.map((skill) => (
                  <li key={skill}>
                    <SkillTag name={skill} />
                  </li>
                ))}
              </ul>
            </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

function SkillTag({ name }: { name: string }) {
  return (
    <motion.span
      className={styles.tag}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {name}
    </motion.span>
  );
}
