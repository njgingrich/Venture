import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    hasPointsLeft: Ember.computed.gt('pointsLeft', 0),

    actions: {
        decreaseStat: function() {
            if ((this.get('stat') > 0)) {
                this.incrementProperty('pointsLeft');
                this.decrementProperty('stat');
            }
        },
        increaseStat: function() {
            if(this.get('hasPointsLeft')) {
                this.decrementProperty('pointsLeft');
                this.incrementProperty('stat');
            }
        }
    }
});
