require('normalize.css/normalize.css');
require('./footer.less');

import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-main">
          <p>
            <a href="#">常用网站</a> -
            <a href="#">相关下载</a> -
            <a href="#">未名站刊</a> -
            <a href="#">关于我们</a> -
            <a href="#">联系我们</a> -
            <a href="#">加入我们</a> -
            <a href="#">帮助中心</a> -
            <a href="#">意见反馈</a>
          </p>
          <p>© 2000–2017 北大未名BBS</p>
        </div>
      </div>
    );
  }
}
