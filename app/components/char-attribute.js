import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'tr',
    stat: "",
    characterStat: 0,

    actions: {
        decreaseStat: function(stat) {
            this.sendAction('decrease', stat.toLowerCase());
        },
        increaseStat: function(stat) {
            this.sendAction('increase', stat.toLowerCase());
        }
    }
});
