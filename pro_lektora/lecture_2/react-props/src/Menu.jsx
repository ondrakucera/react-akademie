export const Menu = () => {
	const textHeader = "Hello world";
	const menuItems = ["Prvni", "Druhy", "Treti"];
	const handleClick = () => {
		console.log(textHeader);
	};

	return (
		<>
			<h1>{textHeader}</h1>
			<ul>
				{menuItems.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
			<button onClick={handleClick}>Click me!</button>
		</>
	);
};
