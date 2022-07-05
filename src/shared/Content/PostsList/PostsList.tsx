import React, { useContext } from 'react';
import styles from './postslist.css';
import { postsContext } from '../../context/postsContext';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';

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
      <li className={styles.post} key={item.id} id={item.id}>
          <TextContent title={item.title} author={item.author} icon={item.icon_img} date={item.created}/>
          <Preview srcImg={item.banner}/>
          <Menu />
          <Controls />
      </li>
    );
  });

  return li;
}
