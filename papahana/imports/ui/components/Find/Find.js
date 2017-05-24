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
    margin: '0em auto',
    display: 'block',
  },
}

 
// Handles finding projects and the logic with the upvote and downvote buttons
class Find extends Component {

  componentWillMount(){
    this.state = {
      projectIndex: 0,
      cardAvailable: false,
    }
  }


  renderCard() {
    //Check that there exist projects
    if (this.props.projects[this.state.projectIndex] != undefined){
      return (
        <CardInfo project={this.props.projects[this.state.projectIndex]}/>
        )
      //Check if project contains the user
      //if so then jump to the next project
    } else {
      return ''
    }
  }

  nextCard(index) {
    //pop first item from queue for the user
    if (this.props.projects[index] != undefined) {
      this.setState({
        cardAvailable: true,
        projectIndex: index,
      })
    } 
    //TODO: animate transition
  }

  onClickAttend() {
    Meteor.call(constants.PROJECTS_ADDUSERTOWISHLIST, 
        this.props.projects[this.state.projectIndex])
    
    this.nextCard(this.state.projectIndex)
  }

  onClickReject() {
    index = this.state.projectIndex + 1;
    this.setState({
      projectIndex: index,
    })
    this.nextCard(index)
  }

  
  render() {
    return(
        <div>
          {(this.props.projects[this.state.projectIndex] != undefined) ? 
            this.renderCard() : <NoCard />}
          <Col xs>
          <Row center="xs">
            {(this.props.projects[this.state.projectIndex] != undefined) ? 
              <Reject onTap={() => this.onClickReject()}/> : ''}
            {(this.props.projects[this.state.projectIndex] != undefined) ? 
              <Attend onTap={() => this.onClickAttend()}/> : ''}
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
    projects: Projects.find({wishList: {$not: 
      {$eq:Meteor.userId()}}}).fetch(),
  };
}, Find);



