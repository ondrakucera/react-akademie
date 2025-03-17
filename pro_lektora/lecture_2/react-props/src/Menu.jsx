export const Menu = () => {
	const menu = ["domů", "o nás", "kontakt"];

	return (
		<div>
			<ul>
				{menu.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
};
