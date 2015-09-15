import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    levelUp: function() {
      this.set('model.level', this.get('model.level')+1);
    }
  }
});
