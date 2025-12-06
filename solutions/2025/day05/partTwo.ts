import { run } from "aoc-framework";

run(
	(input) => {
		const mergedRanges: number[][] = [];

		for (const line of input) {
			if (line === "") break;

			const currentRange = line.split("-").map(Number);
			let merged = false;

			do {
				merged = false;
				const overlapIndex = mergedRanges.findIndex((r) => currentRange[0] <= r[1] && currentRange[1] >= r[0]);

				if (overlapIndex !== -1) {
					merged = true;
					currentRange[0] = Math.min(mergedRanges[overlapIndex][0], currentRange[0]);
					currentRange[1] = Math.max(mergedRanges[overlapIndex][1], currentRange[1]);
					mergedRanges.splice(overlapIndex, 1);
				}
			} while (merged);

			mergedRanges.push(currentRange);
		}

		return mergedRanges.reduce((sum, [start, end]) => sum + end - start + 1, 0);
	},
	{ inputMode: "lines" },
);
