import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import styles from './cardanimal.css';

export function CardAnimal() {
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        history.push('/today');
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [history]);

  const node = document.getElementById('modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2>Заголовок</h2>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
          officia corrupti, neque, fuga ipsa vel quas explicabo quisquam ratione
          nihil inventore illo commodi quia deleniti qui adipisci assumenda?
          Distinctio, eos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          iure facilis pariatur, aliquid esse architecto illum, dolor temporibus
          facere, perferendis autem tenetur commodi odit aut quod explicabo
          quisquam reiciendis soluta!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          quasi ipsum eos possimus ratione ipsam cupiditate, iste repellendus
          dicta, maiores quos aperiam hic corporis. Libero facilis suscipit
          optio similique? Ratione?
        </p>
      </div>
    </div>,
    node,
  );
}
