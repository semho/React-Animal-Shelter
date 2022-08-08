import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { loadDataAuth } from '../../utils/react/loadDataAuth';
import styles from './login.css';

interface IData {
  status: string;
  result: string;
}

export function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');

  const onFormSubmit = async (e: React.FormEvent) => {
    setIsError(false);
    e.preventDefault();
    const data: IData = await loadDataAuth(login, password);
    if (data.status === 'error') {
      setIsError(true);
      setError(data.result);
    }
  };

  return (
    <div style={{ height: '80vh' }} className={styles.box}>
      <div style={{ width: 300 }}>
        <h1 style={{ textAlign: 'center' }}>Авторизация</h1>
        <Form onSubmit={onFormSubmit}>
          <Form.Group className={styles.group}>
            <Form.Label>Логин</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите логин"
              onChange={(e) => {
                setLogin(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className={styles.group}>
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              placeholder="Введите пароль"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mt-3 mb-3">
            Войти
          </Button>
        </Form>
        {isError && <div className={styles.error}>{error}</div>}
      </div>
    </div>
  );
}
