define(function(require,exports, module) {
    var React = require('react');
    var HelloInfo = React.createClass({
        render: function () {
            return (
                <div>
                    <div>Hello,{this.props.data.get("name")},I am in {this.props.data.get("location")}</div>
                </div>
            );
        }
    });
    module.exports = HelloInfo;
});

