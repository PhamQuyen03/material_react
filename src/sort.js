function add(a, b) {
  return a + b;
}
function sorts(x) {
	return x.sort(function(a, b){return a - b});
}

// module.exports = add;
module.exports = sorts;