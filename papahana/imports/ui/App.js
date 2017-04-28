import React, { Component  } from 'react';
import { createContainer  } from 'meteor/react-meteor-data';

import AccountUI from './components/AccountsUIWrapper'
import { Meteor } from 'meteor/meteor'
import Header from './components/Header'
 

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
          {this.props.currentUser? '' : <AccountUI />}
          <ul>
            {this.props.currentUser? <Header user={Meteor.user()}/> : ''}
          </ul>
        </div>

        );

  }

}
export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
  };
}, App);
