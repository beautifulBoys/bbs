require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Header from './header.js';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header/>
      </div>
    );
  }
}

export default AppComponent;
