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
import NoCard from '/imports/ui/components/Find/NoCard'

import Attend from '/imports/ui/components/Find/Attend'
import Reject from '/imports/ui/components/Find/Reject'
import { Grid, Row, Col } from 'react-flexbox-grid';

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
      projectIndex: 0,
      cardAvailable: true,
    }
  }
  renderCard() {
    //Check that there exist projects
    if (this.props.projects.length > 0) {
      return (
        <CardInfo project={this.props.projects[this.state.projectIndex]}/>
        )
      //Check if project contains the user
      //if so then jump to the next project
    }
  }

  nextCard() {
    //pop first item from queue for the user
    index = this.state.projectIndex + 1;
    //TODO: Remember which cards have already been seen by the user
    if (this.props.projects[index]){
      // If the user has already attended a card it should not show up again
      console.log(Meteor.userId())
      console.log(this.props.projects[index].wishList)
      if (this.props.projects[index].wishList.includes(Meteor.userId())) {
        this.nextCard()
      }
      else {
        this.setState({
          projectIndex: index,
        })
      }
    } else {
      this.setState({
        cardAvailable: false,
      })
    }

    //animate transition
  }

  onClickAttend() {
    Meteor.call(constants.PROJECTS_ADDUSERTOWISHLIST, this.props.projects[0])
    
    this.nextCard()
    console.log('attend')
  }

  onClickReject() {
    this.nextCard()
    console.log('reject')
  }
  
  render() {
    return(
        <div>
          {this.state.cardAvailable ? this.renderCard() : <NoCard />}
          <Col xs>
          <Row center="xs">
            {this.state.cardAvailable ? 
              <Attend onTap={() => this.onClickAttend()}/> : ''}
            {this.state.cardAvailable ? 
              <Reject onTap={() => this.onClickReject()}/> : ''}
          </Row>
          </Col>
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



