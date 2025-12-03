import { run } from "aoc-framework";

run(
	(input) => {
		let sum = 0;

		for (const rawRange of input.split(",")) {
			const [rangeStart, rangeEnd] = rawRange.split("-").map(Number);

			for (let num = rangeStart; num <= rangeEnd; num++) {
				if (/^(.+)\1+$/.test(String(num))) {
					sum += num;
				}
			}
		}

		return sum;
	},
	{ inputMode: "raw" },
);
