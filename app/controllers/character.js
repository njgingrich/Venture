import Ember from 'ember';

export default Ember.Controller.extend({
  character: Ember.computed.alias('model'),


  actions: {
    levelUp: function() {
      this.set('model.level', this.get('model.level')+1);
    },

    increaseStat: function(stat) {
      this.set('model.'+stat, this.get('model.'+stat)+1);
    },
    decreaseStat: function(stat) {
      this.set('model.'+stat, this.get('model.'+stat)-1);
    }
  }
});
