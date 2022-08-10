import React from 'react';
import styles from './page404.css';
import { Text } from '../../Text';

export function Page404() {
  return (
    <div className={styles.box}>
      <Text size={28}>404 — страница не найдена</Text>
    </div>
  );
}
