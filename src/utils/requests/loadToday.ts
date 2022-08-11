import axios from 'axios';
import { getUserLocalStorage } from '../react/getUserLocalStorage';

interface IDestination {
  id: string;
  time: string;
  type: string;
  animal: IAnimal;
}

export interface IAnimal {
  age: number;
  height: number;
  heightUnit: string;
  id: string;
  name: string;
  weight: number;
  weightUnit: string;
  spec: ISpec;
}

interface ISpec {
  id: string;
  name: string;
  type: string;
}

export interface IDestinations extends Array<IDestination> {}

/**
 * Асинхронная функция загружает животных на сегодня с их назначениями
 * @param setLoading - стейт для лоадера
 * @param setErrorLoading - стейт для ошибок
 * @param setAnimals - стейт под массив объектов животных
 */
export async function loadToday(
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorLoading: React.Dispatch<React.SetStateAction<string>>,
  setAnimals: React.Dispatch<React.SetStateAction<IDestinations>>,
) {
  // берем токен из localStorage
  const token = getUserLocalStorage().user?.accessToken;
  setLoading(true);
  setErrorLoading('');
  try {
    const { data } = await axios.get(
      'https://acits-test-back.herokuapp.com/api/executions/today',
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    if (data.count > 0) {
      setAnimals(data.results);
    }
  } catch (error) {
    setErrorLoading(String(error));
  }
  setLoading(false);
}
