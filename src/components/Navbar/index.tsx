import React, { useState } from 'react';

import i18n from '../../config/i18n';

import styles from './styles.module.scss';

function Navbar() {
  const [isActiveEs, setActiveEs] = useState(true);
  const [isActiveEn, setActiveEn] = useState(false);

  const toggleClass = () => {
    setActiveEs(!isActiveEs);
    setActiveEn(!isActiveEn);
  };

  function handleClick(lng: string) {
    i18n.changeLanguage(lng);
    toggleClass();
  }

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`btn-lang ${isActiveEn ? 'btn-lang-active' : ''}`}
        onClick={() => handleClick('en')}
      >
        EN
      </button>
      <button
        type="button"
        className={`btn-lang ${isActiveEs ? 'btn-lang-active' : ''}`}
        onClick={() => handleClick('es')}
      >
        ES
      </button>
    </div>
  );
}

export default Navbar;
