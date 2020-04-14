import React, { useEffect, useState } from 'react';
import 'typeface-roboto';
import { Container } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { map } from 'lodash';
import Washer from './components/Washer.js';
import InfoSection from './components/InfoSection.js';
import logo from './images/logo.png';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const createWashers = (data) =>
  map(data, (value, key) => (
    <div key={key} className="item">
      <Washer status={value} />
    </div>
  ));

const query = gql`
  query {
    washers {
      id
      in_use
    }
  }
`;

function App() {
  const [washerData, setWasherData] = useState({ 1: -1, 2: -1, 3: -1, 4: -1 });
  const { data, error } = useQuery(query, { fetchPolicy: 'network-only' });

  if (error) console.log(error);
  useEffect(() => {
    if (data && data.washers) {
      const newData = {};
      data.washers.forEach(
        (washer) => (newData[washer.id] = washer.in_use ? 1 : 0)
      );
      setWasherData(newData);
    }
  }, [data]);

  return (
    <div className="App">
      <Container className="App-header">
        <div>
          <a
            href="http://rctech.club"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="logo" src={logo} alt="RCTECH" />
          </a>
        </div>
        <div className="header-text">Smart Laundry System</div>
      </Container>

      <Container className="App-body">
        <div className="container">{createWashers(washerData)}</div>

        <InfoSection />
      </Container>
    </div>
  );
}

export default App;
