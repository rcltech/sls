import React from 'react';
import Icons from './Icons';
import Demo from './Demo';
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
      <Container className="help" style={styles.container}>
        <Button color='info' style={styles.button} onClick={this.toggle}>Help</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody styles={styles.body}>
              <Icons />
              <Demo />
            </CardBody>
          </Card>
        </Collapse>
      </Container>
    )
  }
}

export default Help;
