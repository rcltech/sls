import React from 'react';
import 'typeface-roboto';
import {Container} from '@material-ui/core';
import { Button, Collapse, Card, CardBody } from 'reactstrap';

const styles = {
  container: {
    margin: '1vh auto',
  },
  button: {
    fontSize: '1em',
    marginBottom: '15px',
  },
  body: {
    fontSize: '0.8em',
  }
}

class Help extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <Container className="contact" style={styles.container}>
        <Button color='warning' style={styles.button} onClick={this.toggle}>Report</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody styles={styles.body}>
              To report any problems with SLS, please <a href="mailto:rcltechclub@gmail.com?subject=SLS%20Problem">contact us by email</a>.
            </CardBody>
          </Card>
        </Collapse>
      </Container>
    )
  }
}

export default Help;
