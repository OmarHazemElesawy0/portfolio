'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUpVariants, viewportConfig } from '@/utils/motion';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollReveal({ children, delay = 0, className }: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
