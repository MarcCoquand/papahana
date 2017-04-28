import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '/client/styles/Header.css'
 
export default class Header extends Component {
  getUserProfilePic(){
    if(this.props.user.profile) 
      return this.props.user.profile.picture;
  }
  render() {
    if (this.props.user) {
      return (
          <div>
            <img className="img-circle" src={this.getUserProfilePic()}/>
            <div className="text">
            {this.props.user.username}
            </div>
          </div>
          );
    } else {
      return (<div>Not logged in</div>)
    }
  }
}

Header.propTypes =  {
    user:PropTypes.object,
};


