export const List = () => {
	const menu = ["Úvod", "O nás", "Článek", "Kontakt"];

	return (
		<ul>
			{menu.map((menuItem) => {
				return <li>{menuItem}</li>;
			})}
		</ul>
	);
};
