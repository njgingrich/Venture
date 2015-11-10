import Ember from 'ember';

export default Ember.Controller.extend({
    character: Ember.computed.alias('model'),
    hasItems: Ember.computed.notEmpty('character.items'),
    burdenPercent: Ember.computed('character.itemWeight', 'character.maxWeight', function() {
        return Math.min(this.get('character.itemWeight') / this.get('character.maxWeight') * 100, 100);
    }),
    _modifyStat: function(stat, amount) {
        this.set('character.'+stat, this.get('character.'+stat)+amount);
    },
    actions: {
        levelUp: function() {
            this.incrementProperty('character.level');
            this.send('showModal', {
                template: 'level-up-modal',
                character: this.get('character'),
                pointsLeft: 3
            });
        },
        openAddItemModal: function() {
            Ember.$('.add-item-modal').modal();
        },
        addItem: function(name, weight, bonuses) {
            var item = this.store.createRecord('item', {
                name: name,
                weight: weight,
                bonuses: bonuses
            });
            item.save();
            this.get('character.items').pushObject(item);
        },
        removeItem: function(item) {
            this.get('character.items').removeObject(item);
        },
        saveCharacter: function() {
            if(this.get('isValid')) {
                this.get('character').save();
            }
        },
        changeCharacter: function(char) {
            this.set('character', char);
        },
        addCharacter: function() {
            var char = this.store.createRecord('character');
            char.save();
            this.set('character', char);
        },
        deleteCharacter: function(char) {
            this.get('character').deleteRecord();
            var that = this;
            this.get('character').save().then(function() {
                that.set('character');
                //that.set('character', that.get('characters.firstObject'));
            });
        }
    },
    validations: {
        'character.name': {
            presence: true,
            length: {
                minimum: 4,
                messages: {
                    tooShort: "must be at least 4 characters"
                }
            },
            message: "can't be blank"
        },
        'character.level': {
            presence: true,
            numericality: {
                onlyInteger: true,
                greaterThan: 0
            },
            message: "Level must be greater than 1"
        }
    }
});
