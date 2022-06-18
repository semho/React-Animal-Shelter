import React from 'react';
import { generateId, generateRandomString } from '../../../../utils/react/generateRandomIndex';
import { GenericList } from './GenericList';
import { merge } from '../../../../utils/js/merge';
import styles from './menu.css';
import { Dropdown } from './Dropdown';

const LIST = [
  { As: 'li' as const, text: 'first' },
  { As: 'li' as const, text: 'second' },
  { As: 'li' as const, text: 'third' },
].map(generateId);

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown button={
        <button className={styles.menuButton}>
          <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
          </svg>
        </button>
      }>
        <ul>
          <GenericList list={LIST} />
        </ul>
      </Dropdown>

    </div>
  );
}
