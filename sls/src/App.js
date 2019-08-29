import React from 'react';
import 'typeface-roboto';
import {Container} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import withWasherStatus from './Root.js';
import {map} from 'lodash';
import Washer from './components/Washer.js';
import InfoSection from './components/InfoSection.js';
import logo from './images/logo.png';

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
          <a href='http://rctech.club' target='_blank' rel='noopener noreferrer'>
            <img className="logo" src={logo} alt="RCTECH"/>
          </a>
        </div>
        <div className="header-text">
          Smart Laundry System
        </div>

      </Container>

      <Container className="App-body">
        <div className="container">
          {createWashers(data)}
        </div>

        <InfoSection />

      </Container>
    </div>
  );
}

export default withWasherStatus(App);
