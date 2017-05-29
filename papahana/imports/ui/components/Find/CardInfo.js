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
import { Grid, Row, Col } from 'react-flexbox-grid';
import '/client/styles/Find.css'

// material-ui uses styles that are like this for some reason...
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
// material-ui uses styles that are like this for some reason...
import Divider from 'material-ui/Divider';

const style = {
  margin: 50,
};
export default class CardInfo extends Component {

  componentWillMount(){
    this.state = {
    }
  }


  convertDate(){
    return this.props.project.dat.toISOString().substring(0, 10);
  }
  render() {
    return(
      <div>
        <div className="titel">{this.props.project.title}</div>
        <br />
        <div className="findInput-text">
              <div className="findInfoText">
              <h4>Date</h4>
              {this.convertDate()}
              <Divider />
              <br />
              <h4>Location</h4>
              {this.props.project.loc}
              <Divider />
              <br />
              <h4>Number of people</h4>
              {this.props.project.people}
              <Divider />
              <br />
              <h4>Description</h4>
              {this.props.project.description}
              <Divider />
              
              </div>
        </div>
      </div>
    )
  }
}

CardInfo.propTypes =  {
  project: PropTypes.object.isRequired,
};
