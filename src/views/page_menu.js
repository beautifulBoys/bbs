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
              <li className="li red">
                <div className="left">
                  <div className="title"><span className="sign">六区</span>休闲娱乐<span className="forward">></span></div>
                  <div className="explain">区务：<a href="#">Draved</a> <a href="#">Draved</a> <a href="#">Draved</a></div>
                </div>
                <div className="right">
                  <div className="left1">热门版面：</div>
                  <div className="right1">
                    <ol>
                      <li className="ol-li"><a href="#">[别问我是谁]</a></li>
                      <li className="ol-li"><a href="#">[鹊桥]</a></li>
                      <li className="ol-li"><a href="#">[未名湖]</a></li>
                      <li className="ol-li"><a href="#">[且歌且行]</a></li>
                      <li className="ol-li"><a href="#">[男孩子]</a></li>
                      <li className="ol-li"><a href="#">[谈情说爱]</a></li>
                      <li className="ol-li"><a href="#">[鹊桥征玩友]</a></li>
                      <li className="ol-li"><a href="#">[日记]</a></li>
                     </ol>
                   </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
