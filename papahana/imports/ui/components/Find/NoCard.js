import React, { Component } from 'react';
import { createContainer  } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import '/client/styles/Find.css'
import injectTapEventPlugin from 'react-tap-event-plugin';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const style = {
    marginRight: 20,

};

// Handles finding projects and the logic with the upvote and downvote buttons
export default class NoCard extends Component {

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
NoCard.propTypes =  {
};


