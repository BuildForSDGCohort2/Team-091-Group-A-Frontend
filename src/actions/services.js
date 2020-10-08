import axios from 'axios';
import { SEARCH_SERVICES, GET_ORDER_DETAILS, MAKE_PAYMENT } from "./types"
import { returnErrors, createMessage } from './messages';
import tokenConfig from "../components/helpers/tokenConfig";


const baseUrl = "https://backend-91.herokuapp.com/api/v1"

export const findServices = ({destination, origin}) => (dispatch, getState) => {
  // const url = `${baseUrl}/providers/find?origin=${origin}&destination=${destination}`
  const url = `${baseUrl}/providers/find?origin=${origin}&destination=${destination}`
  axios.get(url, tokenConfig(getState))
    .then((res) => {
      dispatch({
        payload: {
          data: res.data,
          searchParams: {
            destination,
            origin
          }
        },
        type: SEARCH_SERVICES
      })
    })
    .catch((error) => {
      dispatch(returnErrors(error.response.data, error.response.status));
    })
    
}

export const getOrderDetails = (data) => (dispatch, getState) => {
  const url = `${baseUrl}/orders`;
  const body = JSON.stringify(data);
  axios.post(url, body, tokenConfig(getState))
  .then((res) => {
    dispatch({
      payload: res.data,
      type: GET_ORDER_DETAILS
    })
  }).catch((error) => {
    dispatch(returnErrors(error.response.data, error.response.status));
  })
}

export const makePayment = (id) => (dispatch, getState) => {
  const url = `${baseUrl}/orders/${id}`;
  axios.patch(url, tokenConfig(getState))
  .then((res) => {
    createMessage({paymentSuccess: "Payment was Successful"})
    dispatch({
      payload: res.data,
      type: MAKE_PAYMENT
    })
  }).catch((error) => {
    dispatch(returnErrors(error.response.data, error.response.status));
  })
}