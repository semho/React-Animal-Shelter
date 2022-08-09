import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Logo } from '../Icons/Logo';
import styles from './header.css';
import { Text } from '../Text';

export function Header() {
  const [isToday, setIsToday] = useState(true);

  const come = () => {
    setIsToday(!isToday);
  };

  return (
    <header className={styles.header}>
      <Container className="d-flex justify-content-between align-items-center">
        <Link to="/" className={styles.linkWrap}>
          <Logo />
          <Text size={20}>Pets</Text>
        </Link>
        {isToday && (
          <Link to="/animals" onClick={come}>
            <Button>Все животные приюта</Button>
          </Link>
        )}
        {!isToday && (
          <Link to="/today" onClick={come}>
            <Button>Назначения на сегодня</Button>
          </Link>
        )}
      </Container>
    </header>
  );
}
