import React from 'react';
import { MenuIcon } from '../../../Icons/MenuIcon';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';
import { EColor, Text } from '../../../Text'; 
import { MenuItemsList } from './MenuItemsList';

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
        <div className={styles.dropdown}>
          <MenuItemsList postId='test'/>
          <button className={styles.closeButton}>
            <Text mobileSize={12} size={14} color={EColor.grey66}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>

    </div>
  );
}
