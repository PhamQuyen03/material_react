
const compare = require('../src/compare');
// const tick = require('../src/Losers');

test('compares 1 vs 2 to equal 3', () => {
  expect(compare(1, 2)).toBe(0);
});
test('compares 1 vs 1 to equal 2', () => {
  expect(compare(1, 1)).toBe(1);
});
test('compares 1 vs 4 to equal 4', () => {
  expect(compare(1, 3)).toBe(0);
});
test('compares 1 vs 5 to equal 6', () => {
  expect(compare(1, 5)).toBe(0);
});

