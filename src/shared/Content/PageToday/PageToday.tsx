import React, { useEffect, useState } from 'react';
import { Badge, ListGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/hooks';
import { IDestinations, loadToday } from '../../../utils/requests/loadToday';
import { addAnimal } from '../../store/store';
import { EColor, Text } from '../../Text';
import { Page404 } from '../Page404';
import styles from './pagetoday.css';

export function PageToday() {
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [animals, setAnimals] = useState<IDestinations>([]);
  // сохраняем в redux животных
  const dispatch = useAppDispatch();
  const animalsNotDestinations = animals.map((item) => {
    return item.animal;
  });
  dispatch(addAnimal(animalsNotDestinations));

  useEffect(() => {
    loadToday(setLoading, setErrorLoading, setAnimals);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Назначения на сегодня</h2>
      <ListGroup as="ol" numbered className={styles.listGroup}>
        {animals.map((item) => {
          return (
            <ListGroup.Item
              action
              as="li"
              className={`${styles.item} d-flex `}
              key={item.id}
              id={item.animal.id}
            >
              <Link
                to={`/today/${item.animal.id}`}
                className="d-flex justify-content-between align-items-start"
                style={{ width: '100%' }}
              >
                <div className="ms-2 me-auto text-item">
                  <div className={styles.destination}>{item.type}</div>
                  <Text size={14} As="p">
                    <span className={styles.wrapText}>Кличка: </span>
                    <span
                      style={{ fontWeight: 'bold' }}
                      className={styles.valNickname}
                    >
                      {item.animal.name}
                    </span>{' '}
                    <span className={styles.wrapText}>Порода: </span>
                    <span
                      style={{ fontWeight: 'bold' }}
                      className={styles.valNickname}
                    >
                      {item.animal.spec.name}
                    </span>
                  </Text>
                </div>
                <Badge bg="primary" pill className={styles.customBadge}>
                  <Text size={12} color={EColor.white}>
                    Время приема: {item.time.substring(0, 5)}
                  </Text>
                </Badge>
              </Link>
            </ListGroup.Item>
          );
        })}
      </ListGroup>

      {loading && (
        <div
          style={{ textAlign: 'center', transform: 'translateY(20vh)' }}
          className="mt-4"
        >
          <Spinner
            animation="border"
            role="status"
            style={{ width: '3rem', height: '3rem' }}
          >
            <span className="visually-hidden">Загрузка...</span>
          </Spinner>
        </div>
      )}
      {errorLoading && (
        <div role="alert" style={{ textAlign: 'center' }}>
          <Page404 message={errorLoading} />
        </div>
      )}
      {animals.length === 0 && !loading && !errorLoading && (
        <div style={{ textAlign: 'center' }}>
          Нет ни одного назначения на сегодня
        </div>
      )}
    </div>
  );
}
