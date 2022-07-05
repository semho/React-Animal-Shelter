import React from 'react';
import styles from './textcontent.css';
import { Title } from './Title';
import { UserLink } from './UserLink';
import { DateFromNow } from './DateFromNow';

interface ITextContent {
  title?: string;
  author?: string;
  icon?: string;
  date?: number;
}

export function TextContent({ title, author, icon, date }: ITextContent) {

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink author={author} icon={icon}/>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>
            опубликовано
          </span>
          <DateFromNow date={date}/>
        </span>
      </div>
      <Title title={title}/>
    </div>
  );
}
