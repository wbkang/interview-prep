var coins = [1, 3, 5];

function findCombo(sum) {
	var array = new Array(sum + 1);
	array[0] = 0;
	
	for (var val = 1; val <= sum; val++) {
		var denomIndex = 0;
		var minCount = null;
		do {
			var denom = coins[denomIndex];
			var prevCount = array[val - denom];
			if (minCount != null) {
				minCount = Math.min(prevCount + 1, minCount);
			} else {
				minCount = prevCount + 1;
			}
			denomIndex++;
		} while (denomIndex < coins.length && coins[denomIndex] <= val);
		array[val] = minCount;
	}
	console.log(array);
}

findCombo(20);