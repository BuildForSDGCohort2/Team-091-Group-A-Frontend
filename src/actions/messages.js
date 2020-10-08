import { CREATE_MESSAGE, GET_ERRORS } from './types';

// Create messages

export const createMessage = (msg) => ({
  payload: msg,
  type: CREATE_MESSAGE
});

// Return Error
export const returnErrors = (msg, status) => ({
  payload: {
    msg, status
  },
  type: GET_ERRORS
});
