import axios from 'axios';
import { browserHistory } from 'react-router';

import { AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function (dispatch) {
    // Submit email and password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then((response) => {
        // Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // Save JWT token
        localStorage.setItem('token', response.data.token);
        // Redirect to the route '/feature'
        browserHistory.push('/feature');
      })
      .catch();
  };
}
