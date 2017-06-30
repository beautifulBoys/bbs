require('normalize.css/normalize.css');
require('./header.less');

import React from 'react';
//import { Link } from 'react-router';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-box">
        <div className="header">
          <div className="head-main">乐视</div>

          <Link to="/main"></Link>

        </div>
      </div>
    );
  }
}
