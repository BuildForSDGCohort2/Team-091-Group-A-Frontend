import axios from 'axios';
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING
} from './types';

import { returnErrors } from './messages';
import tokenConfig from "../components/helpers/tokenConfig";
const baseUrl = "https://backend-91.herokuapp.com/api/v1/auth"
export const registerUser = (user) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify(user);
    axios
      .post(`${baseUrl}/register`, body, config)
      .then((res) => {
        dispatch({
          payload: res.data,
          type: REGISTER_SUCCESS
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch(returnErrors(error.response.data, error.response.status));
      dispatch({
        type: REGISTER_FAIL
      });
    });
}
// LOGIN

export const login = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // Request Body
  const body = JSON.stringify({ email, password });
  axios
    .post(`${baseUrl}/login`, body, config)
    .then((res) => {
      dispatch({
        payload: res.data,
        type: LOGIN_SUCCESS
      });
    })
    .catch((error) => {
      console.log(error)
      dispatch(returnErrors(error.response.data, error.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};
// LOGOUT
export const logout = () => (dispatch) => {
      dispatch({
        type: LOGOUT_SUCCESS
      });
};

export const loadUser = () => (dispatch, getState) => {
  // set user loading
  dispatch({
    type: USER_LOADING
  });

  axios
    .get(`${baseUrl}/user/me`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        payload: res.data,
        type: USER_LOADED
      });
    })
    .catch((error) => {
      dispatch(returnErrors(error.response.data, error.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};