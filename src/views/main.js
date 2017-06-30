require('normalize.css/normalize.css');
require('./main.less');

import React from 'react';
import Post from '../components/post.js';
import Reply from '../components/reply.js';

import { Breadcrumb, Pagination } from 'antd';
import { bread } from '../data/main.json';

export default class AppComponent extends React.Component {
  render() {
    function paginationEvent () {
    }
    return (
      <div className="main-body">
        <div className="main-content">

          <div className="bread">
            <Breadcrumb separator=">>">
            {
              bread.map((item) => {
                if (item.link) {
                  return <Breadcrumb.Item key={item.id}><a href={item.link}>{item.name}</a></Breadcrumb.Item>
                } else {
                  return <Breadcrumb.Item key={item.id}>{item.name}</Breadcrumb.Item>
                }
              })
            }
            </Breadcrumb>
          </div>

          <div className="content-header">
            <Pagination showQuickJumper defaultCurrent={2} total={50} onChange={paginationEvent} className="pagination-box"/>

            <div className="title-box">
              你们还记得中考考了啥么。。。。
              <span className="link">[复制链接]</span>
              <span className="share">百度分享</span>
            </div>

            <Post />
            <Post />
            <Post />

          </div>
          <Reply/>



        </div>
      </div>
    );
  }
}
