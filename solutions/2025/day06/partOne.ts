import { run } from "aoc-framework";

run(
	(input) => {
		const operators = [...input[input.length - 1]].filter((char) => char !== " ");
		const numberGrid = input.slice(0, -1).map((line) => line.match(/\d+/g)!.map(Number));

		let sum = 0;

		for (let col = 0; col < numberGrid[0].length; col++) {
			const numbers = numberGrid.map((row) => row[col]);
			sum += eval(numbers.join(operators[col]));
		}

		return sum;
	},
	{ inputMode: "lines" },
);
