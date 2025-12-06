import { run } from "aoc-framework";

run(
	(input) => {
		const [rangesText, idsText] = input.split("\n\n");

		const ranges = rangesText.split("\n").map((line) => line.split("-").map(Number));
		const ids = idsText.split("\n").map(Number);

		return ids.filter((id) => ranges.some(([start, end]) => id >= start && id <= end)).length;
	},
	{ inputMode: "raw" },
);
