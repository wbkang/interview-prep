var t1 = [5,4,3,2,1];
var t2 = [];
var t3 = [];

function moveTwo(src, buf, dest) {
	buf.push(src.pop());
	dest.push(src.pop());
	dest.push(buf.pop());
}

function moveN(src, buf, dest, count) {
	if (count === 1) {
		dest.push(src.pop());
	} else if (count === 2) {
		moveTwo(src, buf, dest);
	} else {
		moveN(src, dest, buf, count - 1);
		dest.push(src.pop());
		moveN(buf, src, dest, count - 1);
	}
}

function moveThree(src, buf, dest) {
	moveTwo(src, dest,  buf);
	dest.push(src.pop());
	moveTwo(buf, src,  dest);
}

function print() {
	console.log(t1);
	console.log(t2);
	console.log(t3);
}

//moveTwo(t1, t2, t3);
moveN(t1, t2, t3 , 5);
print()