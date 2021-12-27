import React from 'react';

import SignUp from '../SignUp';

import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <SignUp />
      </div>
    </div>
  );
}

export default Home;
