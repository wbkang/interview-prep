function printParens(count, open, closed, buf) {
	buf = buf || [];
	open = open || 0;
	closed = closed || 0;
	if (open < count) {
		buf.push("(");
		printParens(count, open + 1, closed, buf);
		buf.pop();
	}
	if (closed < open) {
		buf.push(")");
		printParens(count, open, closed + 1, buf);
		buf.pop();
	}
	if (closed === open && open === count) {
		console.log(buf.join(""));
	}

}