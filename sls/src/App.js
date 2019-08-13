import React from 'react';
import 'typeface-roboto';
import {Container} from '@material-ui/core';
import './App.css';
import withWasherStatus from './Root.js';
import {map} from 'lodash';
import Washer from './components/Washer.js'

const createWashers = (data) => (
    map(data, (value, key) => (
        <Washer key={key} status={value}/>
    ))
);

function App({data}) {
  console.log(data);
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
        {createWashers(data)}
      <Container className="App-body">

      </Container>
    </div>
  );
}

export default withWasherStatus(App);
