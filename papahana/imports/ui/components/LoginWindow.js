import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import AccountUI from './AccountsUIWrapper'
import '/client/styles/LoginWindow.css'
import { Grid, Row, Col } from 'react-flexbox-grid';
export default class LoginWindow extends Component {





  render() {
    if (!this.props.user) {
      return (
          <div>
            <video autoPlay loop className="video-background" muted>
              <source src=
              "/flower-bloom.mp4" type="video/mp4">
              </source>
            </video>

            <Row>
              <Col xs={12}>
                <Row center="xs">
                  <Col xs={7} className="flux-centerblock">
                  <h1 className="welcome-text">Welcome to Papahana</h1>
                  <div className="facebook-button"><AccountUI /></div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
      );
    } else {
      return (<div>Not logged in</div>)
    }
  }
}

LoginWindow.propTypes =  {
    user:PropTypes.object,
};
