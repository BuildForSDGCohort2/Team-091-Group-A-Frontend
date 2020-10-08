import {
  SEARCH_SERVICES,
  GET_ORDER_DETAILS,
  MAKE_PAYMENT,
} from "../actions/types";

const initialState = {
  searchData: [],
  searchParams: {},
  orderDetails: {},
  paymentDetails: {},
  key: "FLWPUBK_TEST-2432438e00d15b36d449ca3f1ef8b050-X",
  sales: 0,
  seckey: "FLWSECK_TEST-471857a280dfcd960f66aec3aa0e3d42-X",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SERVICES:
      return {
        ...state,
        searchData: action.payload.data.data,
        searchParams: action.payload.searchParams,
      };
    case GET_ORDER_DETAILS:
      return {
        ...state,
        orderDetails: action.payload.data,
      };
    case MAKE_PAYMENT:
      return {
        ...state,
        paymentDetails: action.payload.data,
      };
    default:
      return state;
  }
};
