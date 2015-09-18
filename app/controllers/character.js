import Ember from 'ember';
import Item from '../models/item';

export default Ember.Controller.extend({
  character: Ember.computed.alias('model'),
  hasItems: Ember.computed.notEmpty('character.items'),

  _modifyStat: function(stat, amount) {
    this.set('model.'+stat, this.get('model.'+stat)+amount);
  },

  actions: {
    levelUp: function() {
      this.set('model.level', this.get('model.level')+1);
    },

    increaseStat: function(stat) {
      this._modifyStat(stat, 1);
    },
    decreaseStat: function(stat) {
      if (this.get('model.'+stat) > 0) {
        this._modifyStat(stat, -1);
      }
    },
    addItem: function() {
      this.get('character.items').pushObject(Item.createRandom());
    },
    removeItem: function(item) {
      this.get('character.items').removeObject(item);
    }
  }
});
