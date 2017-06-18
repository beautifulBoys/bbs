require('normalize.css/normalize.css');
require('./reply.less');

import React from 'react';

export default class Reply extends React.Component {
  render() {
    return (
      <div className="reply">
        <div className="reply-main">
          <div className="title-box">
            标题<input type="text"/>建议：小于26个汉字
          </div>
          <textarea></textarea>
        </div>
        <div className="screen">请您先 <a href="#">登录</a> 再进行发帖</div>
      </div>
    );
  }
}
