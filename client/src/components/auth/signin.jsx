import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
  render() {
    return (
      <form>
        <fieldset className="form-group">
          <label htmlFor="email">Email:</label>
          <input id="email" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="password">Password:</label>
          <input id="password" className="form-control" />
        </fieldset>
        <button className="btn btn-primary" action="submit">Sign In</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
})(Signin);
