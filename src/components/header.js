require('normalize.css/normalize.css');
require('./header.less');

import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'antd';
import Cookies from 'js-cookie';
//var cookie = new Cookies();

export default class Header extends React.Component {
  constructor () {
    super();
    this.state = {
      loading: false,
      login_status: false,
      username: '',
      password: ''

    };
  }
  loginEvent () {
    this.setState({login_status: true});
  }
  handleOk () {
    this.setState({loading: true});
    console.log(this.state.username, this.state.password);
    Cookies.remove('passport');
    Cookies.remove('userId');
    Cookies.set('user', {username: this.state.username, userId: 23434654}, { expires: 5 });
    setTimeout(() => {
      this.setState({loading: false});
      console.log(JSON.parse(Cookies.get('user')));
    }, 2000);
  }
  handleCancel () {
    this.setState({login_status: false});
  }
  inputChange (value, e) {
    if (value === 'username') {
      this.setState({username: e.target.value });
    } else {
      this.setState({password: e.target.value });
    }
  }
  render() {
    var items = [
      {text: '用户名', type:'text', value: 'username', width: 'width200px'},
      {text: '密码', type:'password', value: 'password', width: 'width200px'}
    ];
    return (
      <div className="header-box">
        <div className="header">
          <div className="head-main">
            <Link to="/main" className="button">首页</Link>
            <Link to="/member" className="button">个人中心</Link>
            <Link to="/detail" className="button">默认页面</Link>
            <Link to="/register" className="button">注册页面</Link>
            <Link to="/a" className="button">错误页</Link>
            <button onClick={this.loginEvent.bind(this)}>登 陆</button>

                <Modal
                  visible={this.state.login_status}
                  title="登录"
                  onOk={this.handleOk.bind(this)}
                  onCancel={this.handleCancel.bind(this)}
                  footer={[
                    <Button key="back" size="large" onClick={this.handleCancel.bind(this)}>取 消</Button>,
                    <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk.bind(this)}> 登 录 </Button>,
                  ]}
                >
                  <div className="input-box">
                    {
                      items.map((item, index) => {
                        return (
                          <div className="row" key={index}>
                            <div className="left">{item.text}</div>
                            <div className="right">
                              <input type={item.type} className={'input ' + item.width} value={this.state[item.value]} onChange={this.inputChange.bind(this, item.value)}/>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>

                </Modal>

          </div>
        </div>
      </div>
    );
  }
}
