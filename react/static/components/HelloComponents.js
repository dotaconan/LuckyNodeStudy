define(function(require,exports, module) {
    var React = require('react');
    var HelloForm = require('./HelloForm');
    var HelloInfo = require('./HelloInfo');
    var BackboneMixin = {
        componentDidMount: function () {
            this.getBackboneModel().bind('change', this.forceUpdate.bind(this, null));
        },
        componentWillUnmount: function () {
            this.getBackboneModel().unbind(null, null, this);
        }
    };
    var HelloComponents = React.createClass({displayName: "HelloComponents",
        mixins: [BackboneMixin],
        getBackboneModel: function () {
            return this.props.data;
        },
        handleUpdate:function(newInfo){
            this.props.data.set(newInfo);
            return;
        },
        handlePost:function(newInfo){
            this.props.data.set(newInfo);
            this.props.onGetJsonData(this.props.data);
            return;
        },
        render: function () {
            return (
                React.createElement("div", null, 
                    React.createElement(HelloInfo, {data: this.props.data}), 
                    React.createElement(HelloForm, {onUpdate: this.handleUpdate, onPost: this.handlePost})
                )
            );
        }
    });
    module.exports = HelloComponents;
});