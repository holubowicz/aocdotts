import { run } from "aoc-framework";

type Coord = [number, number];

function calculateArea(a: Coord, b: Coord) {
	const width = Math.abs(a[0] - b[0]) + 1;
	const height = Math.abs(a[1] - b[1]) + 1;
	return width * height;
}

run(
	(input) => {
		const coords = input.map((line) => line.split(",").map(Number) as Coord);

		let max = -Infinity;
		for (let i = 0; i < coords.length; i++) {
			for (let j = i + 1; j < coords.length; j++) {
				max = Math.max(max, calculateArea(coords[i], coords[j]));
			}
		}

		return max;
	},
	{ inputMode: "lines" },
);
