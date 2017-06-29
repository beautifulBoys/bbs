require('normalize.css/normalize.css');
require('./member.less');

import React from 'react';
import { Breadcrumb } from 'antd';
import { brand, userInfo, person } from '../data/member.json';



export default class Member extends React.Component {
  constructor () {
    super();
    this.state = {
      tabIndex: 0
    };
  }

  tabEvent (num) {
    this.setState({tabIndex: num});
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
              <div className="left-item">
                <img src="../images/user.jpg"/>
              </div>
              <div className="right-item">
                <div className="left">
                  <div className="title">{userInfo.englishName} {userInfo.chinaName} [{userInfo.loginStatus ? '在线' : '离线'}]</div>
                  <div className="value">{userInfo.gate ? userInfo.gate : '当前用户还未创建个人文集，或者您没有权限查看该个人文集'}</div>
                </div>
                <div className="right">
                  <ul>
                    <li>聊天</li>
                    <li>私信</li>
                    <li>关注</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab">
              <ul>
                <li className={this.state.tabIndex === 0 ? 'text active' : 'text'} onClick={this.tabEvent.bind(this, 0)}>个人资料</li>
                <li className={this.state.tabIndex === 1 ? 'text active' : 'text'} onClick={this.tabEvent.bind(this, 1)}>个人相册</li>
                <li className={this.state.tabIndex === 2 ? 'text active' : 'text'} onClick={this.tabEvent.bind(this, 2)}>设置</li>
              </ul>
            </div>
            <div className="tab-content">
              <div className={this.state.tabIndex === 0 ? 'tab-item1' : 'hide'}>

                <div className="cell">
                  <div className="title">基本信息</div>
                  <table>
                    <tr><td>昵称：{person.base.userName}</td><td>性别：{person.base.sex ? '男' : '女'}</td><td>星座：{person.base.constellation}</td></tr>
                  </table>
                </div>

                <div className="cell">
                  <div className="title">活跃概况</div>
                  <table>
                    <tbody>
                      <tr><td>上站次数：{person.survey.loginNum}</td><td>发帖数：{person.survey.postNum}</td><td>生命力：{person.survey.live}</td></tr>
                      <tr><td>积分：{person.survey.score}</td><td>等级：{person.survey.level}</td><td>原创分：{person.survey.ownContent}</td></tr>
                      <tr><td>最近上站时间：{person.survey.lastLoginTime}</td><td>最近离站时间：{person.survey.lastLogoutTime}</td><td>最近登录IP：{person.survey.ip}</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="cell">
                  <div className="title">个人说明</div>
                  <pre>{person.explain}</pre>
                </div>

              </div>




              <div className={this.state.tabIndex === 1 ? 'tab-item2' : 'hide'}>
                <ol>
                  <li>
                    <div className="item">
                      <div className="suo"></div>
                      <img src="../images/member/a.jpg"/>
                    </div>
                    <div className="title">珍稀物种</div>
                  </li>
                  <li>
                    <div className="item">
                      <div className="suo"></div>
                      <img src="../images/member/a.jpg"/>
                    </div>
                    <div className="title">珍稀物种</div>
                  </li>
                  <li>
                    <div className="item">
                      <div className="suo"></div>
                      <img src="../images/member/a.jpg"/>
                    </div>
                    <div className="title">珍稀物种</div>
                  </li>
                  <li>
                    <div className="item">
                      <div className="suo"></div>
                      <img src="../images/member/a.jpg"/>
                    </div>
                    <div className="title">珍稀物种</div>
                  </li>
                  <li>
                    <div className="item">
                      <div className="suo"></div>
                      <img src="../images/member/a.jpg"/>
                    </div>
                    <div className="title">珍稀物种</div>
                  </li>
                  <li>
                    <div className="item">
                      <div className="suo"></div>
                      <img src="../images/member/a.jpg"/>
                    </div>
                    <div className="title">珍稀物种</div>
                  </li>
                  <li>
                    <div className="item">
                      <div className="suo"></div>
                      <img src="../images/member/a.jpg"/>
                    </div>
                    <div className="title">珍稀物种</div>
                  </li>
                </ol>
              </div>




              <div className={this.state.tabIndex === 2 ? 'tab-item3' : 'hide'}>3</div>




            </div>
          </div>
        </div>
      </div>
    );
  }
}
