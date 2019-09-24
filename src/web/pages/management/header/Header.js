import React, { Component, Fragment } from 'react';
import logo from './img/logo.png';
import './css/Header.css';
import { withRouter } from 'react-router-dom';
import erweima from './img/erweima.png';
import axios from 'axios';
import PcHeader from '../pcHeader/PcHeader';
import menu from '../HeaderMenus';
import userMenu from '../UserMenus';

const userData = {
  id: "1",
  username: "Dylan Kang",
  avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      page: '',
      isMobile: false
    });
  }
  componentWillMount() {
    axios.get('/api/menu').then(res => {
      console.log('res', res);
      if (res && res.data && res.data.data) {
        this.setState({ menu: res.data.data });
      } else {
        console.log('菜单数据暂无');
      }
    }).catch(error => {
      console.error(error);
    });
    this._window();
  }

  _window() {
    let clientWidth = document.body.clientWidth;
    //初始化时判断小于600的屏幕宽度
    if (clientWidth < 576) {
      this.setState({
        isMobile: true
      })
    } else {
      this.setState({
        isMobile: false
      })
    }
    window.addEventListener('resize', () => {
      this.resizeChange();
    });
  }
  /**
 * 浏览器宽度变化触发函数
 */
  resizeChange() {
    let width = document.body.clientWidth;
    if (width < 576) {
      this.setState({
        isMobile: true
      })
    } else {
      this.setState({
        isMobile: false
      })
    }
  }
  logout = () => {
    alert("退出");
  }
  render() {
    const { isMobile } = this.state;
    return (
      <Fragment>
        <PcHeader
          menu={menu}
          userData={userData}
          headerMenus={userMenu}
          isMobile={isMobile}
          logout={this.logout}
        />
      </Fragment>
    );
  }
}

export default withRouter(Header);
