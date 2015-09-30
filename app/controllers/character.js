import Ember from 'ember';
import Item from '../models/item';

export default Ember.Controller.extend({
  character: Ember.computed.alias('model'),
  hasItems: Ember.computed.notEmpty('character.items'),
  burdenPercent: Ember.computed('character.itemWeight', 'character.maxWeight', function() {
    return Math.min(this.get('character.itemWeight') / this.get('character.maxWeight') * 100, 100);
  }),

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
    },
    openModal: function(target) {
      var modal = Ember.Views.views[target];
      modal.send('toggleModal');
    }
  }
});
