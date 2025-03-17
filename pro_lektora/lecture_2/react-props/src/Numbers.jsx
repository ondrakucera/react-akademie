export const Numbers = () => {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<ul>
			{numbers
				.filter((filteredNumber) => filteredNumber < 5)
				.map((number) => (
					<li key={number}>{number}</li>
				))}
		</ul>
	);
};
