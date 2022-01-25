import React, { useState } from 'react';

import i18n from '../../config/i18n';

import styles from './styles.module.scss';

function ToggleLanguage() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  function handleClick(lng: string) {
    i18n.changeLanguage(lng);
    toggleClass();
  }

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`btn-lang ${isActive ? 'btn-lang-active' : ''}`}
        onClick={() => handleClick('en')}
      >
        EN
      </button>
      <button
        type="button"
        className={`btn-lang ${isActive ? '' : 'btn-lang-active'}`}
        onClick={() => handleClick('es')}
      >
        ES
      </button>
    </div>
  );
}

export default ToggleLanguage;
