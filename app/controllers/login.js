import Ember from 'ember';

export default Ember.Controller.extend({
    identification: "",
    password: "",

    actions: {
        login: function() {
            console.log("clicked login with user: ", this.get('identification'), 
                        "and pass: ", this.get('password'));
        }
    }
});
