require('normalize.css/normalize.css');
require('./page_detail.less');

import React from 'react';

import { Breadcrumb, Pagination, Table } from 'antd';
import ImageView from '../components/image_view';

import {list, bread, info, imgList} from '../data/page_detail.json';

export default class AppComponent extends React.Component {

  render() {
    function paginationEvent () {}

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
            <div className="title-box">
              {info.englishName} {info.chineseName}
              <span className="share">★☆收藏本版（{info.collectNum}）</span>
            </div>
            <div className="header-desc">
              <p>在线：<span className="orange">{info.onlineNum}</span> 今日：<span className="orange">{info.todayNum}</span> 主题：<span className="orange">{info.themeNum}</span> 帖数：<span className="orange">{info.postNum}</span></p>
              <p>{info.explain}</p>
              <p>版务:
                {
                  info.admin.map((item) => {
                    return <a href="#" key={item.id}> {item.name} </a>
                  })
                }
              </p>
            </div>

            <Table dataSource={list} columns={columns} pagination={false} className="table"/>
            <Pagination showQuickJumper defaultCurrent={2} total={50} onChange={paginationEvent} className="pagination-box"/>
            <ImageView imglist={imgList}/>
          </div>
        </div>
      </div>
    );
  }
}
