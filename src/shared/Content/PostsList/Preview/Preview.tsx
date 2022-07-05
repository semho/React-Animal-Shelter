import React from 'react';
import styles from './preview.css';

interface IPreview {
  srcImg?: string
}

export function Preview({ srcImg }: IPreview) {
  return (
    <div className={styles.preview}>
      { srcImg
        ? <img className={styles.previewImg} src={srcImg} alt="preview" />
        : <img className={styles.previewImg} src="https://cdn.dribbble.com/users/1803663/screenshots/16534587/media/c335a915773ce3ba65d18d137101f017.png" alt="preview" />
      }
    </div>
  );
}
