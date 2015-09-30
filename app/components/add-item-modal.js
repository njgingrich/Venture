import Ember from 'ember';
import modalLayout from '../templates/components/add-item-modal';
import character from '../controllers/character';

export default Ember.Component.extend({
  actions: {
    ok: function() {
      //this.get('character.items').pushObject(Item.create());
      // apparently don't do this
      var store = this.get('targetObject.store');
      var sword = store.createRecord('item', {
        name: 'Sword of Life',
        weight: 4,
        constitutionBonus: 3
      });
      character.get('items').pushObject(sword);
      this.$('.add-item-modal').modal('hide');
      this.sendAction('ok');
    }
  },
  show: function() {
    this.$('.add-item-modal').modal();
  }//.on('didInsertElement'),

});