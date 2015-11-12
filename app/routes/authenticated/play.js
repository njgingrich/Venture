import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return this.store.find('character', params.character);
    },
    serialize: function(model) {
        return { char: model.get('id') };
    }
});
