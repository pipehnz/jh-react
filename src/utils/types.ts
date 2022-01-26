export type Nullable<T> = T | null;

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  locale?: string;
};

export type Credential = {
  email: string;
  password: string;
};

export type Book = {
  id: number;
  author: string;
  title: string;
  imageUrl: string;
  editor: string;
  year: string;
  genre: string;
  createdAt: Date;
  updatedAt: Date;
};

export type BookListResponse = {
  page: Book[];
  count: number;
  totalPages: number;
  totalCount: number;
  currentPage: number;
  nextPage?: number;
};
