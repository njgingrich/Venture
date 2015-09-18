import Ember from 'ember';

var Item = Ember.Object.extend({
  name: '',
  weight: 0,
  bonuses: {
    constitution: 0,
    strength: 0
  }
});

Item.reopenClass({
  createRandom: function() {
    return Item.create({
      name: "Magic Sword of Life",
      weight: 10,
      bonuses: {
        constitution: 3
      }
    });
  }
});

export default Item;