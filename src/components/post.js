require('normalize.css/normalize.css');
require('./post.less');

import React from 'react';

export default class Post extends React.Component {
  render() {
    var info = {
      user: {
        userId: 243213,
        userImg: '../images/user.jpg',
        userName: 'Super Check',
        onlineStatus: false,
        signature: '苏玛并不是说他是',
        level: {
          num: '2.4',
          text: '土拨鼠'
        },
        post: {
          num: 4018,
          score: 4
        }
      },
      post: {
        content: '到现在还记得一首 歌名忘了 歌词是啥“水乡的孩子爱水乡，从小就生长在南湖旁。湖里的清泉香喷喷，啦啦啦啦啦，湖里的水菱甜又长，啊啊啦啦啦”。',
        sign: '到现在还记得一首 歌名忘了 歌词是啥“水乡的孩子爱水乡，从小就生长在南湖旁。湖里的清泉香喷喷，啦啦啦啦啦，湖里的水的孩子爱水乡，从小就生长在南湖旁。湖里的清泉香喷喷'
      }
    }
    return (
      <div className="post-box">
        <div className="left">
          <div className="userImg"><img src={info.user.userImg}/></div>
          <h5 className="userName">{info.user.userName}<span> [离线] </span></h5>
          <p>{info.user.signature}</p>
          <p><span className="level-box"><span className="level-left">{info.user.level.num}</span><span className="level-right">{info.user.level.text}</span></span></p>
          <p>发帖数：{info.user.post.num} 原创分：{info.user.post.score}</p>
          <p><span className="sign talk"></span><span className="sign mail"></span></p>
          <p><span className="follow">关 注</span></p>
        </div>
        <div className="right">
          <div className="top">
            <div className="content">
              <h6><span className="post-step">4 楼</span><span className="post-step-right">电梯直达</span></h6>
              <pre>{info.post.content}</pre>
            </div>
            <div className="signature">
              <h6>签名档</h6>
              <pre>{info.post.sign}</pre>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-left">
              <ul>
                <li><a href="#"><img src="../images/bottom-edit.png"/><span>回帖</span></a></li>
                <li><a href="#"><img src="../images/bottom-talk.png"/><span>回信</span></a></li>
                <li><a href="#"><img src="../images/bottom-share.png"/><span>转载</span></a></li>
                <li><a href="#"><img src="../images/bottom-post.png"/><span>转寄</span></a></li>
                <li><a href="#"><img src="../images/bottom-collect.png"/><span>收入文集</span></a></li>
              </ul>
            </div>
            <div className="bottom-right">
              查看回复(5)
            </div>
          </div>


        </div>
      </div>
    );
  }
}
