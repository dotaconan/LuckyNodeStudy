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
    var HelloComponents = React.createClass({
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
                <div>
                    <HelloInfo data={this.props.data}/>
                    <HelloForm onUpdate={this.handleUpdate} onPost={this.handlePost} />
                </div>
            );
        }
    });
    module.exports = HelloComponents;
});