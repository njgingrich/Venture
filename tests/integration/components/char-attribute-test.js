import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('char-attribute', 'Integration | Component | char attribute', {
  integration: true
});

test('increases stat on plus click', function(assert) {
    this.set('someStat', 42);
    this.render(hbs`{{char-attribute stat=someStat pointsLeft=1}}`);
    assert.equal(this.$('.app-current-value').text(), '42');

    var plusButton = this.$('.app-increase-stat');
    plusButton.click();
    assert.equal(this.$('.app-current-value').text(), '43');
});

test('decreases stat on minus click', function(assert) {
    this.set('someStat', 42);
    this.render(hbs`{{char-attribute stat=someStat pointsLeft=1}}`);
    assert.equal(this.$('.app-current-value').text(), '42');

    var minusButton = this.$('.app-decrease-stat');
    minusButton.click();
    assert.equal(this.$('.app-current-value').text(), '41');
});

test('points are decreased/increased properly', function(assert) {
    this.set('someStat', 42);
    this.set('points', 1);
    this.render(hbs`{{char-attribute stat=someStat pointsLeft=points}}`);

    var plusButton = this.$('.app-increase-stat');
    plusButton.click();
    assert.equal(this.$('.app-current-value').text(), '43');
    assert.equal(this.get('points'), 0);

    var $minusButton = this.$('.app-decrease-stat');
    $minusButton.click();
    assert.equal(this.$('.app-current-value').text(), '42');
    assert.equal(this.get('points'), 1);
});

test('will not increase/decrease when no points left', function(assert) {
    this.set('someStat', 42);
    this.render(hbs`{{char-attribute stat=someStat pointsLeft=0}}`);
    assert.equal(this.$('.app-current-value').text(), '42');

    var plusButton = this.$('.app-increase-stat');
    plusButton.click();
    assert.equal(this.$('.app-current-value').text(), '42');

    var minusButton = this.$('.app-decrease-stat');
    minusButton.click();
    assert.equal(this.$('.app-current-value').text(), '41');
});

test('renders current stat value', function(assert) {
    this.set('someStat', 42);
    this.render(hbs`{{char-attribute stat=someStat}}`);
    assert.equal(this.$('.app-current-value').text(), '42');
});


test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{char-attribute}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#char-attribute}}
      template block text
    {{/char-attribute}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
