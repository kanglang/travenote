import React, { Component, Fragment } from 'react';
import './css/commentItem.scss';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');   
const errimg = require('@/common/images/errimg.png');

/**
 * @description 评论条目组件
 * @author Kanglang
 * @date 2019-03-28
 * @class CommentItem
 * @extends {Component}
 */
class CommentItem extends Component {
    // imgError = (e) => {
    //     console.log(e)
    //     e ? e.currentTarget.childNodes[0].src = errimg : '';
    //     return false;
    // }
    render() {
        const { commentArr } = this.props;
        return (
            <Fragment>
                <div className="commentShow">
                    <ul>
                        {
                            commentArr && commentArr.map((item, index) => {
                                return (
                                    <li key={item.id}>
                                        <div className="commentUser">
                                            <img src={item.avatar} alt="" /><span className="commentNick">{item.nick}</span><span className="commentFY">附议<span className="commentFYNum">{item.dingNum}</span></span>
                                        </div>
                                        <div className="commentContent">{item.commentContent}</div>
                                        <div className="commentDate">{moment(item.createTime).fromNow()}</div>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default CommentItem;
