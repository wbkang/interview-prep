
function isFactorialDivisible(x, y) {
	var factors = [];
	for (var i = 1; i <= x; i++) {
		factors.push(i);
	}
		
	var currentFactor = 1;
	function combo(set, start) {
		for (var i = start; i < set.length; i++) {
			currentFactor *= set[i];
			console.log(currentFactor);
			if (currentFactor === y) {
				return true;
			}
			var result = combo(set, i+1);
			currentFactor /= set[i];
			if (result) return result;
		}
		return false;
	}
	
	return combo(factors, 0);
}

isFactorialDivisible(10, 12);