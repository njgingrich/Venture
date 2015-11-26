import Ember from 'ember';

export default Ember.Route.extend({
  map: Ember.inject.service(),
  model: function() {
      let char = this.store.findAll('character').get('firstObject');
      return this.store.query('world-view', { character_id: char.get('id')}).then((worldViews) => {
          this.get('map').addToWorldView(worldViews.get('firstObject'));
          this.get('map.allCells')[char.get('x')][char.get('y')].set('hasCharacter', true);
          return char;
      });
  }
});