import React, { useEffect, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { loadDataAuth } from '../../utils/react/loadDataAuth';
import styles from './login.css';

interface IFormData {
  currentLogin?: string;
  currentPassword?: string;
}

export function Login() {
  // стейты на логин и пароль
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  // стейты на ошибку
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  // стейт для отправки асинхронного запроса
  const [isSend, setIsSend] = useState(false);
  // стейт под лоадер
  const [loading, setLoading] = useState(false);
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // получаем данные из формы
  const onSubmit = (formData: IFormData) => {
    if (
      formData.currentLogin !== undefined &&
      formData.currentPassword !== undefined
    ) {
      setLogin(formData.currentLogin);
      setPassword(formData.currentPassword);
      setIsSend(true);
    }
  };

  useEffect(() => {
    // асинхронная функция авторизации
    const fetchData = async () => {
      // активируем лоадер
      setLoading(true);
      // сбрасываем ошибки
      setIsError(false);
      // получаем данные
      const data = await loadDataAuth(login, password);
      // убираем лоадер
      setLoading(false);
      // если ошибки - показываем их
      if (data.status === 'error' && data.result !== undefined) {
        setIsError(true);
        setError(String(data.result));
        // иначе записываем данные в localStorage
      } else {
        localStorage.setItem(
          'user',
          JSON.stringify({ auth: true, user: data.result }),
        );
        window.location.href = '/';
      }
      // сбразываем стейт отправки
      setIsSend(false);
    };
    // запрос на отправку асинхронного запроса есть?
    if (isSend) {
      // выполняем его
      fetchData();
    }
  }, [isSend, login, password]);

  return (
    <div style={{ height: '80vh' }} className={styles.box}>
      <div style={{ width: 300 }}>
        <h1 style={{ textAlign: 'center' }}>Авторизация</h1>
        {loading && (
          <div style={{ textAlign: 'center' }} className="mt-4">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Загрузка...</span>
            </Spinner>
          </div>
        )}
        {!loading && (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className={styles.group}>
              <Form.Label>Логин</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите логин"
                aria-invalid={errors.currentLogin ? 'true' : undefined}
                {...register('currentLogin', { required: true, minLength: 6 })}
              />
              {errors.currentLogin && (
                <p className={styles.error}>
                  Логин должен быть не менее 6-х символов
                </p>
              )}
            </Form.Group>

            <Form.Group className={styles.group}>
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="Введите пароль"
                aria-invalid={errors.currentPassword ? 'true' : undefined}
                {...register('currentPassword', {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.currentPassword && (
                <p className={styles.error}>
                  Пароль должен быть не менее 6-х символов
                </p>
              )}
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mt-3 mb-3">
              Войти
            </Button>
          </Form>
        )}
        {!loading && isError && <div className={styles.error}>{error}</div>}
      </div>
    </div>
  );
}
