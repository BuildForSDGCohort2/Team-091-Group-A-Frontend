import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING,
} from "../actions/types";

const initialState = {
  isAuthenticated: null,
  isAdmin: null,
  isLoading: false,
  token: localStorage.getItem("token"),
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isAdmin: action.payload.isAdmin,
        isLoading: false,
        user: action.payload.user,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isAdmin: action.payload.user.isAdmin,
        isLoading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        isAdmin: false,
        isLoading: false,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};
