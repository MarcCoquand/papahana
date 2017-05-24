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

// Takes a single project and renders it
export default class ProjectCard extends Component {

  componentWillMount(){
    this.state = {
    }
  }

  renderProject() {
    return (
      <div className="cardContainer">
        <Card style={styles.cardContain}>
          <CardTitle 
            title={this.props.project.title} 
            subtitle={this.props.project.date} 
          />
          <CardText>
            {this.props.project.description}
          </CardText>
          <CardActions>
          </CardActions>
          </Card>
      </div>
    )

  }
  
  render() {
    return(
        <div>
          {this.renderProject()}
        </div>
    )
  }
}
ProjectCard.propTypes =  {
  project: PropTypes.object.required,
};


