'use strict';

define(function (require, exports, module) {
    var React = require('react');
    var HelloForm = require('./HelloForm');
    var HelloInfo = require('./HelloInfo');
    var BackboneMixin = {
        componentDidMount: function componentDidMount() {
            this.getBackboneModel().bind('change', this.forceUpdate.bind(this, null));
        },
        componentWillUnmount: function componentWillUnmount() {
            this.getBackboneModel().unbind(null, null, this);
        }
    };
    var HelloComponents = React.createClass({
        displayName: 'HelloComponents',

        mixins: [BackboneMixin],
        getBackboneModel: function getBackboneModel() {
            return this.props.data;
        },
        handleUpdate: function handleUpdate(newInfo) {
            this.props.data.set(newInfo);
            return;
        },
        handlePost: function handlePost(newInfo) {
            this.props.data.set(newInfo);
            this.props.onGetJsonData(this.props.data);
            return;
        },
        render: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(HelloInfo, { data: this.props.data }),
                React.createElement(HelloForm, { onUpdate: this.handleUpdate, onPost: this.handlePost })
            );
        }
    });
    module.exports = HelloComponents;
});