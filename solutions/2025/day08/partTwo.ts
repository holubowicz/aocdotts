import { run } from "aoc-framework";

type Coord = [number, number, number];

interface Pair {
	a: Coord;
	b: Coord;
	distance: number;
}

function calculateDistance(a: Coord, b: Coord) {
	return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2);
}

run(
	(input) => {
		const coords = input.map((line) => line.split(",").map(Number)) as Coord[];
		const pairs: Pair[] = coords
			.flatMap((a, i) => coords.slice(i + 1).map((b) => ({ a, b, distance: calculateDistance(a, b) })))
			.sort((a, b) => a.distance - b.distance);

		let result = 0;
		const circuits: Coord[][] = [];

		for (const { a, b } of pairs) {
			const circuitA = circuits.find((c) => c.includes(a));
			const circuitB = circuits.find((c) => c.includes(b));

			if (!circuitA && !circuitB) {
				circuits.push([a, b]);
			} else if (circuitA && !circuitB) {
				circuitA.push(b);
			} else if (!circuitA && circuitB) {
				circuitB.push(a);
			} else if (circuitA && circuitB && circuitA !== circuitB) {
				circuitA.push(...circuitB);
				circuits.splice(circuits.indexOf(circuitB), 1);
			}

			if ((circuitA || circuitB) && circuitA !== circuitB) {
				result = a[0] * b[0];
			}
		}

		return result;
	},
	{ inputMode: "lines" },
);
