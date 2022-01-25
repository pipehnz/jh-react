import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

import logoWolox from 'assets/LogoWolox.png';
import LocalStorageService from 'services/LocalStorageService';

import styles from './styles.module.scss';

function Navbar() {
  const { t } = useTranslation();
  const history = useHistory();

  const onLogout = () => {
    LocalStorageService.removeValue('access-token');
    history.push('/');
  };

  return (
    <>
      <nav className={styles.navbar}>
        <img className={styles.logo} src={logoWolox} alt="Logo Wolox" />
        <button type="button" className="btn-logout" onClick={onLogout}>
          {t('Buttons:logout')}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
