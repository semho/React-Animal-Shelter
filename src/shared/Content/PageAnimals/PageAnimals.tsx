import React, { useEffect, useState } from 'react';
import { Button, ListGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Text } from '../../Text';
import { Page404 } from '../Page404';
import { IAnimals, loadAnimals } from '../../../utils/requests/loadAnimals';
import { addAnimal } from '../../store/store';
import styles from './pageanimals.css';
import { useAppDispatch } from '../../../hooks/hooks';

export function PageAnimals() {
  const LIMIT = 5; // константа по сколько животных открывать
  const [offset, setOffset] = useState(0); // с какой позиции открывать
  const [loading, setLoading] = useState(false); // состояние лоадера
  const [errorLoading, setErrorLoading] = useState(''); // под ошибки
  const [animals, setAnimals] = useState<IAnimals>([]); // под массив объектов с животными
  const [loadMore, setLoadMore] = useState(false); // состояние кнопки пагинации
  const [firstLoad, setFirstLoad] = useState(true); // первая загрузка списка
  const [maxAnimals, setMaxAnimals] = useState(0); // максимальное значение животных
  // сохраняем в redux животных
  const dispatch = useAppDispatch();
  dispatch(addAnimal(animals));

  const handleClick = () => {
    setLoadMore(true);
    // увеличиваем позицию с которой брать следующий массив объектов
    setOffset(offset + LIMIT);
  };

  useEffect(() => {
    if (firstLoad) {
      loadAnimals(
        LIMIT,
        offset,
        setLoading,
        setErrorLoading,
        setAnimals,
        setMaxAnimals,
      );
      setFirstLoad(false);
    }

    if (loadMore) {
      loadAnimals(
        LIMIT,
        offset,
        setLoading,
        setErrorLoading,
        setAnimals,
        setMaxAnimals,
      );
      setLoadMore(false);
    }
  }, [firstLoad, loadMore]);

  return (
    <div className={styles.wrapper}>
      <h2>Страница со списком животных</h2>

      <ListGroup as="ol" numbered className={styles.listGroup}>
        {animals.map((item) => {
          return (
            <ListGroup.Item
              action
              variant="light"
              as="li"
              className={`${styles.item} d-flex`}
              key={item.id}
              id={item.id}
            >
              <Link
                to={`/animals/${item.id}`}
                className="d-flex justify-content-between align-items-start"
                style={{ width: '100%' }}
              >
                <div className="ms-2 me-auto">
                  <Text size={14} As="p">
                    <span className={styles.wrapText}>Кличка: </span>
                    <span
                      style={{ fontWeight: 'bold' }}
                      className={styles.valNickname}
                    >
                      {item.name}
                    </span>{' '}
                    <span className={styles.wrapText}>Порода: </span>
                    <span
                      style={{ fontWeight: 'bold' }}
                      className={styles.valNickname}
                    >
                      {item.spec.name}
                    </span>
                  </Text>
                </div>
              </Link>
            </ListGroup.Item>
          );
        })}
      </ListGroup>

      {!loading &&
        !errorLoading &&
        animals.length > 0 &&
        animals.length !== maxAnimals && (
          <div style={{ textAlign: 'center' }}>
            <Button onClick={handleClick}>Загрузить еще</Button>
          </div>
        )}

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
        <div style={{ textAlign: 'center' }}>Животные в приюте на найдены</div>
      )}
    </div>
  );
}
