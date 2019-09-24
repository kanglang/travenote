import React, { Component, Fragment } from 'react';
import './css/suishoujiDetail.scss';
import CommentItem from './CommentItem';
import { checkStrLengths } from '@/common/utils/utils';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const defaultavart = require('./img/home2.jpg');

const suishoujiDetail = {
    id: "aaaaa",
    title: "北上广穷游七日行",
    avatar: defaultavart,
    nick: "直上云霄",
    createTime: "2019-03-26",
    scenic: "九寨沟",
    like: [
        {
            id: "1",
            avatar: defaultavart
        },
        {
            id: "2",
            avatar: defaultavart
        }, {
            id: "3",
            avatar: defaultavart
        }
    ],
    comment: [
        {
            id: "1",
            nick: "用户1",
            avatar: defaultavart,
            commentContent: "幅度多大多多多多多多多多多多多多多多多姑姑姑父和规范化和",
            createTime: "2019-01-01",
            dingNum: 12
        },
        {
            id: "2",
            nick: "用户2",
            avatar: defaultavart,
            commentContent: "我我问哦哦我 地方胜多负少水电费水电费看来的看看地方存下看看第三方第三方的大V把第三方第三方",
            createTime: "2019-03-28",
            dingNum: 18
        }
    ],
    contentHtml: ""
}
/**
 * @description  随手记详情
 * @author Kanglang
 * @date 2019-03-28
 * @class SuishoujiDetail
 * @extends {Component}
 */
class SuishoujiDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxInput: 300,
            inputedNum: 0
        }
    }
    componentDidMount() {
        const { userId } = this.props;
        console.log("userId", userId);
        //请求接口,获取详情信息suishoujiDetail
    }
    back = () => {
        const { goBack }=this.props;
        goBack();
    }
    changeHandle = () => {
        //获取输入内容
        var userDesc = document.getElementById('commentArea').value;
        //判断字数
        var len;
        if (userDesc) {
            len = checkStrLengths(userDesc, 300);
        } else {
            len = 0
        }
        this.setState({ inputedNum: len });
    }
    goComent = () => {
        var inputContent = document.getElementById('commentArea');
        var commentContent = inputContent.value;
        alert(commentContent);
        inputContent.value = "";
    }
    render() {
        const { maxInput, inputedNum } = this.state;
        return (
            <Fragment>
                <div className="suishoujiTips"><span onClick={this.back} className="goback">《</span><span className="shjTips">随手记详情</span></div>
                <div className="suishouji">
                    <div className="suishoujiTitle">{suishoujiDetail.title}</div>
                    <div className="userInfo">
                        <div className="userDetail">
                            <img src={suishoujiDetail.avatar} alt=" " />
                            <span className="nick">{suishoujiDetail.nick}</span>
                            <span className="date">{moment(suishoujiDetail.createTime).fromNow()}</span>
                        </div>
                        <div className="likeComment">
                            <span className="comment" href=" ">景点<span className="likeCommonStyle">{suishoujiDetail.scenic}</span></span>
                            <span className="like" href=" ">喜欢<span className="likeCommonStyle">{suishoujiDetail.like.length}</span></span>
                            <span className="comment" href=" ">评论<span className="likeCommonStyle">{suishoujiDetail.comment.length}</span></span>
                        </div>
                        <div className="contentHtml">
                            <div>
                                <img src={defaultavart} />
                                <p>圣托里尼岛是色彩的天堂。碧蓝的。</p>
                                <img src={defaultavart} />
                                <p>圣托里尼岛是色彩的天堂。碧蓝的爱琴海，黑红熔岩的悬崖，亮得晃眼的白墙，大丛大丛的鲜艳花</p>
                            </div>
                        </div>
                        {/* <div className="contentHtml" dangerouslySetInnerHTML={{ __html: "" }}></div> */}
                        <div className="commentWrap">
                            <div className="commentTips">我要评论({suishoujiDetail.comment.length}条)</div>
                            <div className="commentInput">
                                <textarea id="commentArea" className="commentArea" rows="3" type="text" maxLength={maxInput} onChange={this.changeHandle}></textarea>
                                <div className="commentNumBtn">
                                    <div className="commentNum"><span>{inputedNum}</span>/{maxInput}</div>
                                    <div className="commentBtn"><input type="button" value="发表" onClick={this.goComent} /></div>
                                </div>
                            </div>
                            <CommentItem commentArr={suishoujiDetail.comment} />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default SuishoujiDetail;
