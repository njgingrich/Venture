import Ember from 'ember';

export default Ember.Object.extend({
    randomize: function() {
        var char = this.store.createRecord('character');
        var stats = ['intelligence', 'strength', 'wisdom',
                      'constitution', 'dexterity', 'charisma'];

        var points = char.get('pointsToSpend');
        for (let i = 0; i < points; i++) {
            var j = Math.floor(Math.random() * stats.length);
            console.log(j, stats[j]);
            char.incrementProperty(stats[j]);
        }
        char.set('pointsToSpend', 0);
        return char;
    }
});
