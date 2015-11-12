import Ember from 'ember';

export default Ember.Controller.extend({
    characters: Ember.computed.alias('model'),

    actions: {
        deleteCharacter: function(id) {
            this.store.find('character', id).then(function(character) {
                character.destroyRecord();
            });
        }
    }
});
