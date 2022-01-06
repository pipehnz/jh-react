import React from 'react';

import SignUp from '../SignUp';
import Navbar from '../../components/Navbar';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper}>
        <SignUp />
      </div>
    </div>
  );
}

export default Home;
