import React from 'react';
import { useQuery } from 'react-query';

import { bookList } from 'services/BooksService';
import { Book } from 'utils/types';

import BookCard from '../BookCard';

import styles from './styles.module.scss';

function BookList() {
  const { data } = useQuery('bookList', bookList);

  return (
    <div className={`row center middle wrap ${styles.bookList}`}>
      {data?.data?.page?.map((book: Book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  );
}

export default BookList;
