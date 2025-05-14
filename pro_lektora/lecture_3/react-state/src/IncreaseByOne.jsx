import { useState } from "react";
import { Button } from "./Button.jsx";

export const IncreaseByOne = () => {
	const [number, setNumber] = useState(1);

	const handleIncreaseByOne = () => {
		const newNumber = number + 1;
		setNumber(newNumber);
	};

	return (
		<>
			<Button onClickFunction={handleIncreaseByOne} name={"Increase"} />
			<p>{number}</p>
			<p>{number % 2 === 0 ? "Number is even" : ""}</p>
		</>
	);
};
