import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Logo } from '../Icons/Logo';
import styles from './header.css';
import { Text } from '../Text';
import { ToggleSwitch } from '../ToggleSwitch';

export function Header() {
  const [isToday, setIsToday] = useState(true);

  const come = () => {
    setIsToday(!isToday);
  };

  const today = () => {
    setIsToday(true);
  };

  return (
    <header className={styles.header}>
      <Container className="d-flex justify-content-between align-items-center">
        <Link to="/" className={styles.linkWrap} onClick={today}>
          <Logo />
          <Text size={20}>Pets</Text>
        </Link>
        <div className="d-flex">
          {isToday && (
            <Link to="/animals" onClick={come} className={styles.link}>
              <Button>Все животные приюта</Button>
            </Link>
          )}
          {!isToday && (
            <Link to="/today" onClick={come} className={styles.link}>
              <Button>Назначения на сегодня</Button>
            </Link>
          )}
          <ToggleSwitch />
        </div>
      </Container>
    </header>
  );
}
