import React, { Component  } from 'react';
import { createContainer  } from 'meteor/react-meteor-data';

import AccountUI from './components/AccountsUIWrapper'
import { Meteor } from 'meteor/meteor'
import LoginWindow from './components/LoginWindow'

import Header from './components/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class App extends Component {
  constructor (props) {
    super(props);
  }

  renderNotLogin(){
    return (
        <div>
        Not logged in yet!
        </div>
        )
  }

  render() {
    return (
        <div className="container">

            {this.props.currentUser? <MuiThemeProvider>
              <Header user={Meteor.user()}/></MuiThemeProvider> :  <LoginWindow />}


        </div>

        );

  }

}
export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
  };
}, App);
