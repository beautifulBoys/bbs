require('normalize.css/normalize.css');
require('./reply.less');

import React from 'react';

export default class Reply extends React.Component {
  constructor () {
    super();
    this.state = {
      isLogin: true
    }
  }
  render() {
    let screen = () => {
      if (!this.state.isLogin) return <div className="screen">请您先 <a href="#">登录</a> 再进行发帖</div>
    }
    return (
      <div className="reply">
        <div className="reply-main">
          <div className="title-box">
            标题<input type="text"/>建议：小于26个汉字
          </div>
          <textarea></textarea>
          <div className="title-box" style={{marginTop: '20px'}}>
            签名档：
            <select>
              <option value="0">华大</option>
              <option value="1">猫猫狗狗</option>
              <option value="2">哲学</option>
            </select>
            <div className="float-right">
            是否匿名：<input type="radio"/>
            <button>发布</button>
            </div>
          </div>
        </div>
        {screen}
      </div>
    );
  }
}
