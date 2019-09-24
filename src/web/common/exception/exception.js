import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './css/exception.scss';
/**
 * @description 异常码为403,404,500的页面组件 如果不传入code默认404
 * @author tianting
 * @date 2019-03-01
 * @class Exception
 * @extends {Component}
 */
class Exception extends Component {
    constructor(props) {
        super(props);
        let exception = {
            code: '',
            message: '',
            img: ''
        };
        const {code, message, img } = this.props;
        if(!code) {
            exception = {
                code: '404',
                message: '抱歉，你访问的页面不存在',
                img: require('./images/404.png')
            };
        }else if (code == '403'){
            exception = {
                code: '403',
                message: '抱歉，你无权访问该页面',
                img: require('./images/403.png')
            };
        }else if (code == '404') {
            exception = {
                code: '404',
                message: '抱歉，你访问的页面不存在',
                img: require('./images/404.png')
            };
        }else if (code == '500') {
            exception = {
                code: '500',
                message: '抱歉，服务器出错了',
                img: require('./images/500.png')
            };
        }else if (img){
            exception = {
                code: code,
                message: message,
                img: img
            };
        }
        exception['href'] = this.props.href || '/';
        this.state = exception;
    }
    goBackHome = () => {
        this.props.history.push(this.state.href);
    }

    render() {
        const { message, img, href } = this.state;
        return (
            <div className="exception-wrap">
                <div className="ex-img"><img src={img} alt=""/></div>
                <div className="ex-title">{message}</div>
                <div className="ex-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default withRouter(Exception);