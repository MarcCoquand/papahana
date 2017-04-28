import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import '/client/styles/Find.css'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//Don't know why but this has to be here....
const styles = {
  cardContain: {
    margin: '1em auto',
    display: 'block',
  },
}

 
export default class Find extends Component {

  componentWillMount(){
    this.state = {
    }
  }
  render() {
    return(
      <div className="cardContainer">
        <Card style={styles.cardContain}>
          <CardTitle title="Card title" subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
          </CardActions>
          </Card>
      </div>
    )
  }
}

Find.propTypes =  {
};


