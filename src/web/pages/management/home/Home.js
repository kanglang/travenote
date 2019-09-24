import React, { Component } from 'react';
import './css/Home.scss';
import { Carousel } from 'antd';
import TravelCard from "./TravelCard";

const lunbopic = require('./img/home_bg.jpg');

class Home extends Component {


  goDetail = (userId) => {
    console.log(userId);
    this.props.history.push({ pathname: "./Detail", state: { from: "SuishoujiDetail", userId: userId } })
  }
  jump = (href) => {
    window.location.href = href
  }
  render() {
    const successData = [
      {
        id: "0",
        username: "每逢时可",
        title: "这里真是 太美丽，以后还会来玩",
        avart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        userpic: [
          {
            id: "p1",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          },
          {
            id: "p2",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          },
          {
            id: "p3",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          }
        ],
        like: [
          {
            id: "l1",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          },
          {
            id: "l2",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          },
          {
            id: "l3",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          }
        ],
        comment: [
          {
            id: "c1",
            content: "你这个坏女人"
          },
          {
            id: "c2",
            content: "你这个坏女人"
          },
          {
            id: "c3",
            content: "你这个坏女人"
          }
        ],
      },
      {
        id: "1",
        username: "每逢时可",
        title: "这里真是 太美丽，以后还会来玩",
        avart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        userpic: [
          {
            id: "p1",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          },
          {
            id: "p2",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          },
          {
            id: "p3",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          }
        ],
        like: [
          {
            id: "l1",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          },
          {
            id: "l2",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          },
          {
            id: "l3",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          }
        ],
        comment: [
          {
            id: "c1",
            content: "你这个坏女人"
          },
          {
            id: "c2",
            content: "你这个坏女人"
          },
          {
            id: "c3",
            content: "你这个坏女人"
          }
        ],
      },

      {
        id: "2",
        username: "每逢时可",
        title: "这里真是 太美丽，以后还会来玩",
        avart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        userpic: [
          {
            id: "p1",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          },
          {
            id: "p2",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          },
          {
            id: "p3",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          }
        ],
        like: [
          {
            id: "l1",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          },
          {
            id: "l2",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          },
          {
            id: "l3",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          }
        ],
        comment: [
          {
            id: "c1",
            content: "你这个坏女人"
          },
          {
            id: "c2",
            content: "你这个坏女人"
          },
          {
            id: "c3",
            content: "你这个坏女人"
          }
        ],
      },
      {
        id: "3",
        username: "每逢时可",
        title: "这里真是 太美丽，以后还会来玩",
        avart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        userpic: [
          {
            id: "p1",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          },
          {
            id: "p2",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          },
          {
            id: "p3",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          }
        ],
        like: [
          {
            id: "l1",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          },
          {
            id: "l2",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          },
          {
            id: "l3",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          }
        ],
        comment: [
          {
            id: "c1",
            content: "你这个坏女人"
          },
          {
            id: "c2",
            content: "你这个坏女人"
          },
          {
            id: "c3",
            content: "你这个坏女人"
          }
        ],
      },
      {
        id: "4",
        username: "每逢时可",
        title: "这里真是 太美丽，以后还会来玩",
        avart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        userpic: [
          {
            id: "p1",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          },
          {
            id: "p2",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          },
          {
            id: "p3",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          }
        ],
        like: [
          {
            id: "l1",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          },
          {
            id: "l2",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          },
          {
            id: "l3",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          }
        ],
        comment: [
          {
            id: "c1",
            content: "你这个坏女人"
          },
          {
            id: "c2",
            content: "你这个坏女人"
          },
          {
            id: "c3",
            content: "你这个坏女人"
          }
        ],
      }, {
        id: "5",
        username: "每逢时可",
        title: "这里真是 太美丽，以后还会来玩",
        avart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        userpic: [
          {
            id: "p1",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          },
          {
            id: "p2",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          },
          {
            id: "p3",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          }
        ],
        like: [
          {
            id: "l1",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          },
          {
            id: "l2",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          },
          {
            id: "l3",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          }
        ],
        comment: [
          {
            id: "c1",
            content: "你这个坏女人"
          },
          {
            id: "c2",
            content: "你这个坏女人"
          },
          {
            id: "c3",
            content: "你这个坏女人"
          }
        ],
      }
      , {
        id: "6",
        username: "每逢时可",
        title: "这里真是 太美丽，以后还会来玩",
        avart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        userpic: [
          {
            id: "p1",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          },
          {
            id: "p2",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          },
          {
            id: "p3",
            fileurl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
          }
        ],
        like: [
          {
            id: "l1",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          },
          {
            id: "l2",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          },
          {
            id: "l3",
            likeAvart: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          }
        ],
        comment: [
          {
            id: "c1",
            content: "你这个坏女人"
          },
          {
            id: "c2",
            content: "你这个坏女人"
          },
          {
            id: "c3",
            content: "你这个坏女人"
          }
        ],
      }
    ];
    const lunbos = [
      {
        id: '1',
        picUrl: lunbopic,
        href: "http://www.baidu.com"
      },
      {
        id: '2',
        picUrl: lunbopic,
        href: "http://www.google.com"
      }, {
        id: '3',
        picUrl: lunbopic,
        href: "http://www.zhidao.com"
      }
    ]

    return (
      <div className="home">

        <Carousel autoplay>
          {
            lunbos && lunbos.map((item, index) => {
              return (
                <a key={item.id} href={item.href} target="_blank" className="homeA"><img key={index} className="homeWrap" src={item.picUrl} alt="" /></a>
              );
            })
          }
        </Carousel>
        <div className="homeTravel">
          <div className="homeTravelTips">旅游随手记</div>
          <div className="homeCard">
            <TravelCard successData={successData} goDetail={this.goDetail} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
