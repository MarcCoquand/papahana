import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Projects } from '/imports/api/projects.js';
import { createContainer  } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import NoEvents from '/imports/ui/components/YourEvents/NoEvents';
import ProjectList from '/imports/ui/components/YourEvents/ProjectList'

// Shows all the projects in which the user is on the wishlist for and also 
// is allowed to attend
class YourEvents extends Component {

  componentWillMount(){
    if (this.props.projectWishList) {
      this.state = {
        eventsAvailable: true,
      }
    } else {
      this.state = {
        eventsAvailable: false,
      }
    }
  }

  renderAttendingList() {

  }

  renderWishList () {
    console.log(Meteor.userId())
    if (this.props.projectWishList) {
      this.setState({
        eventsAvailable: true
      });
      return (
          <div>
            <ProjectList projects={this.props.projectWishList}/>
          </div>
          )
    }
  }
  
  render() {
    return(
        <div>
          Pending approval:
          {this.renderWishList()}
          {this.state.eventsAvailable ? '' : <NoEvents />}
        </div>
    )
  }
}
YourEvents.propTypes =  {
  projectsWishList: PropTypes.array.isRequired,
  projectsAttendList: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default createContainer (() => {
  Meteor.subscribe('projects');
  return {
    projectsWishList: Projects.find({wishList: 
      {$eq:Meteor.userId()}}).fetch(),
    projectsAttendList: Projects.find({attending: 
      {$eq:Meteor.userId()}}).fetch(),
  };
}, YourEvents);




