import React, { Component, Fragment } from 'react';
import { Input, Icon, Alert } from 'antd';
import axios from 'axios';
import './css/register.scss';
const fmLogo = require('./img/logo.png');
const codePng = require('./img/code.png');
/**
 * @description 注册
 * @author Kanglang
 * @date 2019-03-06
 * @export
 * @class Login
 * @extends {Component}
 */
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'fm.design',
            pwd: '',
            code: 'FXDE',
            usenameTips: "",
            pwdTips: "",
            codeTips: "",
            noPwdImg: false,
            errorStatus: false,
            isMobStatus: false
        };
    }
    toLogin = () => {
        const userName = this.state.username;
        const password = this.state.pwd;
        const code = this.state.code;
        if (!userName) {
            this.setState({
                usenameTips: "请输入用户名",
                errorStatus: false
            });
            return;
        } else {
            this.setState({
                usenameTips: ""
            });
        }
        if (!password) {
            this.setState({
                pwdTips: "请输入密码",
                errorStatus: false
            });
            return;
        } else {
            this.setState({
                pwdTips: "",
            });
        }
        if (!code) {
            this.setState({
                codeTips: "请输入验证码",
                errorStatus: false
            });
            return;
        } else {
            this.setState({
                codeTips: ""
            });
        }
        const params = {
            username: userName,
            password: password
        };
        // this.props.history.push('/');
        // //首先验证验证码，验证通过再操作以下步骤
        // axios.post('/api/user/login', params).then(res => {
        //     console.log('res==>', res.data);
        //     if (res && res.data && res.data.status == true) {
        //         window.location.href = '/management/analysis';
        //     } else {
        //         this.setState({ errorStatus: true });
        //     }
        // }).catch(error => {
        //     console.error(error);
        // });

    }
    emitEmpty = () => {
        this.usernameInput.focus();
        this.setState({ username: '' });
    }

    onChangeUser = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onChangeRemberPwd = (e) => {
        const remember = document.getElementById('remember');
        console.log('pwd-check', remember.checked);
        if (remember.checked) {
            //保存密码到cookie或localStorage
        } else {
            //从cookie或localStorage中清楚保存的密码
        }
    }
    onFocus = () => {
        this.setState({
            noPwdImg: true
        });
        console.log("获取焦点");
    }
    onBlur = () => {
        this.setState({
            noPwdImg: false
        });
        console.log("失去焦点");
    }

    render() {
        const { noPwdImg, username, pwd, code, usenameTips, pwdTips, codeTips, errorStatus } = this.state;
        const suffix = username ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (
            <Fragment>
                <div className="Mengban" id="Mengban">
                    <div className="login-bg">
                        <div className="login-bg-wrap">
                            <div className="login-bg-wrap-header">
                                <div className="login-bg-wrap-header-logo"><img src={fmLogo} /></div>
                                <h1>背上行囊注册</h1>
                            </div>
                            <div className="login-bg-wrap-login">
                                <div className="login-bg-wrap-login-middle">
                                            <Input
                                                className="ipt-wrap-username"
                                                placeholder="用户名：fm.design"
                                                prefix={<Icon type="user" style={{ color: '#91939E' }} />}
                                                suffix={suffix}
                                                value={username}
                                                onChange={this.onChangeUser}
                                                ref={node => this.usernameInput = node}
                                                name="username"
                                            />
                                            <div className="ipt-wrap-tips">{usenameTips}</div>
                                            <Input.Password
                                                className="ipt-wrap-pwd"
                                                placeholder="fmd666"
                                                prefix={<Icon type="lock" style={{ color: '#91939E' }} />}
                                                value={pwd}
                                                onChange={this.onChangeUser}
                                                ref={node => this.pwdInput = node}
                                                name="pwd"
                                                onFocus={this.onFocus}
                                                onBlur={this.onBlur}
                                            />
                                            <div className="ipt-wrap-tips">{pwdTips}</div>
                                            <div className="ipt-wrap-code">
                                                <Input
                                                    className="ipt-wrap-code-ipt"
                                                    placeholder="验证码"
                                                    prefix={<span style={{ color: '#91939E' }}>验证码</span>}
                                                    value={code}
                                                    onChange={this.onChangeUser}
                                                    ref={node => this.codeInput = node}
                                                    name="code"
                                                />
                                                <div className="ipt-wrap-code-img">
                                                    <img src={codePng} />
                                                    <Icon className="ipt-wrap-code-img-reload" type="reload" />
                                                </div>

                                            </div>
                                            <div className="ipt-wrap-tips">{codeTips}</div>
                                            <div className="pwd-tip">
                                                <div className="pwd-tip-remember">
                                                    <label><input id="remember" type="checkbox" onChange={this.onChangeRemberPwd} />记住密码</label>
                                                </div>
                                                <div className="pwd-tip-forget">忘记密码</div>
                                            </div>

                                </div>
                                <button className="login-bg-wrap-login-btn" onClick={this.toLogin}>
                                    <div className="login-bg-wrap-login-btn-in pc-display">
                                        <Icon className="login-bg-wrap-login-btn-in-enter" type="arrow-right" />
                                    </div>
                                    <div className="login-bg-wrap-login-btn-into mobile-display" size="small">登录</div>
                                </button>
                                {
                                    errorStatus ?
                                        <Alert
                                            className="ipt-wrap-tips-errortips"
                                            message="用户名或密码错误(fm.design/fmd666)"
                                            type="error"
                                            showIcon
                                        /> :
                                        ""
                                }
                            </div>
                        </div>
                        <div className="login-footer">Copyright 2019 KD出品</div>
                    </div>
                </div>
            </Fragment>
        );
    }
}