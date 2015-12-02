import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'venture/tests/helpers/start-app';
import Pretender from 'pretender';

module('Acceptance | characters', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    if(server) {
        server.shutdown();
    }
    Ember.run(this.application, 'destroy');
  }
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

Ember.Test.registerAsyncHelper('seeOn', function(app, assert, url) {
    assert.equal(currentURL(), url);
});

Ember.Test.registerAsyncHelper('loginAs', function(app, u, p) {
    fillIn('.app-email', u);
    fillIn('.app-password', p);
    click('button');
});

test('user has to log in to see characters', function(assert) {
  visit('/characters');
  seeOn(assert, '/login');
});

test('can view characters when logged in', function(assert) {
    andThen(() => {
        var server = new Pretender(function() {
            this.post('/users/sign_in', function(request) {
               return [201, {}, JSON.stringify({
                   token: 'something',
                   email: 'test@example.com'
               })];
            });
            this.get('/characters', function(request) {
               return [200, {}, JSON.stringify({
                   characters: []
               })]
            });
        });
    });
    visit('/characters');
    seeOn(assert, '/login');
    window.loginAs('foo@bar.com', '123456');
    seeOn(assert, '/characters');
});
