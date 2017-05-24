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

const style = {
marginLeft: 40,

};
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
    this.state.descInput, Meteor.userId())
  }

  render() {
    return(
      <div className="input-text">
      <h3>Project info

      </h3>
       <TextField
             hintText="Project name"
             floatingLabelText="Project name"
             value={this.state.titleInput}
             onChange={this.handleNameChange}
             />
      <br />
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
  <br />
      <TextField
            hintText="Number of people"
            floatingLabelText="Number of people"
            value={this.state.peopleInput}
            onChange={this.handlePeopleChange}
            />
  <br />
       <TextField
             hintText="Description"

             multiLine={true}
             rows={3}
             value={this.state.descInput}
             onChange={this.handleDescChange}
           />
  <br />
  <Submit onTap={() => this.onSubmit()}/>


      </div>
    )
  }
}

EventInfoInput.propTypes =  {
  project: PropTypes.object,
};
