define(function(require,exports, module) {
    var $ = require('$');
    var React = require('react');
    var Backbone = require('backbone');
    var HelloMessage = require('./components/HelloMessage');
    var ReactApp={
        getJsonData:function(data){
            alert('收集数据成功55！'+data);
        },
        getInstance:function(model,options){
            var modelData = new Backbone.Model(model);
            React.render(React.createElement(HelloMessage, {data: modelData, onGetJsonData: this.getJsonData}), $('#example')[0]);
        }
    };
    return ReactApp;
});

