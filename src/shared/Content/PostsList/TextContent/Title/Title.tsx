import React from 'react';
import styles from './title.css';
import { Link } from 'react-router-dom';

interface ITitle {
  title?: string
}

export function Title({ title }: ITitle) {

  return (
    <h2 className={styles.title}>
      <Link to="/posts/1" className={styles.postLink}>
        {title}
      </Link>
    </h2>
  );
}
