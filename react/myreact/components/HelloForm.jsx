define(function(require,exports, module) {
    var React = require('react');
    var HelloForm = React.createClass({
        handlePost:function(e){
            var myName = this.refs.myName.getDOMNode().value.trim();
            var myLocation = this.refs.myLocation.getDOMNode().value.trim();
            if (!myName||!myLocation){
                return;
            }
            this.props.onPost({name:myName,location:myLocation});
            this.refs.myName.getDOMNode().value='';
            this.refs.myLocation.getDOMNode().value='';
            return;
        },
        handleUpdate:function(e){
            var myName = this.refs.myName.getDOMNode().value.trim();
            var myLocation = this.refs.myLocation.getDOMNode().value.trim();
            if (!myName||!myLocation){
                return;
            }
            this.props.onUpdate({name:myName,location:myLocation});
            this.refs.myName.getDOMNode().value='';
            this.refs.myLocation.getDOMNode().value='';
            return;
        },
        render: function () {
            return (
                <div>
                    <form>
                        <input type="text" ref="myName" />
                        <input type="text" ref="myLocation" />
                        <input type="button" value="Post" onClick={this.handlePost} />
                        <input type="button" value="Update" onClick={this.handleUpdate} />
                    </form>
                </div>
            );
        }
    });
    module.exports = HelloForm;
});

