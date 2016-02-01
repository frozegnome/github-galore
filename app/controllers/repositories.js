import Ember from 'ember';

//TODO: Find out why user controller isn't injecting into repositories controller

export default Ember.Controller.extend({
	user: Ember.inject.controller('user')
});
