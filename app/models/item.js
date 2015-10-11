import DS from 'ember-data';

var Item = DS.Model.extend({
  character: DS.belongsTo('character'),
  name:   DS.attr('string', {defaultValue: ''}),
  weight: DS.attr('number', {defaultValue: 0}),
  bonuses: DS.attr('item-bonuses', {defaultValue: {
    constitution: 0,
    strength: 0
  }})
});

export default Item;