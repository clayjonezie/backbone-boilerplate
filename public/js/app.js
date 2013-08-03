var AppRouter = Backbone.Router.extend({
    routes: {
    }
});

var app = new AppRouter();

$(function() {
    Backbone.history.start();
});