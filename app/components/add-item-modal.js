import Ember from 'ember';
import modalLayout from '../templates/components/add-item-modal';

export default Ember.Component.extend({
  actions: {
    ok: function() {
      this.$('.add-item-modal').modal('hide');
      this.sendAction('ok');
    }
  },
  show: function() {
    this.$('.add-item-modal').modal();
  }//.on('didInsertElement'),

});