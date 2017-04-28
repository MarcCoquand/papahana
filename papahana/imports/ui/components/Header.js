import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '/client/styles/Header.css'
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

 
export default class Header extends Component {

  componentWillMount(){
    this.state = {
      selectedButton: 'Find'
    }
  }

  onClickFind() {
    this.setState({
      selectedButton: 'Find'
    })
  }
  onClickExplore() {
    this.setState({
      selectedButton: 'Explore'
    })
  }
  
  getUserProfilePic(){
    if(this.props.user.profile) 
      return this.props.user.profile.picture;
  }

  render() {
    if (this.props.user) {
      return (
          <div>
            <img className="img-circle" src={this.getUserProfilePic()}/>
            <div className="text">
            {this.props.user.username}
            </div>
            <div className="buttonContainer">
              <RaisedButton 
                className="button"
                label="Find" 
                onTouchTap={() => this.onClickFind()}
                secondary={true}
                disabled={this.state.selectedButton === 'Find'}
              />
              <RaisedButton 
                className="button"
                label="Explore" 
                onTouchTap={() => this.onClickExplore()}
                secondary={true}
                disabled={this.state.selectedButton === 'Explore'}
              />
            </div>
          </div>
          );
    } else {
      return (<div>Not logged in</div>)
    }
  }
}

Header.propTypes =  {
    user:PropTypes.object,
};


