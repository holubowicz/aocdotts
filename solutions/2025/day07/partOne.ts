import { run } from "aoc-framework";

run(
	(input) => {
		let activeCols = [input[0].indexOf("S")];
		let splitCount = 0;

		for (let row = 2; row < input.length; row++) {
			let nextCols: number[] = [];

			for (const col of activeCols) {
				if (input[row][col] !== "^") {
					nextCols.push(col);
					continue;
				}

				nextCols = [...nextCols, col - 1, col + 1];
				splitCount++;
			}

			activeCols = [...new Set(nextCols)];
		}

		return splitCount;
	},
	{ inputMode: "lines" },
);
