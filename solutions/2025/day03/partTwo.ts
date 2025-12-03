import { run } from "aoc-framework";

run(
	(input) => {
		let sum = 0;

		for (const line of input) {
			let digits = [...line].map(Number);

			for (let n = 11; n >= 0; n--) {
				const max = Math.max(...digits.slice(0, digits.length - n));
				digits = digits.slice(digits.indexOf(max) + 1);
				sum += max * Math.pow(10, n);
			}
		}

		return sum;
	},
	{ inputMode: "lines" },
);
