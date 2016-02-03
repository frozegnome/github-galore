import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var user = this.modelFor('user');
		return Ember.$.getJSON(user.repos_url);
	},
	setupController: function(controller, model) {
		var user = this.modelFor('user');
    controller.set('model', model);
    controller.set('user', user);
	}
});