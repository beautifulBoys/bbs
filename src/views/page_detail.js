require('normalize.css/normalize.css');
require('./page_detail.less');

import React from 'react';

import { Breadcrumb, Pagination, Table } from 'antd';

export default class AppComponent extends React.Component {

  render() {
    var a = [{id: 1, name: '中国矿业大学', link: '#'}, {id: 2, name: '新能源工程学院'}, {id: 3, name: '信呢各院', link: '#'}, {id: 4, name: '张建英'}];
    function paginationEvent () {}

    const dataSource = [
      {key: '1', id: 0, con_title: '西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号', author: 'Canteen', num: 323},
      {key: '2', id: 0, con_title: '西湖区湖底公园1号西湖区湖底公园1号', author: 'lixin', num: 2534},
      {key: '3', id: 324, con_title: '西湖区湖底公园1号西湖区湖底公园1号', author: 'lixin', num: 2534},
      {key: '4', id: 234, con_title: '西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号', author: 'lixin', num: 2534},
      {key: '5', id: 45, con_title: '西湖区湖底公园1号西湖区湖底公园1号西湖区湖底公园1号', author: 'lixin', num: 2534}
    ];

    const columns = [
      {title: '序号', key: 'id', dataIndex: 'id', render: id => {
        if (id === 0) return <span className="toTop">置顶</span>
        else return <span className="">{id}</span>
      }},
      {title: '标题', key: 'con_title', dataIndex: 'con_title'},
      {title: '作者', key: 'author', dataIndex: 'author'},
      {title: '回复数', key: 'num', dataIndex: 'num'}
    ];



    return (
      <div className="page-detail-body">
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
            <div className="title-box">
              CanteenDorm 燕园食宿
              <span className="share">★☆收藏本版（485）</span>
            </div>
            <div className="header-desc">
              <p>在线：<span className="orange">89</span> 今日：<span className="orange">63</span> 主题：<span className="orange">3301</span> 帖数：<span className="orange">37511</span></p>
              <p>所有关于食堂和宿舍的话题，都来这里讨论吧！</p>
              <p>版务: <a href="#">qianyu</a></p>
            </div>

            <Table dataSource={dataSource} columns={columns} pagination={false} className="table"/>
            <Pagination showQuickJumper defaultCurrent={2} total={50} onChange={paginationEvent} className="pagination-box"/>
          </div>
        </div>
      </div>
    );
  }
}
