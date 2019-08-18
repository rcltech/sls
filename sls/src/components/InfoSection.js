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
};

class InfoSection extends React.Component {
  state = {
    helpCollapse: false,
    contactCollapse: false,
  };

  toggleHelp = () => {
    this.setState(state => ({
      helpCollapse: !state.helpCollapse,
      contactCollapse: false,
    }));
  };

  toggleContact = () => {
    this.setState(state => ({
      contactCollapse: !state.contactCollapse,
      helpCollapse: false,
    }));
  };

  render() {
    const {helpCollapse, contactCollapse} = this.state;
    return (
      <Container style={styles.container}>
        <div style={styles.buttonContainer}>
          <Button color='info' style={styles.button} onClick={this.toggleHelp}>Help</Button>
          <Button color='warning' style={styles.button} onClick={this.toggleContact}>Report</Button>
        </div>
        <Help collapse={helpCollapse} collapseStyles={styles.collapseStyles} textBodyStyles={styles.textBody}/>
        <Contact collapse={contactCollapse} collapseStyles={styles.collapseStyles} textBodyStyles={styles.textBody}/>
      </Container>
    )
  }
}

export default InfoSection;
