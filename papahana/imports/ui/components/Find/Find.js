import React, { Component } from 'react';
import { createContainer  } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import '/client/styles/Find.css'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, 
        CardActions, 
        CardHeader, 
        CardMedia, 
        CardTitle, 
        CardText} from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';
import ReactDOM from "react-dom";
import { Meteor } from 'meteor/meteor';
import { Projects } from '/imports/api/projects.js';
import CardInfo from './CardInfo'
import constants from '/imports/constants/findConstants'

import Attend from '/imports/ui/components/Find/Attend'
import Reject from '/imports/ui/components/Find/Reject'

// material-ui uses styles that are like this for some reason...
const styles = {
  cardContain: {
    margin: '1em auto',
    display: 'block',
  },
}

 
// Handles finding projects and the logic with the upvote and downvote buttons
class Find extends Component {

  componentWillMount(){
    this.state = {
      projects: this.props.projects,
    }
  }
  renderCard() {
    if (this.props.projects.length > 0) {
      return (
          <CardInfo project={this.props.projects[0]}/>
          )
    } else {
      return ''
    }
  }

  onClickAttend() {
    
  }

  onClickReject() {

  }
  
  render() {
    console.log(this.state.projects)
    return(
        <div>
          {this.renderCard()}
          <div>
            <Attend onClick={this.onClickAttend()}/>
            <Reject onClick={this.onClickReject()}/>
          </div>
        </div>
    )
  }
}
Find.propTypes =  {
  projects: PropTypes.array.isRequired,
};

export default createContainer (() => {
  Meteor.subscribe('projects');
  return {
    projects: Projects.find({}).fetch(),
  };
}, Find);



