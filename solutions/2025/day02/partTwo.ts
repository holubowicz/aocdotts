import { run } from "aoc-framework";

run(
	(input) => {
		let sum = 0;

		for (const rawRange of input.split(",")) {
			const [rangeStart, rangeEnd] = rawRange.trim().split("-").map(Number);

			for (let num = rangeStart; num <= rangeEnd; num++) {
				const str = String(num);
				const len = str.length;

				for (let n = 2; n <= len; n++) {
					if (len % n !== 0) continue;

					const parts = str.match(new RegExp(".{1," + len / n + "}", "g"))!;
					if (parts.every((element) => element === parts[0])) {
						sum += num;
						break;
					}
				}
			}
		}

		return sum;
	},
	{ inputMode: "raw" },
);
