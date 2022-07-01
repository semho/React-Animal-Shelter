import React from 'react';
import styles from './card.css';
import { TextContent } from '../../Content/PostsList/TextContent';
import { Preview } from '../../Content/PostsList/Preview';
import { Menu } from '../../Content/PostsList/Menu';
import { Controls } from '../../Content/PostsList/Controls';

interface ICardProps {
  id: string;
}

export function Card({ id }: ICardProps) {
  return (
    <li className={styles.card} id={id}>
      <TextContent />
      <Preview />
      <Menu />
      <Controls />
    </li>
  );
}
