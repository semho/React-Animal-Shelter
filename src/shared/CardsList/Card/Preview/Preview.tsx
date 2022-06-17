import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img 
        className={styles.previewImg}
        src="https://cdn.dribbble.com/users/1803663/screenshots/16534587/media/c335a915773ce3ba65d18d137101f017.png" 
        alt="preview" 
      />
    </div>
  );
}
