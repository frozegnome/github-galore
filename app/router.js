import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user', { path: '/users/:login' }, function() {
    this.route('repositories', { path: '/repositories' });
    this.route('stars', { path: '/stars' });
    this.route('gists', { path: '/gists' });
  });
});

export default Router;
