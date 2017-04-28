import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import '/client/styles/profile.css'
import AccountUI from './AccountsUIWrapper'

export default class LoginWindow extends Component {

  render() {
    if (!this.props.user) {
      return (
          <div>
          <h1>Welcome to Papahana!</h1>
            <AccountUI />
          </div>
          );
    } else {
      return (<div>Not logged in</div>)
    }
  }
}

LoginWindow.propTypes =  {
    user:PropTypes.object,
};
