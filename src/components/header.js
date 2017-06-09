require('normalize.css/normalize.css');
require('./header.less');

import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-box">
        <div className="header">
          <div className="head-main">乐视</div>
        </div>
      </div>
    );
  }
}
