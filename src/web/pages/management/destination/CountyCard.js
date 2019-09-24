import React, { Component, Fragment } from 'react';
import './css/countryCard.scss';
const defPic = require('./img/businessShow_bg.jpg');

class CountyCard extends Component {


    countryDetail = (userId) => {
        const { goCountryDetail } = this.props;
        goCountryDetail(userId);
    }
    render() {
        const { countrys } = this.props;
        const self = this;
        return (
            <Fragment>
                <ul>
                    {
                        countrys && countrys.map(function (item, index) {
                            return <li key={item.id} onClick={() => { self.countryDetail(item.id) }}>
                                <div className="destPic">
                                    <div className="destPicA"><img src={item.imgUrl} alt="图片" /></div>
                                    <div className="destPicTitle" title={item.countryName}>{item.countryName}</div>
                                </div>
                            </li>

                        })
                    }
                </ul>
            </Fragment>
        );
    }
}

export default CountyCard;
