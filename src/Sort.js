function sorts (a) {
	a.sort(function(x, y) {
      return parseInt(x.values) - parseInt(y.values);
  	});
  	return a;
}