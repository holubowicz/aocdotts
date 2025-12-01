import { run } from "aoc-framework";

run(
	(input) => {
		const DIAL_RANGE = 100;

		let dial = 50;
		let count = 0;

		for (const line of input) {
			const direction = line[0] === "L" ? -1 : 1;
			const amount = +line.slice(1);
			const wasZero = dial === 0;

			count += Math.floor(amount / DIAL_RANGE);
			dial += (amount % DIAL_RANGE) * direction;

			if (dial === 0) {
				count++;
			} else if (dial < 0 || dial >= DIAL_RANGE) {
				if (!wasZero) count++;
				dial += dial < 0 ? DIAL_RANGE : -DIAL_RANGE;
			}
		}

		return count;
	},
	{ inputMode: "lines" },
);
