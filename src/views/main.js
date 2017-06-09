require('normalize.css/normalize.css');
require('./main.less');

import React from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

import { Breadcrumb } from 'antd';

export default class AppComponent extends React.Component {
  render() {
    var a = [{id: 1, name: '中国矿业大学', link: '#'}, {id: 2, name: '新能源工程学院'}, {id: 3, name: '信呢各院', link: '#'}, {id: 4, name: '张建英'}];
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

          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


        </div>

        <Footer/>
      </div>
    );
  }
}
