import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',

    actions: {
        decreaseStat: function() {
            this.set('stat', this.get('stat')-1);
        },
        increaseStat: function() {
            this.set('stat', this.get('stat')+1);
        }
    }
});
