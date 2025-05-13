/*export const List = () => {
	const list = [];

	if (list.length === 0) {
		return null;
	}

	return (
		<ul>
			{list.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
};*/
/*export const List = () => {
	const list = [];

	return list.length === 0 ? null : (
		<ul>
			{list.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	);
};*/

export const List = () => {
	const list = ["ahoj", "čau"];

	return (
		list.length !== 0 && (
			<ul>
				{list.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		)
	);
};
