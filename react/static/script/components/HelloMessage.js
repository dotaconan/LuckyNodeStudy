'use strict';

define(function (require, exports, module) {
    var React = require('react');
    var BackboneMixin = {
        componentDidMount: function componentDidMount() {
            this.getBackboneModel().bind('change', this.forceUpdate.bind(this, null));
        },
        componentWillUnmount: function componentWillUnmount() {
            this.getBackboneModel().unbind(null, null, this);
        }
    };
    HelloMessage = React.createClass({
        displayName: 'HelloMessage',

        mixins: [BackboneMixin],
        getBackboneModel: function getBackboneModel() {
            return this.props.data;
        },
        handleChange: function handleChange() {
            var newInfo = { name: 'Air', location: "New York" };
            this.props.data.set(newInfo);
            this.props.onGetJsonData('ok!');
        },
        render: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement('input', { type: 'button', value: 'Post', onClick: this.handleChange }),
                React.createElement(
                    'div',
                    null,
                    'Hello,',
                    this.props.data.attributes.name,
                    ',I am in ',
                    this.props.data.attributes.location
                )
            );
        }
    });
    module.exports = HelloMessage;
});