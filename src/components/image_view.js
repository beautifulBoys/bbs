require('normalize.css/normalize.css');
require('./image_view.less');

import React from 'react';

export default class ImageView extends React.Component {
  componentWillMount () {
    this.setState({img_active: this.props.imglist[0], list_length: this.props.imglist.length, list_active_index: 0});
  }
  constructor () {
    super();
    this.state = {
      status: true,
      img_active: null,
      list_length: 0,
      list_active_index: 0
    };
  }
  closeEvent () {
    this.setState({status: false});
  }
  downLoadEvent () {
    window.location = this.state.img_active.src;
  }
  sideEvent (bool) {
    if (bool) {
      var index = --this.state.list_active_index;
      this.setState({
        list_active_index: index,
        img_active: this.props.imglist[index]
      });
    }
    else {
      var index = ++this.state.list_active_index;
      this.setState({
        list_active_index: index,
        img_active: this.props.imglist[index]
      });
    }
  }
  pagationEvent (i) {
    this.setState({
      list_active_index: i,
      img_active: this.props.imglist[i]
    });
  }
  render() {
    return (
      <div className={this.state.status ? 'image-view-box' : 'image-view-box hide'}>
        <div className="view-box">
          <div className="img-box">
            <img src={this.state.img_active.src}/>
          </div>
          <div className="control-box">
            <div className="close" onClick={this.closeEvent.bind(this)}></div>
            <div className="down" onClick={this.downLoadEvent.bind(this)}></div>
            <div className="controm-bottom">
              {
                (() => {
                  var a = [];
                  for (let i = 0, j = this.state.list_length; i < j; i++) {
                    a.push(<span className={this.state.list_active_index === i ? 'item active' : 'item'} onClick={this.pagationEvent.bind(this, i)}>{i + 1}</span>);
                  }
                  return a;
                })()
              }
            </div>
            <div className="control">
              <div className={this.state.list_active_index === 0 ? 'side left hide' : 'side left'} onClick={this.sideEvent.bind(this, true)}></div>
              <div className="center"></div>
              <div className={this.state.list_active_index + 1 === this.state.list_length ? 'side right hide' : 'side right'} onClick={this.sideEvent.bind(this, false)}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
