import React from 'react';
import 'typeface-roboto';
import { Container } from '@material-ui/core';
import { Button } from 'reactstrap';
import Help from './Help.js';
import Contact from './Contact.js';

const styles = {
  container: {
    margin: '1vh auto',
  },
  buttonContainer: {
    marginBottom: '15px',
  },
  button: {
    fontSize: '1em',
    margin: '0 10px',
  },
  collapseStyles: {
    margin: '10px auto',
  },
  textBody: {
    fontSize: '0.8em',
  }
}

class InfoSection extends React.Component {
  constructor(props) {
    super(props);
    this.toggleHelp = this.toggleHelp.bind(this);
    this.toggleContact = this.toggleContact.bind(this);
    this.state = {
      helpCollapse: false,
      contactCollapse: false
    };
  }

  toggleHelp() {
    this.setState(state => ({
      helpCollapse: !state.helpCollapse,
      contactCollapse: false,
    }));
  }

  toggleContact() {
    this.setState(state => ({
      contactCollapse: !state.contactCollapse,
      helpCollapse: false,
    }));
  }

  render() {
    return (
      <Container style={styles.container}>
        <div style={styles.buttonContainer}>
          <Button color='info' style={styles.button} onClick={this.toggleHelp}>Help</Button>
          <Button color='warning' style={styles.button} onClick={this.toggleContact}>Report</Button>
        </div>
        <Help collapse={this.state.helpCollapse} collapseStyles={styles.collapseStyles} textBodyStyles={styles.textBody}/>
        <Contact collapse={this.state.contactCollapse} collapseStyles={styles.collapseStyles} textBodyStyles={styles.textBody}/>
      </Container>
    )
  }
}

export default InfoSection;
