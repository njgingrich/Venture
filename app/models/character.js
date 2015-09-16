import Ember from 'ember';

const BASE_HP = 40;
const BASE_MANA = 30;

export default Ember.Object.extend({
  name: Ember.computed(function() {
    var firstNames = ['Ragnar', 'Ulfric', 'Balgruf'];
    var lastNames = ['Valiant', 'Bold', 'Strong', 'Dainty'];
    return firstNames[Math.floor(Math.random()*firstNames.length)] + ' the ' +
           lastNames[Math.floor(Math.random()*lastNames.length)];
  }),
  class: Ember.computed(function() {
    var classes = ['Wizard', 'Warrior', 'Bard', 'Paladin', 'Rogue', 'Ranger', 'Knight', 'Elf'];
    return classes[Math.floor(Math.random()*classes.length)];
  }),
  maxHealth: Ember.computed('level', 'constitution', function() {
    return BASE_HP + (this.get('constitution') * this.get('level'));
  }),
  maxMana: Ember.computed('level', 'intelligence', function() {
    return BASE_MANA + (this.get('intelligence') * this.get('level'));
  }),
  level: 1,
  strength: 12,
  intelligence: 1,
  wisdom: 2,
  dexterity: 8,
  constitution: 17,
  charisma: 18
});