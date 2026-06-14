'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container/Container';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { CONTACT_LINKS } from '@/constants/data';
import { staggerContainerVariants, staggerItemVariants, viewportConfig } from '@/utils/motion';
import { GitHubIcon, LinkedInIcon, EmailIcon } from './ContactIcons';
import styles from './Contact.module.scss';
import type { ContactLink } from '@/types';

const ICON_MAP = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
} as const;

export function Contact() {
  return (
    <section className={styles.section} id="contact" aria-label="Contact">
      <Container>
        <SectionHeading
          label="Contact"
          title="Get in touch"
          subtitle="I read everything. The fastest way to reach me is LinkedIn, but any of these work."
          align="center"
        />

        <motion.div
          className={styles.links}
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          role="list"
        >
          {CONTACT_LINKS.map((link) => (
            <ContactCard key={link.label} link={link} />
          ))}
        </motion.div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className={styles.footerText}>
            Based in Cairo, Egypt.{' '}
            <span className={styles.timezone}>EET (UTC+2)</span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

function ContactCard({ link }: { link: ContactLink }) {
  const Icon = ICON_MAP[link.icon];
  const isEmail = link.icon === 'email';

  return (
    <motion.div className={styles.cardWrapper} variants={staggerItemVariants} role="listitem">
      <motion.a
        href={link.href}
        className={styles.card}
        target={isEmail ? undefined : '_blank'}
        rel={isEmail ? undefined : 'noopener noreferrer'}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        aria-label={`${isEmail ? 'Email' : 'Open'} ${link.label}`}
      >
        <div className={styles.iconWrapper} aria-hidden="true">
          <Icon />
        </div>
        <div className={styles.cardContent}>
          <span className={styles.cardLabel}>{isEmail ? 'Email' : link.label}</span>
          <span className={`${styles.cardHint} ${isEmail ? styles.cardEmail : ''}`}>
            {isEmail ? link.label : 'View profile →'}
          </span>
        </div>
      </motion.a>
    </motion.div>
  );
}
