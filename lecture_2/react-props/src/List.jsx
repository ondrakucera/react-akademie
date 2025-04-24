/*export const List = () => {
	const pole = [];

	if (pole.length === 0) {
		return 'Pole je prázné';
	}

	return (
		(
			<ul>
				{pole.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		)
	);
};*/
/*export const List = () => {
	const pole = [];

	return (
		pole.length === 0 ? null : (
			<ul>
				{pole.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		)
	);
};*/

export const List = () => {
	const pole = [];

	return (
		pole.length > 0 && (
			<ul>
				{pole.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		)
	);
};
