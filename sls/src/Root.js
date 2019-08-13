import React from 'react';
import axios from 'axios'
const firebase_url = 'https://us-central1-rcsls-2018.cloudfunctions.net/getWasherStatus';

function withWasherStatus(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {}
      };
    }

    async componentDidMount() {
      const data = await axios.get(firebase_url);
      this.setState({
        data
      })
    }

    render() {
      return <WrappedComponent data={this.state.data.data} {...this.props} />;
    }
  };
}

export default withWasherStatus;
