import api from '../config/api';
import { User, Credential } from '../utils/types';

export const signUp = (userPayload: User) => api.post('/users', userPayload);

export const signIn = (crendentialPayload: Credential) => api.post('/users/sign_in', crendentialPayload);
