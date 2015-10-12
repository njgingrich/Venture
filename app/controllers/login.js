import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
    authenticator: 'simple-auth-authenticator:devise',
    identification: "",
    password: "",

    actions: {
      login: function() {
        console.log("logged in with email ", this.get('identification'), "and pass ", this.get('password'));
      }
    }
});
