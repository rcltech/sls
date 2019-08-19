import React from 'react';
import 'typeface-roboto';
import {Container} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './images/logo.png';
import offlineCat from './images/offline-cat.jpeg';

function App({data}) {
  return (
    <div className="App">
      <Container className="App-header">
        <div>
          <img className="logo" src={logo} alt="RCTECH"/>
        </div>
        <div className="header-text">
          Smart Laundry System
        </div>

      </Container>

      <Container className="App-body">

        <div className="offline-container">
          <div>
            <img className="offline-cat" src={offlineCat} alt="offline cat" />
          </div>
          <div className="offline-text">
            Sorry for any inconvenience caused. We are racing to get it back online. Please check again later.
          </div>
        </div>

      </Container>
    </div>
  );
}

export default App;
