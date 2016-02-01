import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var user = this.modelFor('user'),
		    url = user.starred_url.replace('{/owner}{/repo}', '');
		return Ember.$.getJSON(url);
	}
});
