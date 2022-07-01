import React from 'react';
import styles from './comment.css';
import { UserLink } from '../../../Content/PostsList/TextContent/UserLink';
import { DateFromNow } from '../../../Content/PostsList/TextContent/DateFromNow';
import { ControlsComment } from './ControlsComment';

export function Comment() {
let tempCurrentDate: any = new Date();
tempCurrentDate = (tempCurrentDate.getTime() - 10800000) / 1000 ;
const author = 'Михаил Рогов';

return (
  <div className={styles.comment}>
    <div className={styles.clipper}>
      <svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 30L19 20L8.74228e-07 20L9.5 30Z" fill="#D9D9D9"/>
        <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
      </svg>
      <div className={styles.clipperDivider}></div>
    </div>
    <div className={styles.userComment}>
      <div className={styles.userCommentTitle}>
        <UserLink author={author} />
        <DateFromNow date={tempCurrentDate}/>
        <span className={styles.group}>Лига юристов</span>
      </div>
      <p>
        Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно.
      </p>
      <ControlsComment author={author}/>
    </div>
  </div>
);
}
