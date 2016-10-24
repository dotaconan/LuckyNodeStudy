"use strict";

define(function (require, exports, module) {
    var React = require('react');
    var HelloInfo = React.createClass({
        displayName: "HelloInfo",

        render: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    null,
                    "Hello,",
                    this.props.data.get("name"),
                    ",I am in ",
                    this.props.data.get("location")
                )
            );
        }
    });
    module.exports = HelloInfo;
});