import { run } from "aoc-framework";

run(
	(input) => {
		let sum = 0;

		for (const line of input) {
			const digits = [...line].map(Number);

			const first = Math.max(...digits.slice(0, -1));
			const firstIndex = digits.indexOf(first);

			const second = Math.max(...digits.slice(firstIndex + 1));

			sum += first * 10 + second;
		}

		return sum;
	},
	{ inputMode: "lines" },
);
