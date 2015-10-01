import Ember from 'ember';
import modalLayout from '../templates/components/add-item-modal';
import character from '../controllers/character';

export default Ember.Component.extend({
  itemName: "Magic Sword",
  weight: 0,
  conBonus: 0,
  strBonus: 0,

  actions: {
    ok: function() {
      var name = this.get('itemName');
      var weight = this.get('weight');
      var bonuses = {
        constitution: this.get('conBonus'),
        strength: this.get('strBonus')
      };
      this.sendAction('action', name, weight, bonuses);
      this.$('.add-item-modal').modal('hide');
    }
  },
  show: function() {
    this.$('.add-item-modal').modal();
  }//.on('didInsertElement'),

});