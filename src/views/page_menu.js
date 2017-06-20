require('normalize.css/normalize.css');
require('./page_menu.less');

import React from 'react';
import { Breadcrumb } from 'antd';

export default class PageMenu extends React.Component {

  render() {
    var a = [{id: 1, name: '中国矿业大学', link: '#'}, {id: 2, name: '新能源工程学院'}, {id: 3, name: '信呢各院', link: '#'}, {id: 4, name: '版面列表'}];
    return (
      <div className="page-menu-body">
        <div className="main-content">
          <div className="bread">
            <Breadcrumb separator=">>">
            {
              a.map((item) => {
                if (item.link) {
                  return <Breadcrumb.Item key={item.id}><a href={item.link}>{item.name}</a></Breadcrumb.Item>
                } else {
                  return <Breadcrumb.Item key={item.id}>{item.name}</Breadcrumb.Item>
                }
              })
            }
            </Breadcrumb>
          </div>

          <div className="content-header">
            <ul>
              <li>
                <div className="left"></div>
                <div className="right"></div>
              </li>
              <li>
                <div className="left"></div>
                <div className="right"></div>
              </li>
              <li>
                <div className="left"></div>
                <div className="right"></div>
              </li>
              <li>
                <div className="left"></div>
                <div className="right"></div>
              </li>
            </ul>

          </div>
        </div>
      </div>
    );
  }
}
