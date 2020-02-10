/* 
write a program to give an array such that: 
1. the data value is from 1 to n 
2. the length of it is 2*n 
3. the two elements with same value keep the same number distance. 
for example, when n = 3, the length of array is 6, the array
 should be like: 2, 3, 1, 2, 1, 3. there are two elements between "2" pair, and three elements between "3" pair and one element between "1" pair
*/
function weird(n) {
	var len = 2 * n;
	var array = new Array(len);
	
	function tryNum(num, offset) {
		for (var idx = offset; idx < len; idx += num + 1) {
			if (array[idx] !== undefined) {
				return false;
			}
		}
		for (var idx = offset; idx < len; idx += num + 1) {
			array[idx] = num;
		}
		return true;
	}
	function undoNum(num, offset) {
		for (var idx = offset; idx < len; idx += num + 1) {
			array[idx] = undefined;
		}
	}
	
	function forEachEmpty(fn) {
		for (var i = 0; i < len; i++) {
			if (array[i] === undefined) {
				var result = fn(i);
				if (result) {
					return result;
				}
			}
		}
	}
	
	function recurse(num) {
		//console.log("RECURSE: %d", num);
		if (num === 0) {
			for (var i = 0; i < len; i++) {
				if (array[i] === undefined){
					return false;
				}
			}
			return true;
		}
		return forEachEmpty(function(offset) {
			//console.log("Trying num %d offset %d", num, offset);
			if (tryNum(num, offset)) {
				//console.log(array);
				if (recurse(num - 1)) {
					return true;
				} else {
					undoNum(num, offset);
					//console.log("Undoing num %d offset %d", num, offset);
				}
			} 
		});
	}
	
	if (recurse(n)) {
		console.log(array);
	}
}

weird(3)