const sorts = require('../src/sort');
const compare = require('../src/compare');

var a = [1,6,4,2,3,7,9,8,5];
var b = [1,2,3,4,5,6,7,8,9];
sorts(a);
for (var i = 0; i < a.length; i++) {
	test('compare x, y', () => {
  expect(compare(a[i], b[i])).toBe(1);
});
};
