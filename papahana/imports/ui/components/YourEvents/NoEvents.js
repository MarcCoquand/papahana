import React, { Component } from 'react';
import { createContainer  } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

// Handles finding projects and the logic with the upvote and downvote buttons
export default class NoEvent extends Component {

  componentWillMount(){
    this.state = {
    }
  }
  
  render() {
    return(
        <div>
          You haven't attended any events, go to Find to find events to attend!
        </div>
    )
  }
}
NoEvent.propTypes =  {
};


