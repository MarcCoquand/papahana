import React, { Component } from 'react';
import { createContainer  } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import '/client/styles/Find.css'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import ReactDOM from "react-dom";
import { Meteor } from 'meteor/meteor';
import { Projects } from '/imports/api/projects.js';
import EventInfoInput from '/imports/ui/components/Create/EventInfoInput'
export default class NoEvent extends Component {

  componentWillMount(){
    this.state = {
    }
  }
  render() {
    return(
      <div className="main-box">
      <Row>
          <Col xs={12} sm={12} md={7} >
          <div className="card-picture">
          </div>
          </Col>
          <Col xs={12} sm={12} md={5} >
          <EventInfoInput />
          </Col>
      </Row>
      </div>

    )
  }
}

NoEvent.propTypes =  {
  project: PropTypes.object,
};
