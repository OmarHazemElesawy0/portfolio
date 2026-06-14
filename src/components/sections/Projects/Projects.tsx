'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container/Container';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { Badge } from '@/components/ui/Badge/Badge';
import { PROJECTS } from '@/constants/data';
import type { Project } from '@/types';
import { staggerContainerVariants, staggerItemVariants, viewportConfig } from '@/utils/motion';
import styles from './Projects.module.scss';

export function Projects() {
  return (
    <section className={styles.section} id="projects" aria-label="Featured Projects">
      <Container>
        <SectionHeading
          label="Projects"
          title="A few things I'm building"
          subtitle="Side projects, mostly half-finished, mostly an excuse to try something new. Details as they ship."
        />

        <motion.div
          className={styles.grid}
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        <motion.p
          className={styles.note}
          variants={staggerItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          I&apos;ll add write-ups, demos, and source links as these get far enough to show.
        </motion.p>
      </Container>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className={styles.card}
      variants={staggerItemVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      aria-label={project.title}
    >
      <div className={styles.cardImageArea} aria-hidden="true">
        <div className={styles.imagePattern} />
        <div className={styles.imageOverlay} />
        <Badge variant={project.status === 'live' ? 'success' : 'muted'} className={styles.statusBadge}>
          {project.status === 'coming-soon' ? 'Coming Soon' : project.status === 'wip' ? 'In Progress' : 'Live'}
        </Badge>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.tags} role="list" aria-label="Technologies">
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag} role="listitem">
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              GitHub →
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live`}
            >
              Live →
            </a>
          )}
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              className={styles.link}
              aria-label={`Read ${project.title} case study`}
            >
              Case Study →
            </a>
          )}
          {!project.githubUrl && !project.liveUrl && !project.caseStudyUrl && (
            <span className={styles.placeholder}>Details coming soon</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
