import Ember from 'ember';
//import Character from 'venture/models/character';

export default Ember.Route.extend({
  model: function() {
    // todo: load data here
    var char = this.store.createRecord('character');
    var sword = this.store.createRecord('item', {
        name: 'Sword of Life',
        weight: 4,
        constitutionBonus: 3
    });
    char.get('items').pushObject(sword);
    //char.save();
    return char;
  }
});
