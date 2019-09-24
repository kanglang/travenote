import React, { Component } from 'react';
import Exception from '@/common/exception/exception';
/**
 * @description 异常码为404的页面
 * @author Kanglang
 * @date 2019-02-18
 * @class Exception404
 * @extends {Component}
 */
export default class Exception404 extends Component {

    render() {
        return (
            <Exception code={404}/>
        );
    }
}