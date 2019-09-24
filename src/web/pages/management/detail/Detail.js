import React, { Component, Fragment } from 'react';
import SuishoujiDetail from './SuishoujiDetail';

class Detail extends Component {
    constructor(props){
        super(props);
        this.data = this.props.location.state || {};
        console.log(this.data)
    }
    goBack=()=>{
        this.props.history.goBack();
    }
    showDetail(from, userId) {
        if (from === "SuishoujiDetail") {
            return(
                <SuishoujiDetail userId={userId} goBack={this.goBack}></SuishoujiDetail>
            ); 
        } else {
            return null
        }
    }
    render() {
        const { from, userId } = this.data;
        return (
            <Fragment>
                {this.showDetail(from, userId)}
            </Fragment>
        );
    }
}

export default Detail;
