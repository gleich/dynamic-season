import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
        }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log('My component was just updated - it rendered again!');
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error {this.state.errorMessage}</div>;
    }
    return <SeasonDisplay lat={this.state.lat} />;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
