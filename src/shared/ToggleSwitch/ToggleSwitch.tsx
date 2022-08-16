import React, { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from './toggleswitch.css';

export function ToggleSwitch() {
  const { theme, setTheme } = useTheme();
  let stateTheme = false;
  if (theme === 'dark') stateTheme = true;
  const [isOn, setIsOn] = useState(stateTheme);

  useEffect(() => {
    if (isOn) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [isOn, setTheme]);

  const handleThemeClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={styles.boxSwitch}>
      <input type="checkbox" id="checkbox" onClick={handleThemeClick} />
      <label htmlFor="checkbox"> </label>
    </div>
  );
}
