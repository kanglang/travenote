
import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import './css/pcHeader.scss';
import RightHeaderMenu from "@/common/rightHeaderMenu/RightHeaderMenu";
const SubMenu = Menu.SubMenu;

/**
 * @description PC端显示的头部header
 * @author Kanglang
 * @date 2019-03-22
 * @export
 * @class PcHeader
 * @extends {Component}
 */
class PcHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopMenuStatu: false,
            pcPopShowStatu: true,
            currentKey: ["1"],
        };
    }
    componentWillMount() {
        this.selectRouter(window.location.pathname);
    }
    selectRouter = (name) => {
        const { menu } = this.props;
        const subKeyArray = [];
        let id = this.diguiSelect(menu, name);
        let subKey = this.selectSubMenu(menu, id, 0);
        while (subKey) {
            subKeyArray.push(subKey.toString());
            subKey = this.selectSubMenu(menu, subKey, 0);
        }
        console.log(subKeyArray)
        this.setState({
            currentKey: [id && id.toString()],
            defaultOpenKeys: subKeyArray,
        });
    };
    /**
 * 根据当前路由的id来找出父级subMenu的id
 * @param data 所有导航菜单数据
 * @param id 当前渲染的路由id
 * @param num subMenuId
 * @returns {*}
 */
    selectSubMenu(data, id, num) {
        let subKey = '';
        for (let i in data) {
            if (data[i].id == id && num != 0) {
                return subKey = num;
            } else if (data[i].childMenu && data[i].childMenu.length > 0) {
                subKey = this.selectSubMenu(data[i].childMenu, id, data[i].id);
                if (subKey > 0) {
                    return subKey;
                }
            }
        }
    }

    diguiSelect(data, name) {
        let id = '';
        for (let i in data) {
            if (data[i].router == name) {
                id = data[i].id;
                return id;
            } else if (data[i].childMenu && data[i].childMenu.length > 0) {
                id = this.diguiSelect(data[i].childMenu, name);
                if (id) {
                    return id;
                }
            }
        }
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            currentKey: e.keyPath,
        });
        let push = this.props.history.push
        push(e.item.props.router);
    }
    //菜单导航渲染
    navRender(data) {
        return (
            <Menu.Item
                key={data.id}
                router={data.router}
            >
                <span>{data.title}</span>
            </Menu.Item>
        );
    }

    render() {
        const { isMobile, menu = [], headerMenus, userData, logout } = this.props;
        return (

            <div className="header-ld-com-head">
                <div className="header-logo" >
                    <a href="#">
                        <div className="logo"></div>
                        {
                            !isMobile ?
                                <h1 >KD Travel Note</h1>
                                :
                                null
                        }
                    </a>
                </div>
                <Menu
                    className="header-menu"
                    defaultOpenKeys={this.state.defaultOpenKeys}
                    selectedKeys={this.state.currentKey}
                    mode="horizontal"
                    onClick={this.handleClick}
                >
                    {
                        menu.map((item, index) => {
                            return this.navRender(item);
                        })
                    }
                </Menu>
                <RightHeaderMenu
                    isMobile={isMobile}
                    userData={userData}
                    rightHeaderMenus={headerMenus}
                    logout={logout}
                />
            </div>
        );
    }
}

export default withRouter(PcHeader);