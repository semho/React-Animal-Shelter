import axios from 'axios';
import { getUserLocalStorage } from '../react/getUserLocalStorage';
import { IAnimal } from './loadToday';

export interface IAnimals extends Array<IAnimal> {}
/**
 * Асинхронная функция загружает всех животных приюта
 * @param limit - по сколько показывать
 * @param offset - с какой позиции
 * @param setLoading - стейт для лоадера
 * @param setErrorLoading - стейт для ошибок
 * @param setAnimals - стейт под массив объектов животных
 * @param setMaxAnimals - сколько животных всего
 */
export async function loadAnimals(
  limit: number,
  offset: number,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorLoading: React.Dispatch<React.SetStateAction<string>>,
  setAnimals: React.Dispatch<React.SetStateAction<IAnimals>>,
  setMaxAnimals: React.Dispatch<React.SetStateAction<number>>,
) {
  const token = getUserLocalStorage().user?.accessToken;

  setLoading(true);
  setErrorLoading('');
  try {
    const { data } = await axios.get(
      'https://acits-test-back.herokuapp.com/api/animals',
      {
        headers: { Authorization: `Bearer ${token}` },
        params: { limit, offset: String(offset) },
      },
    );
    if (data.count > 0) {
      // берем предыдущее состояние и добавляем к нему текущее
      setAnimals((prevRes) => prevRes.concat(data.results));
      setMaxAnimals(data.count);
    }
  } catch (error) {
    localStorage.removeItem('user');
    setErrorLoading(String(error));
  }
  setLoading(false);
}
