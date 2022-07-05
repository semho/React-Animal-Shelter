import React, { useState, useRef } from 'react';
import styles from './controlscomment.css';
import { Icon, EIcons } from '../../../../Icons/Icon';
import { Text, EColor } from '../../../../Text';
import { AnswerComment } from './AnswerComment';

interface IControlsComment {
  author: string
}

export function ControlsComment({author} : IControlsComment) {
  const [isAnswerOpened, setIsAnswerOpened] = useState(false);

  return (
    <div className={styles.userCommentBottom}>
      <div className={styles.userCommentControls}>
        <button onClick={() => { setIsAnswerOpened(true)} }>
          <Icon name={EIcons.answer} size={15}/>
          <Text size={14} color={EColor.grey99}>Ответить</Text>
        </button>
        <button>
          <Icon name={EIcons.share} size={15}/>
          <Text size={14} color={EColor.grey99}>Поделиться</Text>
        </button>
        <button>
          <Icon name={EIcons.warning} size={15}/>
          <Text size={14} color={EColor.grey99}>Пожаловаться</Text>
        </button>
      </div>
      <div className={styles.formAnswer}>
        {isAnswerOpened && (<AnswerComment to={author}/>) }
      </div>
    </div>
  );
}
