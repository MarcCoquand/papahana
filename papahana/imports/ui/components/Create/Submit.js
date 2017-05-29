
import React, { Component } from 'react';
import { createContainer  } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import injectTapEventPlugin from 'react-tap-event-plugin';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';


const style = {
    marginRight: 20,

};

// Handles finding projects and the logic with the upvote and downvote buttons
export default class Submit extends Component {

  componentWillMount(){
    this.state = {
    }
  }

  render() {
    return(
        <div className="submitButton">
         <FloatingActionButton
          className="button"
          style={style}
          onTouchTap={() => this.props.onTap()}>
          <FontIcon className="material-icons">
            done
          </FontIcon>
         </FloatingActionButton>
        </div>
    )
  }
}
Submit.propTypes =  {
  onTap : PropTypes.func,
};
