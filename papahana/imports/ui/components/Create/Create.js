import React, { Component } from 'react';
import { createContainer  } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import '/client/styles/Find.css'
import injectTapEventPlugin from 'react-tap-event-plugin';

import FlatButton from 'material-ui/FlatButton';
import ReactDOM from "react-dom";
import { Meteor } from 'meteor/meteor';
import { Projects } from '/imports/api/projects.js';
import NoEvent from '/imports/ui/components/Create/NoEvent'
import { Grid, Row, Col } from 'react-flexbox-grid';
// material-ui uses styles that are like this for some reason...



// Handles finding projects and the logic with the upvote and downvote buttons
class Create extends Component {

  componentWillMount(){
    this.state = {
      projectIndex: 0,
      cardAvailable: false,
    }
  }

  renderCard(){
    return(
        <div>
          No available cards. :(
        </div>
    )
  }

  render() {
    return(
      <div>
      {this.state.cardAvailable ? this.renderCard() : <NoEvent />}
      </div>
    )
  }
}
Create.propTypes =  {
  projects: PropTypes.array.isRequired,
};

export default createContainer (() => {
  Meteor.subscribe('projects');
  return {
    projects: Projects.find({}).fetch(),
  };
}, Create);
