import React from "react";
import "typeface-roboto";
import { Collapse, Card, CardBody } from "reactstrap";

class Contact extends React.Component {
  render() {
    const { collapse, collapseStyles, textBodyStyles } = this.props;
    return (
      <Collapse isOpen={collapse} style={collapseStyles}>
        <Card>
          <CardBody style={textBodyStyles}>
            To report any problems with SLS, please{" "}
            <a href="mailto:contact@rctech.club?subject=SLS%20Problem">
              contact us by email
            </a>.
          </CardBody>
        </Card>
      </Collapse>
    );
  }
}

export default Contact;
