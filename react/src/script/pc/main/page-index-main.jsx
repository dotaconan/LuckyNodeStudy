seajs.use("../static/script/pc/modules/page-index", function (reactApp) {
    var model = {name: 'mike', location: 'Beijing'};
    var reactInstance = reactApp.getInstance(model);
});