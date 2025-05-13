/*export const Numbers = () => {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const filteredNumbers = numbers.filter((number) => number < 6);
	return (
		<ul>
			{filteredNumbers.map((number) => (
				<li key={number}>{number}</li>
			))}
		</ul>
	);
};*/

export const Numbers = () => {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<ul>
			{numbers
				.filter((number) => number < 6)
				.map((number) => (
					<li key={number}>{number}</li>
				))}
		</ul>
	);
};
