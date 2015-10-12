import Ember from 'ember';

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