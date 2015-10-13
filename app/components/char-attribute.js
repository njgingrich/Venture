import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',

    actions: {
        decreaseStat: function() {
            if (this.get('stat') > 0) {
                this.decrementProperty('stat');
            }
        },
        increaseStat: function() {
            this.incrementProperty('stat');
        }
    }
});
