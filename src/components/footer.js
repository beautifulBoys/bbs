require('normalize.css/normalize.css');
require('./footer.less');

import React from 'react';

export default class Footer extends React.Component {
	
  render() {
    var links = [
      {id: 0, text: '常用网站', link: '#'},
      {id: 1, text: '相关下载', link: '#'},
      {id: 2, text: '未名站刊', link: '#'},
      {id: 3, text: '关于我们', link: '#'},
      {id: 4, text: '联系我们', link: '#'},
      {id: 5, text: '加入我们', link: '#'},
      {id: 6, text: '帮助中心', link: '#'},
      {id: 7, text: '意见反馈', link: '#'}
    ];
    return (
      <div className="footer">
        <div className="footer-main">
          <p>
            {
              links.map((item) => {
                  return <span key={item.id}><a href={item.link}>{item.text}</a></span>;
              })
            }
          </p>
          <p>© 2000–2017 北大未名BBS</p>
        </div>
      </div>
    );
  }
}
