import React, { Component, Fragment } from 'react';
const defaultavart = require('./img/home3.jpg');

class TravelCard extends Component {


    TuijianDetail = (userId) => {
        const {goDetail} = this.props;
        goDetail(userId);
    }
    render() {
        const { successData}=this.props;
        const self = this;
        return (
            <Fragment>
                <ul>
                    {
                       successData && successData.map(function (item, index) {
                            var pics = item.userpic;
                            var likes = item.like;
                            var comments = item.comment;
                            return <li key={item.id} onClick={() => { self.TuijianDetail(item.id) }}>
                                <div className="wonderful-pic">
                                    <div className="wonderful-pic-a"><img src={pics[0].fileurl} alt="图片" /></div>
                                    <div className="wonderful-pic-introduce" title={item.title}>{item.title}</div>
                                    <div className="avart-wrap">
                                        <span className="avart"><img src={item.avart ? item.avart : defaultavart} alt="用户头像" /></span>
                                        <span className="nick">{item.username}</span>
                                        <span className="like-comment">
                                            <span className="like" href=" ">喜欢<span className="wonder-type-num">{likes.length}</span></span>
                                            <span className="comment" href=" ">评论<span className="wonder-type-num">{comments.length}</span></span>
                                        </span>
                                    </div>
                                </div>
                            </li>

                        })
                    }
                </ul>
            </Fragment>
        );
    }
}

export default TravelCard;
