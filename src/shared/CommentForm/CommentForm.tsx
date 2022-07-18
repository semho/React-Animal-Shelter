import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentform.css';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { textState } from '../../App';


//передача от redux из родительского компонента
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


//передача от Recoil в валидацию библиотеки react-hook-form
export function CommentForm() {
  //Recoil
  const [text, setText] = useRecoilState(textState);
  const onChangeRecoil = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  }
  //react-hook-form
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
        value = {text} //состояние по дефолту от recoil
        className={styles.input}
        aria-invalid={errors.newComment ? 'true' : undefined}
        {...register('newComment',
          {
            onChange: onChangeRecoil, //передаем измененное состояние от Recoil
            onBlur: (e) => {},
            required: true,
            minLength: 4
          }
        )}
      />
      {errors.newComment && <p>Введите больше 3-х символов</p>}
      <button type='submit' className={styles.button} >Комментировать</button>
    </form>
  );
}
