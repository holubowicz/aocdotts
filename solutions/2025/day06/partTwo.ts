import { run } from "aoc-framework";

run(
	(input) => {
		const operators = [...input[input.length - 1]].filter((char) => char !== " ");
		const numberGrid = input.slice(0, -1);

		let sum = 0;
		let operands: number[] = [];

		for (let col = 0; col < numberGrid[0].length; col++) {
			let numberString = "";

			for (let row = 0; row < numberGrid.length; row++) {
				if (numberGrid[row][col] !== " ") {
					numberString += numberGrid[row][col];
				}
			}

			if (numberString === "") {
				sum += eval(operands.join(operators.shift()));
				operands = [];
			} else {
				operands.push(+numberString);
			}
		}

		sum += eval(operands.join(operators[0]));
		return sum;
	},
	{ inputMode: "lines" },
);
