import React from 'react';
import 'typeface-roboto';
import {Container} from '@material-ui/core';
import './App.css';
import withWasherStatus from './Root.js';
import {map} from 'lodash';
import Washer from './components/Washer.js'

const createWashers = (data) => (
    map(data, (value, key) => (
        <div className="item">
          <Washer key={key} status={value}/>
        </div>
    ))
);

function App({data}) {
  return (
    <div className="App">
      <Container className="App-header">
        <div>
          <img className="logo" src="RCTECH-logo_chubby.png" alt="RCTECH-logo_chubby"/>
        </div>
        <div className="header-text">
          Smart Laundry System
        </div>

      </Container>

      <Container className="App-body">
        <div className="container">
          {createWashers(data)}
        </div>
      </Container>
    </div>
  );
}

export default withWasherStatus(App);
