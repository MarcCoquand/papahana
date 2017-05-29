import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Find from '/imports/ui/components/Find/Find';
import Profile from '/imports/ui/components/Profile/Profile';
import Create from '/imports/ui/components/Create/Create';
import Avatar from 'material-ui/Avatar';
import '/client/styles/Header.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import YourEvents from '/imports/ui/components/YourEvents/YourEvents';

injectTapEventPlugin();

//Don't know why but this has to be here....
const styles = {
  large: {
    margin: 'auto',
    marginTop: '0em',
    display: 'block',
    width: 100,
    height: 100,
  },
  headerBHutton:{
    margin: 12,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  }

}

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
      selectedButton: 'Create'
    })
  }
  onClickProfile() {
    this.setState({
      selectedButton: 'Profile'
    })
  }
  onClickAttending() {
    this.setState({
      selectedButton: 'Attending'
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
            <IconButton
              style={styles.large}
              onTouchTap={() => this.onClickProfile()}
              iconClassName="img-circle">
              <img className="img-circle" src={this.getUserProfilePic()}/>
            </IconButton>
            <div className="text">
            {this.props.user.username}
            </div>


            <div className="buttonContainer">
              <RaisedButton
                style={styles.headerBHutton}
                className="button"
                label="Explore"

                onTouchTap={() => this.onClickFind()}
                disabled={this.state.selectedButton === 'Find'}
              />
              <RaisedButton
                className="button"
                style={styles.headerBHutton}
                label="New"

                onTouchTap={() => this.onClickExplore()}
                disabled={this.state.selectedButton === 'Create'}
              />
              <RaisedButton
                className="button"
                style={styles.headerBHutton}
                label="Created"
                 
                onTouchTap={() => this.onClickAttending()}
                disabled={this.state.selectedButton === 'Attending'}
              />
            </div>

            {/* FILL THIS IN WITH THE IMPLEMENTED COMPONENT */}
            {this.state.selectedButton === 'Find' ? <Find /> : ''}

            {/* FILL THIS IN WITH THE IMPLEMENTED COMPONENT */}
            {this.state.selectedButton === 'Attending' ?
              <YourEvents user={this.props.user}/> : ''}

            {/* FILL THIS IN WITH THE IMPLEMENTED COMPONENT */}
            {this.state.selectedButton === 'Create' ? <Create /> : ''}

            {/* FILL THIS IN WITH THE IMPLEMENTED COMPONENT */}
            {this.state.selectedButton === 'Profile' ? <Profile user={this.props.user}/> : ''}
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
