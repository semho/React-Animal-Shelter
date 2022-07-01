import React from 'react';
import styles from './comments.css';
import { Comment } from './Comment/Comment';

export function Comments() {
  return (
    <div className={styles.container}>
      <div className={styles.sort}>
        <span>Сортировать по: </span>
        <select >
          <option value="">Лучшие</option>
          <option value="">Дате создания</option>
        </select>
      </div>
      <div className={styles.divider}></div>

      <Comment/>
      <Comment/>

    </div>
  );
}
