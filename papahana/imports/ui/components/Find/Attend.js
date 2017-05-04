
import React, { Component } from 'react';
import { createContainer  } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import '/client/styles/Find.css'
import injectTapEventPlugin from 'react-tap-event-plugin';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const style = {
    marginRight: 20,

};

// Handles finding projects and the logic with the upvote and downvote buttons
export default class Attend extends Component {

  componentWillMount(){
    this.state = {
    }
  }
  
  render() {
    return(
        <div>
         <FloatingActionButton 
          className="button"
          style={style}
          onTouchTap={() => this.props.onTap()}>
          <FontIcon className="material-icons">
            event_available
          </FontIcon>
         </FloatingActionButton>
        </div>
    )
  }
}
Attend.propTypes =  {
  onTap : PropTypes.func,
};


