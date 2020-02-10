function printMatrix(matrix) {
	for (var i = 0; i < matrix.length; i++) {
		console.log(matrix[i]);
	}
}

function rotate(matrix) {
	/*
	for (var i = 0; i < matrix.length; i++) {
		for (var k = 0; k < matrix.length; k++) {
			var temp = matrix[i][k];
			matrix[i][k] = matrix[matrix.length-1-k][i];
			matrix[matrix.length-1-k][i] = temp;
		}
	}*/
	var newMat = [];
	for (var i = 0; i < matrix.length; i++) {
		var line = [];
		newMat.push(line);
		for (var k = 0; k < matrix.length; k++) {
			line.push(matrix[k][4-i-1]);
		}
	}
	return newMat;
}

var mat = [
	[11, 12, 13, 14],
	[21, 22, 23, 24],
	[31, 32, 33, 34],
	[41, 42, 43, 44]
];

printMatrix(mat);