import React, { PureComponent } from 'react';
import { Menu, Icon, Avatar, Dropdown } from 'antd';
import { withRouter } from "react-router-dom";
import './css/userCenter.scss';
/**
 * @description 顶部header右边的用户中心
 * @author Kanglang
 * @date 2019-02-25
 * @export
 * @class UserCenter
 * @extends {PureComponent}
 */
class UserCenter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            mobileWidth: 140
        };

    }
    jumpHandle(type, href) {
        if (type == "logout") {
            //调接口处理退出登录
            //退出成功后跳转到登录页面或者首页
            const { logout } = this.props;
            logout();
            console.log('退出');
        } else {
            if (href) {
                this.props.history.push(href);
            } else {
                console.log('还没有设置操作的路由');
            }

        }
    }
    handleVisibleChange = () => {
        const clientWidth = document.body.clientWidth;
        if (clientWidth < 576) {
            this.setState({ mobileWidth: clientWidth });
        }
    }
    render() {
        const { menuObj = [], userData, isMobile } = this.props;
        const { mobileWidth } = this.state;
        const menus = menuObj ? menuObj : [];
        const menu = (
            <Menu
                mode="vertical"
                style={{ width: mobileWidth }}
            >
                {
                    menus.map((item, index) => {
                        return (
                            <Menu.Item key={index} style={{ borderTop: index == menus.length - 1 ? '1px solid #eee' : "" }} onClick={this.jumpHandle.bind(this, item.iconType, item.href)}><Icon type={item.iconType} /><span>{item.title}</span></Menu.Item>
                        );
                    })
                }
            </Menu>
        );
        return (
            <Dropdown
                overlay={menu}
                trigger={['hover', 'click']}
                onVisibleChange={this.handleVisibleChange}
                getPopupContainer={() => document.querySelector('.right-partone-warp')}

            >
                <div className="mobile-right-header">
                    <Avatar
                        size="small"
                        icon="user"
                        src={userData.avatar}
                        alt="avatar"
                    />
                    {
                        !isMobile ?
                            <span className="mobile-right-header-username">{userData.username}</span>
                            :
                            null
                    }
                </div>
            </Dropdown>
        );
    }
}
export default withRouter(UserCenter);