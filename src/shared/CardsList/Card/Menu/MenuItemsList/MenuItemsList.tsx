import React from 'react';
import styles from './menuitemslist.css';
import { Icon, EIcons} from '../../../../Icons/Icon';
import { EColor, Text } from '../../../../Text';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}>
        <Icon name={EIcons.comments} size={20}/>
        <Text size={12} color={EColor.grey99}>Комментарии</Text>
      </li>
      
      <div className={styles.divider}></div>

      <li className={styles.menuItem}>
        <Icon name={EIcons.share} />
        <Text size={12} color={EColor.grey99}>Поделиться</Text>
      </li>
      
      <div className={styles.divider}></div>

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <Icon name={EIcons.block} />
        <Text size={12} color={EColor.grey99}>Скрыть</Text>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem}>
        <Icon name={EIcons.save} />
        <Text size={12} color={EColor.grey99}>Сохранить</Text>
      </li>
      
      <div className={styles.divider}></div>

      <li className={styles.menuItem}>
        <Icon name={EIcons.warning} />
        <Text size={12} color={EColor.grey99}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
