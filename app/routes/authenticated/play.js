import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return this.store.findRecord('character', params.character).then(char => {
            return this.store.query('world-view', { character_id: char.get('id') }).then((worldViews) => {
                var view = worldViews.get('firstObject');
                return char;
            });
        });
    },
    serialize: function(model) {
        return { char: model.get('id') };
    }
});
