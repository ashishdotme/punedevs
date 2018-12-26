import {SAVE_USER} from './types';

export const registerUser = (userData) => {
  return {
    type: SAVE_USER,
    payload: userData
  }
}