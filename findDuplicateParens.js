function findDuplicateParen(str) {
	var opens = [];
	var lastMatch;
	var match;
	var i;
	for (i = 0; i < str.length; i++) {
		if (str[i] === '(') {
			opens.push(i);
		}
		else if (str[i] === ")") {
			match = [opens.pop(), i];
			if (lastMatch) {
				if (lastMatch[0] === match[0] + 1 &&
					lastMatch[1] === match[1] - 1) {
					console.log("Dupe found at: ", match, str.substring(match[0], match[1] + 1));
				}
			}
			lastMatch = match;
		}
	}

}

findDuplicateParen("((a+b)+((c+d)))")