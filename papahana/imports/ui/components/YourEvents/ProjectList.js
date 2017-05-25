import React, { Component } from 'react';
import { createContainer  } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import {Card, 
        CardActions, 
        CardHeader, 
        CardMedia, 
        CardTitle, 
        CardText} from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';
import ProjectCard from './ProjectCard'

// Takes a list of projects and renders them 
export default class ProjectList extends Component {

  componentWillMount(){
    this.state = {
    }
  }

  renderProject(p) {
    return (
        <Project project={p}/>
        )
  }

  render() {
    return(
        <div>
          {this.props.projects.map ((p) => this.renderProject(p))}
        </div>
    )
  }
}
ProjectList.propTypes =  {
  projects: PropTypes.object.isRequired,
};


