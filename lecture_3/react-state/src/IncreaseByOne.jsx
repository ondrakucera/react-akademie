import { useState } from "react";
import { Button } from "./Button.jsx";

export const IncreaseByOne = () => {
	const [cislo, setCislo] = useState(1);

	const handleIncreaseByOne = () => {
		setCislo(cislo + 1);
	};

	return (
		<>
			<Button onClickFunction={handleIncreaseByOne} name={"Increase"} />
			<p>{cislo}</p>
			<p>{cislo % 2 === 0 ? "Number is even" : ""}</p>
		</>
	);
};
