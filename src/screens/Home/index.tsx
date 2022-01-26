import React from 'react';

import BookList from '../../components/BookList';
import Navbar from '../../components/Navbar';

import styles from './styles.module.scss';

function Home() {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.wrapper}>
          <BookList />
        </div>
      </div>
    </>
  );
}

export default Home;
