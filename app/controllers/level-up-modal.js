import Ember from 'ember';

export default Ember.Controller.extend({
    character: Ember.computed.alias('model.character'),
    pointsLeft: Ember.computed.alias('model.pointsLeft'),

    hasPointsLeft: Ember.computed.gt('pointsLeft', 0),

    actions: {
        levelUp: function() {
            // probably should validate
            this.get('character').save();
            this.send('closeModal');
        }
    }
});