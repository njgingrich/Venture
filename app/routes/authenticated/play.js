import Ember from 'ember';

export default Ember.Route.extend({
    map: Ember.inject.service(),
    model: function(params) {
        return this.store.findRecord('character', params.character).then(char => {
            return this.store.query('world-view', { character_id: char.get('id') }).then((worldViews) => {
                var view = worldViews.get('firstObject');
                console.log(view);
                // do something with worldview?
                this.get('map').addToWorldView(view);
                this.get('map.allCells')[char.get('x')][char.get('y')].set('hasCharacter', true);
                return char;
            });
        });
    },
    serialize: function(model) {
        return { char: model.get('id') };
    }
});
