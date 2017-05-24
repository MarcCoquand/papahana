import React, { Component } from 'react';
import { createContainer  } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';




// Handles finding projects and the logic with the upvote and downvote buttons
export default class WishList extends Component {

  componentWillMount(){
    this.state = {
    }
  }
  
  render() {
    return(
        <div>
          No available cards. :(
        </div>
    )
  }
}
WishList.propTypes =  {
};


