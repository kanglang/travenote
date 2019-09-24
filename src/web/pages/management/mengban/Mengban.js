import React, { Component } from 'react';
import './css/Mengban.css';
import { withRouter } from 'react-router-dom';

class Mengban extends Component {    
    constructor(props){
        super(props);
        console.log(this.props)
        this.state=({
            page: ''
        });
    }
  goGovWebkit(){
    document.getElementById("Mengban").style.display = "none";
  }
  render() {
    return (
      <div className="Mengban" id="Mengban">
        <div>
          <i className="part1-logo"></i>
          <span className="Mengban-part1">我乃第一页</span>
        </div>
        <p className="Mengban-part2" onClick={this.goGovWebkit.bind(this)}>进入&nbsp;&nbsp;<span className="transone">></span>&nbsp;<span className="transtwo">></span></p>
        <div className="Mengban-part3">
          <i className="part3-gongzhonghao" title="二维码"></i>
          <i className="part3-xiaochengxu" title="二维码"></i>  
        </div>
      </div>
    );
  }
}

export default withRouter(Mengban);
