import { run } from "aoc-framework";

run(
	(input) => {
		const memo = new Map<string, number>();

		function countTimelines([col, initialRow]: [number, number]): number {
			for (let row = initialRow; row < input.length; row++) {
				if (input[row][col] !== "^") continue;

				const key = `${col},${row}`;
				if (memo.has(key)) return memo.get(key)!;

				const result = countTimelines([col - 1, row]) + countTimelines([col + 1, row]);
				memo.set(key, result);
				return result;
			}
			return 1;
		}

		const initialCol = input[0].indexOf("S");
		return countTimelines([initialCol, 2]);
	},
	{ inputMode: "lines" },
);
