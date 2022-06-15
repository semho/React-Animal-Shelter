import React from 'react';
import styles from './userlink.css';

export function UserLink() {
  return (
    <div className={styles.userLink}>
      <img 
        className={styles.avatar} 
        src="https://cdn.dribbble.com/users/594316/screenshots/16557702/media/d77aa195b67473edb6c386b355126078.jpg" 
        alt="avatar" 
      />
      <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
    </div>
  );
}
