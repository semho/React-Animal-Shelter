import React, { useEffect, useRef } from 'react';
import { ListGroup } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { useHistory, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { getDeclensionWordFromNumber } from '../../utils/react/declension';
import { IAnimal } from '../../utils/requests/loadToday';
import styles from './cardanimal.css';

interface IParams {
  id: string;
}

export function CardAnimal() {
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();
  const data = useAppSelector<IAnimal[]>((state) => state.animals);
  const idForAnimal: IParams = useParams();
  const animal = data.find((item) => item.id === idForAnimal.id);
  let age = 0;
  if (animal) age = animal.age;

  const pageBack = history.location.pathname.split('/');

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        if (pageBack[1] === 'today') {
          history.push('/today');
        } else {
          history.push('/animals');
        }
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [history, pageBack]);

  const node = document.getElementById('modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h3>{animal && animal.name}</h3>

      <div className={styles.content}>
        <ListGroup variant="flush">
          <ListGroup.Item>Порода: {animal && animal.spec.name}</ListGroup.Item>
          <ListGroup.Item>
            Возраст: {age}{' '}
            {getDeclensionWordFromNumber(age, ['год', 'года', 'лет'])}
          </ListGroup.Item>
          <ListGroup.Item>
            Рост: {animal && animal.height} {animal && animal.heightUnit}
          </ListGroup.Item>
          <ListGroup.Item>
            Вес: {animal && animal.weight} {animal && animal.weightUnit}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>,
    node,
  );
}
