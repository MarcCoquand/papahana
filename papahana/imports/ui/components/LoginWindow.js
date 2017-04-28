import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import AccountUI from './AccountsUIWrapper'
import '/client/styles/LoginWindow.css'

export default class LoginWindow extends Component {

  render() {
    if (!this.props.user) {
      return (
          <div>
            <h1 className="welcome-text">Welcome to Papahana!</h1>
            <div className="facebook-button">
              <AccountUI />
            </div>
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
