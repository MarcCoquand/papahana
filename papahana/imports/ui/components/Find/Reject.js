
import React, { Component } from 'react';
import { createContainer  } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import '/client/styles/Find.css'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, 
        CardActions, 
        CardHeader, 
        CardMedia, 
        CardTitle, 
        CardText} from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';



// Handles finding projects and the logic with the upvote and downvote buttons
export default class Reject extends Component {

  componentWillMount(){
    this.state = {
    }
  }
  
  render() {
    return(
        <div>
        </div>
    )
  }
}
Reject.propTypes =  {
};

