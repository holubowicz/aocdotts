import { run } from "aoc-framework";

run(
	(input) => {
		const DIAL_RANGE = 100;

		let dial = 50;
		let count = 0;

		for (const line of input) {
			const direction = line[0] === "L" ? -1 : 1;
			const amount = +line.slice(1) % DIAL_RANGE;

			dial = (dial + amount * direction + DIAL_RANGE) % DIAL_RANGE;

			if (dial === 0) count++;
		}

		return count;
	},
	{ inputMode: "lines" },
);
