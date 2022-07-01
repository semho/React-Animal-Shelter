import React, { FormEvent, useState, useRef, useEffect } from 'react';
import styles from './answercomment.css';

interface IAnswerComment {
  to: string;
}

export function AnswerComment({to}: IAnswerComment) {
  const [textAreaVal, setTextAreaVal] = useState(`${to}, `);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log('click');
  }

  function handleTexArea(event: any) {
    setTextAreaVal(event.target.value);
  }

  const refTextArea = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    //устанавливаем фокус
    refTextArea.current && refTextArea.current.focus()
    //в конец значения по умолчанию
    refTextArea.current?.setSelectionRange(textAreaVal.length, textAreaVal.length)
  })

  return (
    //неконтролируемая компонента
    // <form className={styles.form} onSubmit={handleSubmit}>
    //   <textarea className={styles.input} defaultValue={`${to}, `} autoFocus/>
    //   <button type='submit' className={styles.button}>Ответить</button>
    // </form>
    //контролируемая компонента
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={textAreaVal} ref={refTextArea} onChange={handleTexArea}/>
      <button type='submit' className={styles.button} >Ответить</button>
    </form>
  );
}
