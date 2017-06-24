require('normalize.css/normalize.css');
require('./page_menu.less');

import React from 'react';
import { Breadcrumb } from 'antd';
import { brand, plate, plateSecond } from '../data/plate.json';

export default class PageMenu extends React.Component {
  constructor () {
    super();
    this.state = {
      skin: 'style1',
      tabActiveStyle1: 'list active',
      tabActiveStyle2: 'square'

    };
  }
  foldEvent (e) {
    var arr = e.target.parentNode.children;
    var child = e.target.children;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== e.target) {
        if (!arr[i].getAttribute('class')) {
          arr[i].setAttribute('class', 'fold');
          child[0].setAttribute('class', 'hide');
          child[1].setAttribute('class', '');
        } else {
          arr[i].setAttribute('class', '');
          child[0].setAttribute('class', '');
          child[1].setAttribute('class', 'hide');
        }
      }
    }
  }
  openPlateEvent (item) {
    alert(item);
  }
  styleClick (styleName) {
    if (styleName === 'style1') this.setState({skin: styleName, tabActiveStyle1: 'list active', tabActiveStyle2: 'square'});
    else this.setState({skin: styleName, tabActiveStyle1: 'list', tabActiveStyle2: 'square active'});
  }

  render() {
    return (
      <div className="page-menu-body">
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
              <div className={this.state.skin}>
                <div className="header">默认版面
                  <div className="box">
                    <span className={this.state.tabActiveStyle1} onClick={this.styleClick.bind(this, 'style1')}>列表</span>
                    <span className={this.state.tabActiveStyle2} onClick={this.styleClick.bind(this, 'style2')}>区块</span>
                  </div>
                </div>
                  {
                    plateSecond.map((item, index) => {
                      return (
                        <div key={index} className="second-box">
                          <div className="square-title" onClick={this.foldEvent}>{item.text}<span>▼</span><span className="hide">▲</span></div>
                          <ul>
                            {
                              item.list.map((item1, index1) => {
                                if (this.state.skin === 'style1')
                                return (
                                  <li key={index1} onClick={this.openPlateEvent.bind(this, item1)}>
                                    <span className="collect">☆</span>
                                    <span className="english">{item1.english}</span>
                                    <span className="chinese">{item1.chinese}</span>
                                    <span className="english">{item1.count}人</span>
                                    <div className="right">
                                      <div className="text">版务： {item1.admin.map((item2, index2) => {return <span key={index2} className="a1">{item2.name}</span>})}</div>
                                      <div className="text1">最后更新：前天 11:50</div>
                                    </div>
                                  </li>
                                )
                                else
                                return (
                                  <li key={index1} onClick={this.openPlateEvent.bind(this, item1)}>
                                    <div className="top">
                                      <span className="collect">☆</span>
                                      <span className="english">{item1.english}</span>
                                      <span className="text1">最后更新：前天 11:50</span>
                                    </div>
                                    <div className="center">
                                      <span className="chinese">{item1.chinese}</span>
                                      <span className="english">{item1.count}人</span>
                                    </div>
                                    <div className="bottom">
                                      <div className="text">版务： {item1.admin.map((item2, index2) => {return <span key={index2} className="a1">{item2.name}</span>})}</div>
                                    </div>
                                  </li>
                                )
                              })
                            }
                          </ul>
                        </div>
                      )
                    })
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
