import React, { Component } from 'react';
import { createContainer  } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import {Card, 
        CardActions, 
        CardHeader, 
        CardMedia, 
        CardTitle, 
        CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import constants from '/imports/constants/userConstants'
import { Meteor } from 'meteor/meteor';
import RaisedButton from 'material-ui/RaisedButton';
import User from '/imports/api/users.js'
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';


const styles = {
  cardContain: {
    margin: '1em auto',
    display: 'block',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};



class Profile extends Component {

  componentWillMount(){
    this.state = {
      description: '',
      checkedProgramming: false,
      checkedFood: false,
      checkedMusic: false,
      checkedSports: false,
      checkedAdventure: false
    }
  }
  
  updateInfo(text){
    this.setState ({
      description: text
    })
  }

  toggleCheckedProgramming() {
    this.setState({
      checkedProgramming: !this.state.checkedProgramming,
    })
  }

  toggleCheckedMusic() {
    this.setState({
      checkedMusic: !this.state.checkedMusic,
    })
  }

  toggleCheckedFood() {
    this.setState({
      checkedFood: !this.state.checkedFood,
    })
  }

  toggleCheckedSports() {
    this.setState({
      checkedSports: !this.state.checkedSports,
    })
  }

  toggleCheckedAdventure() {
    this.setState({
      checkedAdventure: !this.state.checkedAdventure,
    })
  }

  onTextChange(newText) {
    this.setState({
      description: newText.target.value,
    })
  }

  saveChanges() {
    Meteor.call(constants.USERS_UPDATEINFO, 
                this.state.description,
                this.state.checkedProgramming,  this.state.checkedFood, this.state.checkedMusic,
                this.state.checkedSports, this.state.checkedAdventure)
  }
  render() {
    const userClassName = this.props.user.checked ? 'checked' : '';
    return(
        <div className="cardContainer">
          <Card style={styles.cardContain}>
            <CardTitle 
              title="Select your interests"
              subtitle="What do you like to do?"
          />
          
            <CardText>
            <div style={styles.block}>          
              <Checkbox
                label="Programming"
                style={styles.checkbox}
                onClick={() => this.toggleCheckedProgramming()}
              />
              <Checkbox
                label="Food"
                style={styles.checkbox}
                onClick={() => this.toggleCheckedFood()}
              />
              <Checkbox
                label="Music"
                style={styles.checkbox}
                onClick={()=>this.toggleCheckedMusic()}
              />
              <Checkbox
                label="Sports"
                style={styles.checkbox}
                onClick={()=>this.toggleCheckedSports()}
              />
              <Checkbox
                label="Adventure"
                style={styles.checkbox}
                onClick={()=>this.toggleCheckedAdventure()}
              />
            </div>
            <TextField
                hintText="Describe yourself"
                floatingLabelText="Who are you?"
                multiLine={true}
                rows={2}
                onChange={(e) => this.onTextChange(e)}
            />
            <br/>
            </CardText>

             
            <CardActions>
             <RaisedButton label="Save changes" onTouchTap={() => this.saveChanges()} />
            </CardActions>
          </Card>
        </div>
    )
  }
}

export default createContainer (() => {
  Meteor.subscribe('users');
  return {
    users: Meteor.users,
  };
}, Profile);

