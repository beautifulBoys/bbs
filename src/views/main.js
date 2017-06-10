require('normalize.css/normalize.css');
require('./main.less');

import React from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Post from '../components/post.js';

import { Breadcrumb, Pagination } from 'antd';

export default class AppComponent extends React.Component {
  render() {
    var a = [{id: 1, name: '中国矿业大学', link: '#'}, {id: 2, name: '新能源工程学院'}, {id: 3, name: '信呢各院', link: '#'}, {id: 4, name: '张建英'}];
    function paginationEvent () {
    }
    return (
      <div className="main-body">
        <Header/>
        <div className="main-content">

          <div className="bread">
            <Breadcrumb separator=">>">
            {
              a.map((item) => {
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



        </div>

        <Footer/>
      </div>
    );
  }
}
