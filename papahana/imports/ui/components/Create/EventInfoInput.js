import React, { Component } from 'react';
import { createContainer  } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Input from 'react-toolbox/lib/input';


import ReactDOM from "react-dom";
import { Meteor } from 'meteor/meteor';
import { Projects } from '/imports/api/projects.js';
import constants from '/imports/constants/findConstants'
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import '/client/styles/Find.css'
import { Grid, Row, Col } from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Submit from '/imports/ui/components/Create/Submit'

export default class EventInfoInput extends Component {
  componentWillMount(){
    this.state = {
      titleInput:'',
      dateInput:null,
      locInput:'',
      peopleInput:'',
      descInput:'',
    }
  }
  handleNameChange = (event) => {
     this.setState({
       titleInput: event.target.value,
     });
  };

  handleDateChange = (event, date) => {
     this.setState({
      dateInput: date,
     });
  };
  handleLocChange = (event) => {
     this.setState({
       locInput: event.target.value,
     });
  };
  handlePeopleChange = (event) => {
     this.setState({
       peopleInput: event.target.value,
     });
  };

  handleDescChange = (event) => {
     this.setState({
       descInput: event.target.value,
     });
  };

  onSubmit = () => {
    Meteor.call(constants.PROJECTS_INSERT, this.state.titleInput,
    this.state.dateInput, this.state.locInput, this.state.peopleInput,
    this.state.descInput, Meteor.userId(), Meteor.user().profile.picture)

    this.setState({
      titleInput:"",
      dateInput:undefined,
      locInput:"",
      peopleInput:"",
      descInput:"",
    });
  }
  render() {
    return(
      <div className="input-text">
      <div className="titel">PROJECT INFO
      </div>
       <TextField
             hintText="Project name"
             floatingLabelText="Project name"
             value={this.state.titleInput}
             onChange={this.handleNameChange}
             />

       <DatePicker
             hintText="Date"
             floatingLabelText="Date"
             value={this.state.dateInput}
             onChange={this.handleDateChange}
            />

      <TextField
            hintText="Location"
            floatingLabelText="Location"
            value={this.state.locInput}
            onChange={this.handleLocChange}
            />

      <TextField
            hintText="Number of people"
            floatingLabelText="Number of people"
            value={this.state.peopleInput}
            onChange={this.handlePeopleChange}
            />

       <TextField
             hintText="Description"

             multiLine={true}
             rows={2}
             value={this.state.descInput}
             onChange={this.handleDescChange}
           />

  <Submit onTap={() => this.onSubmit()}/>
      </div>
    )
  }
}

EventInfoInput.propTypes =  {
  project: PropTypes.object,
};
