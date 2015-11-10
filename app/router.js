import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', {path: '/'});
  this.route('authenticated', function() {
      this.route('secret');
      this.route('map');
      this.route('characters');
  this.route('add-character');
  });
});

export default Router;
