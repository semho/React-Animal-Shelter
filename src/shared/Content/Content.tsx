import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './content.css';

interface IContentProps {
  children?: React.ReactNode;
}

export function Content({ children }: IContentProps) {
  return (
    <main className={styles.content}>
      <Container>{children}</Container>
    </main>
  );
}
