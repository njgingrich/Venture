import DS from 'ember-data';
import Ember from 'ember';

export default DS.Transform.extend({
    deserialize: function(serialized) {
        console.log(serialized);
        return Ember.isNone(serialized) ? {} : serialized;
    },
    serialize: function(deserialized) {
        console.log(deserialized);
        return Ember.isNone(deserialized) ? {} : deserialized;
    }
});