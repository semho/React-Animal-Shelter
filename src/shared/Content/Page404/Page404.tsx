import React from 'react';
import styles from './page404.css';
import { Text } from '../../Text';

interface IError {
  message?: string;
}

export function Page404({ message = '404 — страница не найдена' }: IError) {
  return (
    <div className={styles.box}>
      <Text size={28}>{message}</Text>
    </div>
  );
}
