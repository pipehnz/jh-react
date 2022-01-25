import React from 'react';

import Navbar from '../../components/Navbar';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper} />
    </div>
  );
}

export default Home;
