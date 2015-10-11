import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    stat: "",
    characterStat: 0,

    actions: {
        decreaseStat: function(stat) {
            this.sendAction(stat);
        },
        increaseStat: function(stat) {
            this.sendAction(stat);
        }
    }
});
