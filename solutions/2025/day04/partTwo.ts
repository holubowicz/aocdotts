import { run } from "aoc-framework";

interface Coord {
	x: number;
	y: number;
}

run(
	(input) => {
		const TAKEN_CHAR = "@";
		const EMPTY_CHAR = ".";
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

		const grid = input.map((line) => [...line]);

		let modified = false;
		let sum = 0;

		do {
			modified = false;

			for (let y = 0; y < grid.length; y++) {
				for (let x = 0; x < grid[y].length; x++) {
					const c = { x, y };
					if (isTaken(c) && canAccess(c)) {
						grid[y][x] = EMPTY_CHAR;
						modified = true;
						sum++;
					}
				}
			}
		} while (modified);

		function isTaken({ x, y }: Coord) {
			return grid[y]?.[x] === TAKEN_CHAR;
		}

		function canAccess({ x, y }: Coord) {
			return DIRECTIONS.filter(([dx, dy]) => isTaken({ x: x + dx, y: y + dy })).length < 4;
		}

		return sum;
	},
	{ inputMode: "lines" },
);
