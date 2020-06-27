import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, long: null, errorMessage: '' };
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    return (
      <div>
        Latitude:{' '}
        {this.state.errorMessage === ''
          ? this.state.lat == null
            ? '🔄 Loading'
            : this.state.lat
          : this.state.errorMessage}
        <br />
        Longitude:{' '}
        {this.state.errorMessage === ''
          ? this.state.lat == null
            ? '🔄 Loading'
            : this.state.long
          : this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
