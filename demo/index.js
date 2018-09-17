import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src';

class Demo extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('app'));
