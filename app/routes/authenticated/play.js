import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        var char = this.store.find('character', params.character);
        return this.store.query('world-view', { 
            character_id: char.get('id')}.then((worldViews) => {
                
        }));
    },
    serialize: function(model) {
        return { char: model.get('id') };
    }
});
