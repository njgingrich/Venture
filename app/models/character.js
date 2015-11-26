import Ember from 'ember';
import DS from 'ember-data';

const BASE_HP = 40;
const BASE_MANA = 30;

export default DS.Model.extend({
    name: DS.attr('string', {defaultValue: function() {
            var firstNames = ['Ragnar', 'Ulfric', 'Balgruf'];
            var lastNames = ['Valiant', 'Bold', 'Strong', 'Dainty'];
            return firstNames[Math.floor(Math.random()*firstNames.length)] + ' the ' +
                lastNames[Math.floor(Math.random()*lastNames.length)];
        }
    }),
    characterClass: DS.attr('string', {defaultValue: function() {
            var classes = ['Wizard', 'Warrior', 'Bard', 'Paladin', 'Rogue', 'Ranger', 'Knight', 'Elf'];
            return classes[Math.floor(Math.random()*classes.length)];
        }
    }),
    currentHealth: DS.attr('number', {defaultValue: 1}),
    currentMana: DS.attr('number', {defaultValue: 1}),
    maxHealth: Ember.computed('level', 'effectiveCon', function() {
        return BASE_HP + (this.get('effectiveCon') * this.get('level'));
    }),
    maxMana: Ember.computed('level', 'intelligence', function() {
        return BASE_MANA + (this.get('intelligence') * this.get('level'));
    }),
    maxWeight: Ember.computed('strength', function() {
        return this.get('strength')*5;
    }),
    itemWeights: Ember.computed.mapBy('items','weight'),
    itemWeight: Ember.computed.sum('itemWeights'),
    hampered: Ember.computed('itemWeight','maxWeight', function(){
        return this.get('itemWeight') > this.get('maxWeight');
    }),

    items: DS.hasMany('items', {async: true}),
    itemConBonuses: Ember.computed.mapBy('items', 'bonuses.constitution'),
    conBonus: Ember.computed.sum('itemConBonuses'),
    effectiveCon: Ember.computed('conBonus', 'constitution', function() {
        return this.get('constitution') + this.get('conBonus');
    }),
    pointsToSpend: DS.attr('number', {defaultValue: 20}),
    level:         DS.attr('number', {defaultValue: 1}),
    strength:      DS.attr('number', {defaultValue: 1}),
    constitution:  DS.attr('number', {defaultValue: 1}),
    intelligence:  DS.attr('number', {defaultValue: 1}),
    wisdom:        DS.attr('number', {defaultValue: 1}),
    dexterity:     DS.attr('number', {defaultValue: 1}),
    charisma:      DS.attr('number', {defaultValue: 1}),
    x: DS.attr('number', {defaultValue: 0}),
    y: DS.attr('number', {defaultValue: 0})
});