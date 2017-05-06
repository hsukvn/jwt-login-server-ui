import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://192.168.56.102:3090'; // change to server ip

export function signinUser({ email, password }) {
  return function(dispatch) {
  // Sumit email/password to the server
  axios.post(`${ROOT_URL}/signin`, { email, password }) // { email: email, password: password } in es6
    .then(response => {
      // If request is good...
      // - Update state to indicate user is authenticated
      // - Save the JWT token
      // - redirect to the route '/feature'
      browserHistory.push('/feature');
    })
    .catch()(() => {
      // If request is bad...
      // - Show an error to the user
    });
  }
}
