'use client';

import { motion } from 'framer-motion';
import type { ComponentType, SVGProps } from 'react';
import { Container } from '@/components/layout/Container/Container';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import { CardIcon, LayersIcon, GaugeIcon, UsersIcon } from '@/components/ui/icons';
import { staggerContainerVariants, staggerItemVariants, viewportConfig } from '@/utils/motion';
import styles from './About.module.scss';

interface Highlight {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
}

const HIGHLIGHTS: Highlight[] = [
  {
    Icon: CardIcon,
    title: 'Checkout & payments',
    body: "I own the cart and checkout on noon.com — the steps where people actually pay. It's the kind of code where a small regression costs real money, so correctness and reliability come first.",
  },
  {
    Icon: LayersIcon,
    title: 'Frontend architecture',
    body: 'I was part of the full frontend rewrite of noon.com, and I spend a lot of my time on component structure, design-system decisions, and the large refactors that keep a big codebase workable.',
  },
  {
    Icon: GaugeIcon,
    title: 'Performance',
    body: 'On a checkout flow, every extra second shows up in the numbers. I profile, trim bundle weight, and keep the critical purchase path fast.',
  },
  {
    Icon: UsersIcon,
    title: 'Working with people',
    body: 'Most of my work involves backend, product, design, and QA. I also mentor a junior engineer and have done a few rounds of noon’s CAKE mentorship program.',
  },
];

export function About() {
  return (
    <section className={styles.section} id="about" aria-label="About Omar Elesawy">
      <Container>
        <SectionHeading
          label="About"
          title="I work on the part of noon where people pay."
          subtitle="Frontend engineer, mostly focused on checkout and payments. Below is roughly what my day-to-day looks like."
        />

        <div className={styles.body}>
          <motion.div
            className={styles.highlights}
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {HIGHLIGHTS.map(({ Icon, title, body }) => (
              <motion.div key={title} className={styles.highlightCard} variants={staggerItemVariants}>
                <span className={styles.highlightIcon}>
                  <Icon />
                </span>
                <h3 className={styles.highlightTitle}>{title}</h3>
                <p className={styles.highlightBody}>{body}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.prose}
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.p variants={staggerItemVariants} className={styles.proseText}>
              I&apos;m a senior frontend engineer at <strong>noon</strong>, on the
              payments and sales side. Day to day that means the cart, the checkout,
              and the &quot;Buy Now&quot; flow — the parts of the site that have to work
              every single time.
            </motion.p>
            <motion.p variants={staggerItemVariants} className={styles.proseText}>
              I joined in 2023 and have been deep in the e-commerce and payments
              domain since. I helped revamp the cart and checkout end to end and
              contributed to the full frontend rewrite of noon.com — so a good chunk
              of my time goes to architecture and the unglamorous refactors that keep
              a large codebase from rotting.
            </motion.p>
            <motion.p variants={staggerItemVariants} className={styles.proseText}>
              Before noon I studied computer engineering between Cairo and Berlin,
              and did a short stint on computer-vision research. These days I&apos;m
              happiest shipping product, reviewing code, and helping the engineers
              I mentor get unstuck.
            </motion.p>

            <motion.ul variants={staggerItemVariants} className={styles.facts} role="list">
              <li className={styles.fact}>
                <span className={styles.factKey}>Currently</span>
                <span className={styles.factVal}>Frontend Engineer III @ noon</span>
              </li>
              <li className={styles.fact}>
                <span className={styles.factKey}>Focus</span>
                <span className={styles.factVal}>Checkout, cart &amp; payments</span>
              </li>
              <li className={styles.fact}>
                <span className={styles.factKey}>Based in</span>
                <span className={styles.factVal}>Cairo, Egypt</span>
              </li>
              <li className={styles.fact}>
                <span className={styles.factKey}>Since</span>
                <span className={styles.factVal}>2023</span>
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
