export const Colors = () => {
	const colors = ["red", "green", "yellow", "pink", "blue"];
	return (
		<ul>
			{colors.map((color) => (
				<li key={color}>{color}</li>
			))}
		</ul>
	);
};
