import Ember from 'ember';

var GameMap = Ember.Object.extend({
  rows: []
});

var MapRow = Ember.Object.extend({
  cells: []
});
var MapCell = Ember.Object.extend({
  text: "."
});

export default Ember.Controller.extend({
  mapHeight: 4,
  mapWidth: 3,

  map: Ember.computed('mapWidth', 'mapHeight', function() {
    var w = this.get('mapWidth');
    var h = this.get('mapHeight');
    return GameMap.create({rows: buildMapRows(w, h)});
  }),

  init: function() {
    this.set('name', 'The Hopeful Forest');
  }
});

var buildMapRows = function(width, height) {
  var rows = [];
  for (let h = 0; h < height; h++) {
    var cells = [];
    for (let w = 0; w < width; w++) {
      var cell = MapCell.create();
      cells.push(cell);
    }
    var row = MapRow.create({cells: cells});
    rows.push(row);
  }
  return rows;
};