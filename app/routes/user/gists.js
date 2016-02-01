import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var user = this.modelFor('user'),
		    url = user.gists_url.replace('{/gist_id}', '');
		return Ember.$.getJSON(url);
	}
});
