import api from '../config/api';
import { BookListResponse } from '../utils/types';

export const bookList = () => api.get<BookListResponse>('/books');
