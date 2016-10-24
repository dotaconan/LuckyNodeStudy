define((require, exports, module)=> {
    const $ = require('$');
    const React = require('react');
    const Backbone = require('backbone');
    let HelloMessage = require('../../sea-modules/test/HelloMessage');
    let ReactApp={
        getJsonData:function(data){
            alert('收集数据成功55！'+data);
        },
        getInstance:function(model,options){
            var modelData = new Backbone.Model(model);
            React.render(<HelloMessage data={modelData} onGetJsonData={this.getJsonData} />, $('#example')[0]);
        }
    };
    return ReactApp;
});
