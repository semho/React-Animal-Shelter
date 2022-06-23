import React from 'react';
import styles from './userblock.css';
import { Icon, EIcons } from './../../../Icons/Icon';
import { Text, EColor } from './../../../Text'
 
interface IUserBlockProps {
  avatarSrc ?: string,
  username ?: string
}

export function UserBlock({avatarSrc, username}: IUserBlockProps) {
  return (
    <a href="https://www.reddit.com/api/v1/authorize?client_id=2alpekdjsqhwgCDAvSa4uQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
          : <Icon name={EIcons.anon} size={50} color={'#D9D9D9'} />
        }
      </div>

      <div className={styles.username}>
        <Text size={20} color={username ? EColor.black: EColor.grey99}>{username || 'Аноним'}</Text>
      </div>
    </a>
  );
}
