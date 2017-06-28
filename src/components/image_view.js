require('normalize.css/normalize.css');
require('./image_view.less');

import React from 'react';

export default class ImageView extends React.Component {
  constructor () {
    super();
    this.state = {
      status: true,
      imgIndex: 0
    };
  }
  closeEvent () {
    this.setState({status: false});
  }
  downLoadEvent () {

  }
  sideEvent (bool) {
    if (bool) this.setState({imgIndex: this.state.imgIndex--});
    else this.setState({imgIndex: this.state.imgIndex++});
  }
  render() {
    return (
      <div className={this.state.status ? 'image-view-box' : 'image-view-box hide'}>
        <div className="view-box">
          <div className="img-box">
            <img src="../images/timg.jpg"/>
          </div>
          <div className="control-box">
            <div className="close" onClick={this.closeEvent.bind(this)}></div>
            <div className="down" onClick={this.downLoadEvent.bind(this)}></div>
            <div className="control">
              <div className="side left" onClick={this.sideEvent.bind(this, true)}></div>
              <div className="center"></div>
              <div className="side right" onClick={this.sideEvent.bind(this, false)}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
