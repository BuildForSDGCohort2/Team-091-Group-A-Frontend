import {createMessage, returnErrors} from './messages'
import axios from 'axios';

const sendMessage = ({email, message, name}) => (dispatch) => {
  // const body = JSON.stringify({email, message, name})
  const url = "https://backend-91.herokuapp.com/api/v1/contact";
  axios.post(url, {email, message, name}).then(res => {
    dispatch(createMessage({msgSuccess: "message sent succesfully"}))
  }).catch(error => {
    dispatch(returnErrors(error.response.data, error.response.status));
  })
}

export default sendMessage;