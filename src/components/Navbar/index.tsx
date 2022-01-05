import React from 'react';

import i18n from '../../config/i18n';

import styles from './styles.module.scss';

function Navbar() {
  function handleClick(lng: string) {
    i18n.changeLanguage(lng);
  }

  return (
    <div className={styles.container}>
      <button type="button" className="btn-lng" onClick={() => handleClick('en')}>
        EN
      </button>
      <button type="button" className="btn-lng-es" onClick={() => handleClick('es')}>
        ES
      </button>
    </div>
  );
}

export default Navbar;
