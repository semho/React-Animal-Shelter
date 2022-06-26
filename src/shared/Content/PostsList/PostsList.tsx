import React, { useContext } from 'react';
import styles from './postslist.css';
import { postsContext } from '../../context/postsContext';

export function PostsList() {

  return (
    <ul className={styles.postsList}>
      {getPosts()}
    </ul>
  );
}

function getPosts() {
  const posts = useContext(postsContext);

  let li = posts.map(item => {
    return (
      <li key={item.id} id={item.id}>
          <h4>{item.title}</h4>
          <span>{item.author}</span>
          <p>{item.selftext}</p>
          <div className={styles.divider}></div>
      </li>
    );
  });

  return li;
}
