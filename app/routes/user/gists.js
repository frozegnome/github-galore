import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var user = this.modelFor('user');
		return Ember.$.getJSON(user.gists_url);
	}
});
