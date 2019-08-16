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
      <Container className="help" style={styles.container}>
        <Button color='info' style={styles.button} onClick={this.toggle}>Help</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody styles={styles.body}>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
             Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid. Nihil
              anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident.
              Anim pariatur cliche reprehenderit,
               enim eiusmod high life accusamus terry richardson ad squid. Nihil
               anim keffiyeh helvetica, craft beer labore wes anderson cred
               nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </Container>
    )
  }
}

export default Help;
