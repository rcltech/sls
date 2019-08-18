import React from 'react';
import 'typeface-roboto';
import {Collapse, Card, CardBody } from 'reactstrap';

class Contact extends React.Component {
  render() {
    return (
        <Collapse isOpen={this.props.collapse} style={this.props.collapseStyles}>
          <Card>
            <CardBody style={this.props.textBodyStyles}>
            To report any problems with SLS, please <a href="mailto:rcltechclub@gmail.com?subject=SLS%20Problem">contact us by email</a>.
            </CardBody>
          </Card>
        </Collapse>
    )
  }
}

export default Contact;
