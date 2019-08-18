import React from 'react';
import Icons from './Icons';
import Demo from './Demo';
import 'typeface-roboto';
import { Collapse, Card, CardBody } from 'reactstrap';

class Help extends React.Component {
  render() {
    return (
        <Collapse isOpen={this.props.collapse} style={this.props.collapseStyles}>
          <Card>
            <CardBody style={this.props.textBodyStyles}>
              <Icons />
              <Demo />
            </CardBody>
          </Card>
        </Collapse>
    )
  }
}

export default Help;
