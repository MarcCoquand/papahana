import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import findConstants from '/imports/constants/findConstants'

// Each project contains
// Id
// Title
// Date
// Location
// Amount of persons needed
// A Description
// A picture?
export const Projects = new Mongo.Collection('projects');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('projects', function projectsPublication() {
      return Projects.find();
   });
}

Meteor.methods({
  'projects.insert'(title, date, loc, people, description) 
  {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    //TODO VALIDATE

    Projects.insert({
      title,
      date,
      loc,
      people,
      description
    })
  },
});


