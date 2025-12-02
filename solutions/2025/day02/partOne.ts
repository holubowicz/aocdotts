import { run } from "aoc-framework";

run(
	(input) => {
		let sum = 0;

		for (const rawRange of input.split(",")) {
			const [rangeStart, rangeEnd] = rawRange.trim().split("-").map(Number);

			for (let num = rangeStart; num <= rangeEnd; num++) {
				const str = String(num);
				const len = str.length;

				if (len % 2 !== 0) continue;

				const half = len / 2;
				if (str.slice(0, half) === str.slice(half)) sum += num;
			}
		}

		return sum;
	},
	{ inputMode: "raw" },
);
