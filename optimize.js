var factorial = function(x) {
	if (x == 0) {
		return [ 1 ];
	}

	if (x < 10) {
		var factorial = 1;

		for (var i = x; i > 1; i--) {
			factorial = factorial * i;
		}

		return factorial.toString().split('');
	} else {
		var factorial9 = 1;

		//get factorial 9
		for (var i = 9; i > 1; i--) {
			factorial9 = factorial9 * i;
		}
		var bigNumber = new Array();
		bigNumber.push(...factorial9.toString().split(''));
		//loop on the number untill factorial 9
		for (var j = 10; j <= x; j++) {
			var remain = 0;
			// loop on each number in the big number and multiply by  j
			for (var z = bigNumber.length - 1; z >= 0; z--) {
				var result = parseInt(bigNumber[z]) * j + remain;
				if (result > 9) {
					bigNumber[z] = result % 10;
					remain = Math.floor(result / 10);
				} else bigNumber[z] = result;
			}
			bigNumber.unshift(...remain.toString().split(''));
		}
	}

	return bigNumber;
};

var getZeros = function(n) {
	var number = n;
	var zeros = 0;
	for (var i = number.length - 1; i >= 0; i--) {
		if (number[i] === 0 || number[i] === '0') {
			zeros++;
		} else {
			return zeros;
		}
	}
};

function zeros(n) {
	var number = factorial(n);
	return getZeros(number);
}
