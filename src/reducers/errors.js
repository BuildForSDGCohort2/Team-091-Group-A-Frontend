import { GET_ERRORS } from '../actions/types';

const initialState = {
  msg: {},
  status: null
};
// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status
      };
    default:
      return state;
  }
};
