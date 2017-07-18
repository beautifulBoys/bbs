require('normalize.css/normalize.css');
require('./register.less');

import React from 'react';
import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class PageMenu extends React.Component {
  constructor () {
    super();
    this.state = {
      username: '',

    };
  }


  render() {
    const registerConfig = [
      {text: '姓名', type:'text', value: 'username', width: 'width200px', placeholder: '真实姓名', explain: '* 必填（注册后不可修改）'},
      {text: '昵称', type:'text', value: 'nickname', width: 'width200px', placeholder: '2-10位', explain: '* 必填（随时可以在个人中心修改）'},
      {text: '密码', type:'password', value: 'password', width: 'width200px', placeholder: '6-18位字符', explain: '* 必填'},
      {text: '重复密码', type:'password', value: 'repassword', width: 'width200px', placeholder: '6-18位字符', explain: '* 必填'},
      {text: '专业', type:'text', value: 'major', width: 'width200px', placeholder: '', explain: ''},
      {text: '学号', type:'text', value: 'studentId', width: 'width200px', placeholder: '', explain: '* 必填'},
      {text: '手机', type:'number', value: 'phoneNum', width: 'width200px', placeholder: '', explain: '* 必填'},
      {text: '邮箱', type:'text', value: 'email', width: 'width200px', placeholder: '', explain: ''},
      {text: '性别', type:'radio', value: 'sex', width: 'width200px', placeholder: '', explain: '* 必填'}
    ];

    return (

      <div className="register-body">
        <div className="header">
          <div className="title">北大未名论坛</div>
          <div className="sign">bbs.pku.edu.cn</div>
        </div>
        <div className="main">

          {
            registerConfig.map((item, index) => {
              if (item.type === 'radio')
              return (
                <div className="row" key={index}>
                  <div className="left">{item.text}</div>
                  <div className="right">
                    <RadioGroup>
                      <RadioButton value="1">男</RadioButton>
                      <RadioButton value="0">女</RadioButton>
                    </RadioGroup>
                  </div>
                </div>
              )
              else return (
                <div className="row" key={index}>
                  <div className="left">{item.text}</div>
                  <div className="right">
                    <input type={item.type} placeholder={item.placeholder} className={'input ' + item.width}/>{item.explain}
                  </div>
                </div>
              )
            })
          }

          <button className="register">注 册</button>

        </div>
        <div className="bottom"></div>
      </div>
    )
  }
}
