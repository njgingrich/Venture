import Ember from 'ember';

export default Ember.Controller.extend({
  characters: Ember.computed.alias('model'),
  character: Ember.computed.alias('characters.firstObject'),
  hasItems: Ember.computed.notEmpty('character.items'),
  burdenPercent: Ember.computed('character.itemWeight', 'character.maxWeight', function() {
    return Math.min(this.get('character.itemWeight') / this.get('character.maxWeight') * 100, 100);
  }),
  statList: ["Strength", "Wisdom", "Intelligence", "Charisma", "Constitution", "Charisma"],
  _modifyStat: function(stat, amount) {
    this.set('character.'+stat, this.get('character.'+stat)+amount);
  },

  actions: {
    levelUp: function() {
      this.set('character.level', this.get('character.level')+1);
    },

    increaseStat: function(stat) {
      this._modifyStat(stat, 1);
    },
    decreaseStat: function(stat) {
      if (this.get('character.'+stat) > 0) {
        this._modifyStat(stat, -1);
      }
    },
    openAddItemModal: function() {
      Ember.$('.add-item-modal').modal();
    },
    addItem: function(name, weight, bonuses) {
      var item = this.store.createRecord('item', {
        name: name,
        weight: weight,
        bonuses: bonuses
      });
      this.get('character.items').pushObject(item);
      item.save();
    },
    removeItem: function(item) {
      this.get('character.items').removeObject(item);
    },
    saveCharacter: function() {
      this.get('character').save();
    },
    changeCharacter: function(char) {
      this.set('character', char);
    },
    addCharacter: function() {
      var char = this.store.createRecord('character');
      char.save();
      this.set('character', char);
    },
    deleteCharacter: function(char) {
      this.get('character').deleteRecord();
      var that = this;
      this.get('character').save().then(function() {
        that.set('character');
        //that.set('character', that.get('characters.firstObject'));
      });
    }
  }
});
