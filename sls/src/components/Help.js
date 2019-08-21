import React from 'react';
import Icons from './Icons';
import 'typeface-roboto';
import { Collapse, Card, CardBody } from 'reactstrap';

class Help extends React.Component {
  render() {
      const {collapse, collapseStyles, textBodyStyles} = this.props;
    return (
        <Collapse isOpen={collapse} style={collapseStyles}>
          <Card>
            <CardBody style={textBodyStyles}>
              <Icons />
            </CardBody>
          </Card>
        </Collapse>
    )
  }
}

export default Help;
