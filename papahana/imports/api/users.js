import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import userConstants from '/imports/constants/userConstants'

// Each project contains
// Id
// Title
// Date
// Location
// Amount of persons needed
// A Description
// A picture?


if (Meteor.isServer) {
    // This code only runs on the server
	Meteor.publish("userData", function () {
	    	return Meteor.users.find({_id: this.userId})
		}
	);
}

Meteor.methods({

  'users.updateInfo'(description, programmingCheck, foodCheck, musicCheck, sportsCheck, adventureCheck) {

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }



    const newPreference ={
	    desc: description,
		progCheck: programmingCheck,
		foodCheck: foodCheck,
		musicCheck: musicCheck,
		sportsCheck: sportsCheck,
		adventureCheck: adventureCheck,

    }
    //TODO VALIDATE

    Meteor.users.update(this.userId,
    	{$set: {
    		preference: newPreference,
    	}
    })
    console.log(Meteor.user())
  },

});

