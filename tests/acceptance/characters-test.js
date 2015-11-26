import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'venture/tests/helpers/start-app';

module('Acceptance | characters', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('user has to log in to see characters', function(assert) {
  visit('/characters');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

Ember.Test.registerAsyncHelper('resumablePause', function(app) {
    Ember.Test.adapter.asyncStart();
    return new Ember.RSVP.Promise(function(resolve) {
        window.continueTest = function() {
            Ember.Test.adapter.asyncEnd();
            resolve();
        };
    }, 'Test Adapter paused');
});

test('can view characters when logged in', function(assert) {
    visit('/characters');
    andThen(function() {
        assert.equal(currentURL(), '/characters');
    });

    fillIn('.app-email', 'foo@bar.com');
    fillIn('.app-password', '123456');
    click('.app-submit');
});
