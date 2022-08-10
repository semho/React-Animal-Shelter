import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Badge, ListGroup, Spinner } from 'react-bootstrap';
import { getUserLocalStorage } from '../../../utils/react/getUserLocalStorage';
import { EColor, Text } from '../../Text';
import styles from './pagetoday.css';

interface IDestination {
  id: string;
  time: string;
  type: string;
  animal: IAnimal;
}

interface IAnimal {
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

interface IDestinations extends Array<IDestination> {}

export function PageToday() {
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [animals, setAnimals] = useState<IDestinations>([]);

  async function loadToday() {
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

  useEffect(() => {
    loadToday();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Назначения на сегодня</h2>
      <ListGroup as="ol" numbered>
        {animals.map((item) => {
          return (
            <ListGroup.Item
              action
              as="li"
              className={`${styles.item} pagetoday__item d-flex justify-content-between align-items-start`}
              key={item.id}
              id={item.animal.id}
            >
              <div className="ms-2 me-auto">
                <div className={styles.destination}>{item.type}</div>
                <Text size={14} As="p">
                  Кличка:{' '}
                  <span style={{ fontWeight: 'bold' }}>{item.animal.name}</span>
                  . Порода:{' '}
                  <span style={{ fontWeight: 'bold' }}>
                    {item.animal.spec.name}
                  </span>
                  .
                </Text>
              </div>
              <Badge bg="primary" pill>
                <Text size={12} color={EColor.white}>
                  Время приема: {item.time.substring(0, 5)}
                </Text>
              </Badge>
            </ListGroup.Item>
          );
        })}

        {loading && (
          <div style={{ textAlign: 'center' }} className="mt-4">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Загрузка...</span>
            </Spinner>
          </div>
        )}
        {errorLoading && (
          <div role="alert" style={{ textAlign: 'center' }}>
            {errorLoading}
          </div>
        )}
        {animals.length === 0 && !loading && !errorLoading && (
          <div style={{ textAlign: 'center' }}>
            Нет ни одного назначения на сегодня
          </div>
        )}
      </ListGroup>
    </div>
  );
}
