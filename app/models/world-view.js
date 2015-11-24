import DS from 'ember-data';

export default DS.Model.extend({
    characterId: DS.attr('number'),
    x: DS.attr('number'),
    y: DS.attr('number'),
    width: DS.attr('number'),
    height: DS.attr('number'),
    tiles: DS.attr('number')
});
