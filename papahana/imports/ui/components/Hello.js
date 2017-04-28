import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import '/client/styles/profile.css'
 
export default class Hello extends Component {
  getUserProfilePic(){
    if(this.props.user.profile) 
      return this.props.user.profile.picture;
  }
  render() {
    if (this.props.user) {
      return (
          <div>
            Hello {this.props.user.username}
            <img className="img-circle" src={this.getUserProfilePic()}/>
          </div>
          );
    } else {
      return (<div>Not logged in</div>)
    }
  }
}

Hello.propTypes =  {
    user:PropTypes.object,
};

