import React from 'react';
import Icons from './Icons';
import Demo from './Demo';
import 'typeface-roboto';
import {Container} from '@material-ui/core';
import { Button, Collapse, Card, CardBody } from 'reactstrap';

class Help extends React.Component {
  constructor(props) {
    super(props);
  }

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
