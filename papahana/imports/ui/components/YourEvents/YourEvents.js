import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Projects } from '/imports/api/projects.js';
import { createContainer  } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import NoEvents from '/imports/ui/components/YourEvents/NoEvents';

// Shows all the projects in which the user is on the wishlist for and also 
// is allowed to attend
class YourEvents extends Component {

  componentWillMount(){
    this.state = {
      eventsAvailable: false,
    }
  }

  renderAttendingList() {

  }

  renderWishList () {
    console.log(this.props.projectsWishList)
  }
  
  render() {
    return(
        <div>
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
    projectsWishList: Projects.find({
      wishList: this.userId
    }).fetch(),
    projectsAttendList: Projects.find({
      attending: this.userId
    }).fetch(),
  };
}, YourEvents);




