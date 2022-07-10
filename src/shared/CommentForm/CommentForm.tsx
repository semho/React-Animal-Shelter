import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentform.css';
import { useForm } from 'react-hook-form';

// type Props = {
//   value: string | undefined;
//   onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
//   onSubmit: (event: FormEvent) => void;
// }

// export function CommentForm({ value, onChange, onSubmit }: Props) {

//   return (
//     <form className={styles.form} onSubmit={onSubmit}>
//       <textarea className={styles.input} value={value} onChange={onChange} />
//       <button type='submit' className={styles.button}>Комментировать</button>
//     </form>
//   );
// }


export function CommentForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: object) => {
    console.log(data);

  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <textarea
        className={styles.input}
        aria-invalid={errors.newComment ? 'true' : undefined}
        {...register('newComment', { required: true, minLength: 4 })}
      />
      {errors.newComment && <p>Введите больше 3-х символов</p>}
      <button type='submit' className={styles.button} >Комментировать</button>
    </form>
  );
}

