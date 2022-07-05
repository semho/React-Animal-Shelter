import React, { useState } from 'react';
import styles from './dropdown.css';
import { BodyDropdown } from './BodyDropdown';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
}

export function Dropdown({ button }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [idElement, setIdElement] = useState<string | null | undefined>(null);

  const node = document.getElementById('dropdown_root');
  if (!node) return null;

  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom",
    modifiers: [
      {
        name: "offset",
        enabled: true,
        options: {
          offset: [0, 10]
        }
      }
    ]
  });

  return (
    <div>
        <div ref={setReferenceElement} onClick={(event) => {
          setIsDropdownOpen(!isDropdownOpen);
          // //получаем текущую кнопку меню по которой нажали
          // const buttonMenu = (event.target as HTMLElement).closest('button');
          // if (!buttonMenu) return;
          // //получаем пост к которой принадлежит кнопка
          // const currentPost = buttonMenu.parentElement?.parentElement?.parentElement?.parentElement;
          // const idPost = currentPost?.id;
          // setIdElement(idPost);
        }}>
          { button }
        </div>
        {isDropdownOpen && (
          <div>
            <div onClick={() => setIsDropdownOpen(false)}>
              {ReactDOM.createPortal(
                <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                  <BodyDropdown onClose={() => { setIsDropdownOpen(false); }} />
                </div>,
                node
              )}
            </div>
          </div>
        )}
    </div>
  );
}

