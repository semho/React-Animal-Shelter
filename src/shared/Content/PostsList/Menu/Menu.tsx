import React from 'react';
import { MenuIcon } from '../../../Icons/MenuIcon';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
      </Dropdown>

    </div>
  );
}
