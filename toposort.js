var d = [
	[3,4],
	[3],
	[4,7],
	[5,6,7],
	[6],
	[],
	[],
	[]
];

var d2 = [
	[1,2],
	[4],
	[3],
	[4],
	[]
];

function topoSort(depends) {
	var output = [];
	var todo = new Array(depends.length);
	
	function findNext() {
		for (var i = 0; i < todo.length; i++) {
			if (!todo[i]) {
				return i;
			}
		}
		return null;
	}
	
	function visit(n) {
		if (!todo[n]) {
			var deps = depends[n];
			for (var i = 0; i < deps.length; i++) {
				visit(deps[i]);
			}
			output.push(n);
			todo[n] = true;
		}
	}
	
	var next;
	while ((next = findNext()) != null) {
		visit(next);
	}
	return output;
}

topoSort(d2);