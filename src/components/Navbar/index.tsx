import React from 'react';

import logoWolox from 'assets/LogoWolox.png';

import styles from './styles.module.scss';

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <img className={styles.logo} src={logoWolox} alt="Logo Wolox" />
        <button type="button" className="btn-logout">
          Logout
        </button>
      </nav>
    </>
  );
}

export default Navbar;
