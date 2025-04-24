/*
export const Condition = () => {
	const user = "Jonas";

	if (user === "Ondra") {
		return <h1>Ahoj Ondro</h1>;
	} else {
		return <h1>Ahoj neznámý</h1>;
	}
};
*/

/*export const Condition = () => {
	const user = "Jonas";

	return <>
		{user === "Ondra" && <h1>Ahoj Ondro</h1>}
		{user !== "Ondra" && <h1>Ahoj neznámý</h1>}
	</>;
};*/

export const Condition = () => {
	const user = "Jonas";

	return user === "Ondra" ? <h1>Ahoj Ondro</h1> : <h1>Ahoj neznámý</h1>;
};
