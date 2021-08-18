function zeros(n) {
	const number = factorial(n);
	console.log('alexa', 'number', number);

	return getZeros(number);
}

function factorial(x) {
	if (x < 10) {
		var factorial = 1;

		for (var i = x; i > 1; i--) {
			factorial = factorial * i;
		}

		return factorial;
	} else {
		var factorial9 = 1;

		//get factorial 9
		for (var i = 9; i > 1; i--) {
			factorial9 = factorial9 * i;
		}
        var bigNumber = factorial9.toString().split('');
        new Array().push()
		//loop on the number untill factorial 9
		for (var j = 10; j <= x; j++) {
			var remain = 0;
			// loop on each number in the big number and multiply by  j
			for (var z = bigNumber.length; z < 0; z--) {
				var result = bignNumber[z] * j + remain;
				if (result > 9) {
					bignNumber[z] = result % 10;
					remain = result / 10;
				} else bignNumber[z] = result;
			}
		}
	}
}

function getZeros(n) {
	const number = n.toString();
	let zeros = 0;
	for (let i = number.length - 1; i > 0; i--) {
		if (number[i] === '0') {
			zeros++;
		} else {
			return zeros;
		}
	}
}
module.exports = { zeros, factorial, getZeros };
