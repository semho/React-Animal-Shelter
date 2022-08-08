import { IDataUser } from './loadDataAuth';

interface IDataAuth {
  auth?: boolean;
  user?: IDataUser;
}
/**
 * Функция достает из localStorage объект пользователя по ключу
 * @returns возвращаем объект из стора либо пустой
 */
export function getUserLocalStorage(): IDataAuth {
  let obj = {};
  if (typeof window !== 'undefined' && localStorage.getItem('user') !== null) {
    obj = JSON.parse(localStorage.getItem('user') || '{}');
  }
  return obj;
}
