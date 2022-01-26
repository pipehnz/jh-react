import React from 'react';

import { Book } from '../../utils/types';

import styles from './styles.module.scss';

interface Props {
  book: Book;
}

function BookCard({ book }: Props) {
  return (
    <div className={styles.bookContainer}>
      <div className={styles.bookCover}>
        <img src={book.imageUrl} alt="Book cover" className={styles.bookCoverImg} />
      </div>
      <div className={`column ${styles.bookInfo}`}>
        <h2 className={styles.bookTitle}>{book.title}</h2>
        <span className={styles.bookAuthor}>{book.author}</span>
      </div>
    </div>
  );
}

export default BookCard;
