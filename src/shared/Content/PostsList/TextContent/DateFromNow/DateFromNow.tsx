import React from 'react';
import styles from './datefromnow.css';
import moment from 'moment';

interface IDateFromNow {
  date?: number;
}

export function DateFromNow({date}: IDateFromNow) {
  let dateCreated = null;
  { date
   ? dateCreated = moment(new Date(date  * 1000)).fromNow()
   : dateCreated = new Date()
  }

  return (
    <span>
      {`${dateCreated}`}
    </span>
  );
}
