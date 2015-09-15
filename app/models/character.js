import Ember from 'ember';

export default Ember.Object.extend({
  strength: 12,
  intelligence: 1,
  widsom: 2,
  dexterity: 8,
  constitution: 17,
  health: Ember.computed('level', 'constitution', function() {
    return this.get('constitution') * this.get('level');
  }),
  charisma: 18,
  level: 1,

  init() {
    this.set('name', generateName());
  }
});

var generateName = function() {
  var firstNames = ['Ragnar', 'Ulfric', 'Balgruf'];
  var lastNames = ['Valiant', 'Bold', 'Strong', 'Dainty'];
  var name = firstNames[Math.floor(Math.random()*firstNames.length)] + ' the ' +
             lastNames[Math.floor(Math.random()*lastNames.length)];
  return name;
};