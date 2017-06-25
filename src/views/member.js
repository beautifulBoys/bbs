require('normalize.css/normalize.css');
require('./member.less');

import React from 'react';
import { Breadcrumb } from 'antd';
import { brand } from '../data/plate.json';

export default class Member extends React.Component {
  constructor () {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="member-body">
        <div className="main-content-box">
          <div className="bread">
            <Breadcrumb separator=">>">
            {
              brand.map((item) => {
                if (item.link) {
                  return <Breadcrumb.Item key={item.id}><a href={item.link}>{item.name}</a></Breadcrumb.Item>
                } else {
                  return <Breadcrumb.Item key={item.id}>{item.name}</Breadcrumb.Item>
                }
              })
            }
            </Breadcrumb>
          </div>

          <div className="content-body">
            <div className="userInfo">

            </div>
          </div>
        </div>
      </div>
    );
  }
}
