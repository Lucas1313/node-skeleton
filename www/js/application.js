(function($){
	
	var AppModel = Backbone.Model.extend({});
	var Router =  Backbone.Router.extend({
		routes:{
			'':'index',
			'test/:id':'getById'
		},
		index:function(){
			//alert('index')
		},
		getById : function(id){
			console.log(id);
			
		}
	});
	var AppCollection = Backbone.Collection.extend({});
	var AppView = Backbone.View.extend({});
	var router = new Router();
	var appModel = new AppModel({});
	var appView = new AppView({});
	alert()
	Backbone.history.start({pushState:true});
	
})(jQuery)