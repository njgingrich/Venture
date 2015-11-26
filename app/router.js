import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('authenticated', {path: '/'}, function() {
      this.route('secret');
      this.route('map');
      this.route('characters');
      this.route('add-character');
      this.route('play', {path: '/play/:char'});
  });
});

export default Router;
