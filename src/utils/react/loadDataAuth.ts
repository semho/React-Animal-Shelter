import axios from 'axios';

interface IData {
  data: {
    accessToken?: string;
    user?: {
      id?: string;
      role?: string;
      login?: string;
      firstName?: string;
      lastName?: string;
    };
  };
  status: number;
}

/**
 * Функция авторизации, в случае успеха вернет объект с токеном
 * @param user логин пользователя
 * @param pass пароль пользователя
 * @returns возвращаем объект с двумя свойствами(status и result)
 */
export async function loadDataAuth(user: string, pass: string) {
  const url = 'https://acits-test-back.herokuapp.com/api/login';
  const auth = {
    login: user,
    password: pass,
  };
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  try {
    const res: IData = await axios.post(url, auth, config);

    if (res.data.accessToken !== undefined) {
      return {
        status: 'success',
        result: res.data.accessToken,
      };
    }
  } catch (error) {
    console.log(`Message: ${String(error)}`);
  }

  return {
    status: 'error',
    result: 'Пользователь не найден',
  };
}
