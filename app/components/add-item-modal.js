import Ember from 'ember';
import layout from '../templates/components/add-item-modal';

export default Ember.Component.extend({
    actions: {
        toggleModal: function() {
            this.toggleProperty('enabled');
        },
    },
    layout: add-item-modal
   });