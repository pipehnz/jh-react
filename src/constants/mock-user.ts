import { User } from '../utils/types';

export const WRONG_USER: User = {
  firstName: 'Juan',
  lastName: '',
  email: 'sda',
  password: '890uj',
  passwordConfirmation: '890ujah'
};

export const VALID_USER: User = {
  firstName: 'Juan',
  lastName: 'Henao',
  email: 'juan.m.henao.arias@accenture.com',
  password: '123456xD',
  passwordConfirmation: '123456xD'
};
