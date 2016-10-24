import React, {Component} from 'react';

/**
 * 简单组件
 */
export default class Demo1 extends Component {
    static propTypes = {
        message: React.PropTypes.string,
        children: React.PropTypes.object,
    }

    render() {
        return (
            <div>
                <span> Hello World :</span> <span>{this.props.message}</span>
                <p>{this.props.children}</p>
            </div>);
    }
}

// 看React提供了哪些顶层组件
console.log("Hello World jsx 看React提供了哪些顶层组件>>", React);
