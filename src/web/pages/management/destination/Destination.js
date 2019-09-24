import React, { Component } from 'react';
import { Carousel, Tabs } from 'antd';
import './css/destination.scss';
import CountryCard from "./CountyCard";
const TabPane = Tabs.TabPane;
const lunbopic = require('./img/businessShow_bg.jpg');
const defPic = require('./img/businessShow_bg.jpg');
class Destination extends Component {
  callback = (key) => {
    console.log(key);
  }
  goCountryDetail=(userId)=>{
    console.log("国家id",userId);
  }
  render() {
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
      }
    ]
    const countryType = [
      {
        key: "RM",
        tab: "热门",
        tabTips: "热门国家",
        countrys: [
          {
            id: "1",
            imgUrl: defPic,
            countryName: "中国"
          },
          {
            id: "2",
            imgUrl: defPic,
            countryName: "泰国"
          },
          {
            id: "3",
            imgUrl: defPic,
            countryName: "新加坡"
          },
          {
            id: "4",
            imgUrl: defPic,
            countryName: "日本"
          },
          {
            id: "5",
            imgUrl: defPic,
            countryName: "中国"
          },
          {
            id: "6",
            imgUrl: defPic,
            countryName: "泰国"
          },
          {
            id: "7",
            imgUrl: defPic,
            countryName: "新加坡"
          },
          {
            id: "8",
            imgUrl: defPic,
            countryName: "日本"
          }
        ]
      },
      {
        key: "YZ",
        tab: "亚洲",
        tabTips: "亚洲国家",
        countrys: [
          {
            id: "1",
            imgUrl: defPic,
            countryName: "中国"
          },
          {
            id: "2",
            imgUrl: defPic,
            countryName: "泰国"
          },
          {
            id: "3",
            imgUrl: defPic,
            countryName: "新加坡"
          },
          {
            id: "4",
            imgUrl: defPic,
            countryName: "日本"
          }
        ]
      },
      {
        key: "OZ",
        tab: "欧洲",
        tabTips: "欧洲国家",
        countrys: [
          {
            id: "1",
            imgUrl: defPic,
            countryName: "中国"
          },
          {
            id: "2",
            imgUrl: defPic,
            countryName: "泰国"
          },
          {
            id: "3",
            imgUrl: defPic,
            countryName: "新加坡"
          },
          {
            id: "4",
            imgUrl: defPic,
            countryName: "日本"
          }
        ]
      },
      {
        key: "FZ",
        tab: "非洲",
        tabTips: "非洲国家",
        countrys: [
          {
            id: "1",
            imgUrl: defPic,
            countryName: "中国"
          },
          {
            id: "2",
            imgUrl: defPic,
            countryName: "泰国"
          },
          {
            id: "3",
            imgUrl: defPic,
            countryName: "新加坡"
          },
          {
            id: "4",
            imgUrl: defPic,
            countryName: "日本"
          }
        ]
      },
      {
        key: "MZ",
        tab: "美洲",
        tabTips: "美洲国家",
        countrys: [
          {
            id: "1",
            imgUrl: defPic,
            countryName: "中国"
          },
          {
            id: "2",
            imgUrl: defPic,
            countryName: "泰国"
          },
          {
            id: "3",
            imgUrl: defPic,
            countryName: "新加坡"
          },
          {
            id: "4",
            imgUrl: defPic,
            countryName: "日本"
          }
        ]
      },
      {
        key: "DYZ",
        tab: "大洋洲",
        tabTips: "大洋洲国家",
        countrys: [
          {
            id: "1",
            imgUrl: defPic,
            countryName: "中国"
          },
          {
            id: "2",
            imgUrl: defPic,
            countryName: "泰国"
          },
          {
            id: "3",
            imgUrl: defPic,
            countryName: "新加坡"
          },
          {
            id: "4",
            imgUrl: defPic,
            countryName: "日本"
          }
        ]
      }
    ]
    return (
      <div className="destination">
        <Carousel autoplay>
          {
            lunbos && lunbos.map((item, index) => {
              return (
                <a key={item.id} href={item.href} target="blank" className="destinationA"><img key={index} className="destWrap" src={item.picUrl} alt="" /></a>
              );
            })
          }
        </Carousel>
        <div className="destHot">
          <div className="destOut">
            <div className="destTips">最热目的地</div>
            <Tabs defaultActiveKey="RM" onChange={this.callback} tabBarStyle={{ color: "#000" }} size="large">
              {
                countryType && countryType.map((item, index) => {
                  return (
                    <TabPane tab={item.tab} key={item.key} className="destCountry">
                      <div className="destRm">{item.tabTips}</div>
                      <CountryCard countrys={item.countrys} goCountryDetail={this.goCountryDetail}/>
                    </TabPane>
                  );
                })
              }
            </Tabs>
          </div>

        </div>
      </div>
    );
  }
}

export default Destination;
