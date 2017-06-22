require('normalize.css/normalize.css');
require('./page_menu.less');

import React from 'react';
import { Breadcrumb } from 'antd';
import { plate } from '../data/plate.json';

export default class PageMenu extends React.Component {

  render() {
    var a = [{id: 1, name: '中国矿业大学', link: '#'}, {id: 2, name: '新能源工程学院'}, {id: 3, name: '信呢各院', link: '#'}, {id: 4, name: '版面列表'}];

    return (
      <div className="page-menu-body">
        <div className="main-content-box">
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

          <div className="content-body">
            <ul>
              {
                plate.map((item, index) => {
                  return (
                    <li className={'li ' + item.css} key={index}>
                      <div className="left">
                        <div className="title"><span className="sign">{item.plate.plateIndex}</span>{item.plate.name}<span className="forward">></span></div>
                        <div className="explain">区务：
                          {
                            item.plate.admin.map((item1, index1) => {
                              return <a href="#" key={index1}>{item1.name}</a>
                            })
                          }
                        </div>
                      </div>
                      <div className="right">
                        <div className="left1">热门版面：</div>
                        <div className="right1">
                          <ol>
                            {
                              item.hotPlate.map((item2, index2) => {
                                return <li className="ol-li" key={index2}><a href="#">[{item2.name}]</a></li>
                              })
                            }
                          </ol>
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>

            <div className="default-plate-box">
              <div className="style1">
                <div className="header">默认版面
                  <div className="box"><span className="square active">区块</span><span className="list">列表</span></div>
                </div>
                <div>
                  <div className="square-title">政治理论类社团<span>▼</span><span>▲</span></div>
                  <ul>
                    <li>BBShelp BBS使用求助 6 人 版务： lOOO leimiaos alwaysmoving  最后更新：前天 11:50</li>
                    <li>BBShelp BBS使用求助 6 人 版务： lOOO leimiaos alwaysmoving  最后更新：前天 11:50</li>
                    <li>BBShelp BBS使用求助 6 人 版务： lOOO leimiaos alwaysmoving  最后更新：前天 11:50</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
