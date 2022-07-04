import React, { useState } from 'react';
import styles from './dropdown.css';
import { BodyDropdown } from './BodyDropdown'

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
}

export function Dropdown({ button }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [idElement, setIdElement] = useState<string | null | undefined>(null);

  return (
    <div className={styles.container}>
        <div onClick={(event) => {
          setIsDropdownOpen(!isDropdownOpen);
          //получаем текущую кнопку меню по которой нажали
          const buttonMenu = (event.target as HTMLElement).closest('button');
          if (!buttonMenu) return;
          //получаем пост к которой принадлежит кнопка
          const currentPost = buttonMenu.parentElement?.parentElement?.parentElement?.parentElement;
          const idPost = currentPost?.id;
          setIdElement(idPost);
        }}>
          { button }
        </div>
        {isDropdownOpen && (
          <div className={styles.listContainer}>
            <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
              {/* передаем id поста в модальное окно меню */}
              <BodyDropdown idPost={idElement} onClose={() => { setIsDropdownOpen(false); }}/>
            </div>
          </div>
        )}
    </div>
  );
}

