var ary = [];

function subset(set, start) {
	start = start || 0;
	
	if (start === 0) {
		console.log(ary.join(","));
	}
	for (var i = start; i < set.length; i++) {
		ary.push(set[i]);
		console.log(ary.join(","));
		subset(set, i+1);
		ary.pop();
	}
}

function perm(str) {
	var used = new Array(str.length);
	
	function permRecursive() {

		var result = [];
		for (var i = 0; i < str.length; i++) {
			if (!used[i]) {
				var ch = str[i];
				used[i] = true;
				var childResult = permRecursive();
				used[i] = false;
				if (childResult.length === 0) {
					result.push(ch);
				} else {
					for (var k = 0; k < childResult.length; k++) {
						result.push(ch + childResult[k]);
					}
				}
			}
		}
		return result;
	}
	
	return permRecursive(str);
}

perm("ABC")