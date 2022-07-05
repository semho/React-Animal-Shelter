import React from 'react';
import styles from './userlink.css';

interface IUserLink {
  author?: string
  icon?: string
}


export function UserLink({ author, icon }: IUserLink) {
  return (
    <div className={styles.userLink}>
      { icon
        ? <img className={styles.avatar} src={icon} alt="avatar"/>
        : <img className={styles.avatar} src="https://cdn.dribbble.com/users/594316/screenshots/16557702/media/d77aa195b67473edb6c386b355126078.jpg" alt="avatar"/>
      }
      <a href="#user-url" className={styles.username}>{author}</a>
    </div>
  );
}
