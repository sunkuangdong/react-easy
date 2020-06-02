import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  render() {
    return (
      <div>
        <span>
          app {this.props.name}
        </span>
      </div>
    )
}
}

ReactDOM.render(
  <React.StrictMode>
    <App name='sun' />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
