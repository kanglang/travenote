
import React, { Component, Fragment } from 'react';
import './css/rightHeaderMenu.scss';
import UserCenter from '../userCenter/UserCenter';

/**
 *@author kanglang
 *@date 2019/1/28
 *@Description: headerRightMenu 顶部右边的munu
 */
export default class RightHeaderMenu extends Component {
    render() {
        const { isMobile, rightHeaderMenus, userData,logout, login = true } = this.props;

        return (
            <Fragment>
                <div className="right-partone-warp">
                    {
                        login ?
                            <UserCenter
                                logout={this.logout}
                                menuObj={rightHeaderMenus}
                                userData={userData}
                                isMobile={isMobile}
                                logout={logout}
                            /> :
                            <div className="login-or-out">
                                <a title="登录" href="/Login">登录</a>
                                <span className="split-line">|</span>
                                <a title="注册" href="/Login">注册</a>
                            </div>
                    }
                </div>
            </Fragment>
        );
    }

}