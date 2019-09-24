import React, { Component } from 'react';
import './css/footer.scss';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = ({
    });
  }
  render() {
    return (
        <footer className="footer">
          <div className="footer-contract">
            <p>重庆智谷科技</p>
          </div>
          <div className="footer-contract">
            <p>地址：重庆市巴南区巴滨路</p>
            <p>客服电话: 13752814478</p>
            <p>客服QQ: 1649602667</p>
          </div>
          <div className="footer-contract">
            {/* <Link to="/Exemption" target="_blank">免责申明</Link>
            <a href="http://www.baidu.com">广告服务</a> */}
            <a href="http://report.12377.cn:13225/toreportinputNormal_anis.do" target="_blank">举报中心</a>
          </div>
          <div className="footer-contract">
            <p>Copyright © 1998 - 2018 Tencent. All Rights Reserved</p>
          </div>
          <div className="footer-contract">
            <p className="footer-three-left">智谷科技</p><p className="footer-three-right">版权所有</p>
          </div>
        </footer>
    );
  }
}

export default withRouter(Header);
