import React from 'react';
import 'typeface-roboto';
import {Container} from '@material-ui/core';
import './App.css';
import withWasherStatus from './Root.js';
import lodash from 'lodash';
import Washer from './components/Washer.js'

const createWashers = (data) => {
  const washers = lodash.map(data, (value, key) => {
    return (
      <Washer key={key} status={value}/>
    )
  })
  return washers;
}

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
