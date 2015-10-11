import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    stat: "",
    character: null,
    getStat: function(stat) {
        return this.get('character.'+stat);
    },

    actions: {
        decreaseStat: function(stat) {
            this.sendAction(stat);
        },
        increaseStat: function(stat) {
            this.sendAction(stat);
        }
    }
});
