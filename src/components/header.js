require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/header.less');

import React from 'react';
import { Row, Col } from 'antd';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Row gutter={16} >
          <Col span={4} >乐视</Col>
          <Col span={4} >的</Col>
          <Col span={4} >的</Col>
          <Col span={4} >的</Col>
          <Col span={4} >地方</Col>
          <Col span={4} >大幅度</Col>
        </Row>
      </div>
    );
  }
}
export default Header;
