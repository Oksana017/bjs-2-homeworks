// Задача 1 
// Решение квадратных уравнений (ax² + bx + c = 0)
"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = (b ** 2) - (4 * a * c);

	if (d < 0) {
		return arr;
	} else if (d === 0) {
		let root = -b / (2 * a);
		arr.push(root);
	} else {
		let root1 = (-b + Math.sqrt(d)) / (2 * a);
		let root2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(root1, root2);
	}
	return arr;
}

// Задача 2
"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let P = percent / 100 / 12;
	let S = amount - contribution;
	let n = countMonths;

	let monthlyPayment = S * (P + (P / (((1 + P) ** n) - 1)));
	let totalAmount = (monthlyPayment * n).toFixed(2);
	return parseFloat(totalAmount);
}

// Ввод: процент (в диапазоне от 0 до 100), начальный взнос, сумма кредита, срок в месяцах
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52