function randInt(min, max) {
	return Math.floor(Math.random() * (max-min)) + min + 1
}

function quicksort(ary) {


}

function partition(ary, startIdx, endIdx) {
	console.log("startIdx:" + startIdx + ", endIdx:" + endIdx);
	var pivotIdx = randInt(startIdx, endIdx);
	var pivotValue = ary[pivotIdx];
	var leftIdx = startIdx;
	var rightIdx = endIdx;
	
	if (rightIdx === leftIdx) return;
	
	while (leftIdx < rightIdx) {
		while (ary[leftIdx] < pivotValue && leftIdx < endIdx) {
			leftIdx++;
		}
		while (ary[rightIdx] > pivotValue && rightIdx > startIdx) {
			rightIdx--;
		}
		if (leftIdx < rightIdx) {
			var swap = ary[leftIdx];
			ary[leftIdx] = ary[rightIdx];
			ary[rightIdx] = swap;
			leftIdx++;
			rightIdx--;
		}
	}
	
	
	partition(ary, startIdx, leftIdx - 1);
	partition(ary, rightIdx, endIdx);
}

var a = [5, 86, 69, 73, 11, 17, 1, 74, 34, 3];
partition(a, 0, a.length - 1);
a
