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
import CardInfo from './CardInfo'
import constants from '/imports/constants/findConstants'
import NoCard from '/imports/ui/components/Find/NoCard'

import Attend from '/imports/ui/components/Find/Attend'
import Reject from '/imports/ui/components/Find/Reject'
import { Grid, Row, Col } from 'react-flexbox-grid';




// Handles finding projects and the logic with the upvote and downvote buttons
class Find extends Component {

  componentWillMount(){
    this.state = {
      projectIndex: 0,
      cardAvailable: false,
    }
  }

  renderCard() {
    var imgUrl = this.props.projects[this.state.projectIndex].picture;

       var divStyle = {
           backgroundImage: 'url(' + imgUrl + ')'
       }
    //Check that there exist projects
    if (this.props.projects[this.state.projectIndex] != undefined){
      return (
        <div className="main-box" >
        <Row>
            <Col xs={12} sm={12} md={7} className="findCard-picture" style={divStyle}>
            <div className="card-invis"></div>
            </Col>
            <Col xs={12} sm={12} md={5} >
             <CardInfo project={this.props.projects[this.state.projectIndex]}/>

          <div className="submitButton">
             <div className="findButtons">
             {(this.props.projects[this.state.projectIndex] != undefined) ?
               <Reject onTap={() => this.onClickReject()}/> : ''}
            </div>
            <div className="findButtons">
             {(this.props.projects[this.state.projectIndex] != undefined) ?
               <Attend onTap={() => this.onClickAttend()}/> : ''}
            </div>
          </div>
            </Col>
        </Row>
        </div>

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
