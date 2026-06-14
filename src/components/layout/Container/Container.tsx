import type { ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  narrow?: boolean;
  wide?: boolean;
  className?: string;
}

export function Container({ children, narrow, wide, className = '' }: ContainerProps) {
  const classes = [
    styles.container,
    narrow ? styles.narrow : '',
    wide ? styles.wide : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
}
