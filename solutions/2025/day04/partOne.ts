import { run } from "aoc-framework";

interface Coord {
	x: number;
	y: number;
}

run(
	(input) => {
		const TAKEN_CHAR = "@";
		const DIRECTIONS = [
			[-1, -1],
			[0, -1],
			[1, -1],
			[-1, 0],
			[1, 0],
			[-1, 1],
			[0, 1],
			[1, 1],
		] as const;

		let sum = 0;

		for (let y = 0; y < input.length; y++) {
			for (let x = 0; x < input[y].length; x++) {
				const c = { x, y };
				if (isTaken(c) && canAccess(c)) sum++;
			}
		}

		function isTaken({ x, y }: Coord) {
			return input[y]?.[x] === TAKEN_CHAR;
		}

		function canAccess({ x, y }: Coord) {
			return DIRECTIONS.filter(([dx, dy]) => isTaken({ x: x + dx, y: y + dy })).length < 4;
		}

		return sum;
	},
	{ inputMode: "lines" },
);
