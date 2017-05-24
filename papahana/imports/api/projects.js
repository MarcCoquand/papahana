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
  'projects.addUserToWishList'(projectId){
    if (!Meteor.userId) {
      throw new Meteor.Error ("ERROR: NOT AUTHORISED");
    }

    let user = Meteor.userId();
    let project = Projects.find(projectId).fetch();
    if (project == null || project.length > 1) {
      throw new Meteor.Error ("ERROR: INVALID PROJECT ID");
    }
    let newWishList = project[0].wishList;
    if (newWishList) {
      if (newWishList.includes(Meteor.userId())) {
        throw new Meteor.Error ("ERROR: USER ALREADY IN WISHLIST");
      }

      newWishList.push(user);
    } else {
      newWishList = [user]
    }


    Projects.update(
        projectId,
        {$set:{
          "wishList": newWishList,}
        }
    )

  },

  'projects.insert'(title, dat, loc, people, description, userId)
  {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    // List of users who which to attend
    let attending = [userId];
    let wishList = [];
    //TODO VALIDATE

    Projects.insert({
      title,
      dat,
      loc,
      people,
      attending,
      wishList,
      description,
    })
  },
});


//Adds a project to the user so that user can access it in attending events
const addProjectToUser = (projectId, userId) => {
  if (!this.userId) {
    throw new Meteor.Error ("ERROR: NOT AUTHORISED");
  }

  let project = Projects.find(projectId).fetch();

  if (project == null || project.length > 1) {
    throw new Meteor.Error ("ERROR: INVALID PROJECT ID");
  }

  if (Meteor.user().attending) {
    let projectList = Meteor.user().attending;
    projectList.push(project)
  } else {
    let projectList = [project];
  }

  Meteor.users.update(
      {_id: userId},
      {$set:{
              "attending" : projectList
            }})

}
