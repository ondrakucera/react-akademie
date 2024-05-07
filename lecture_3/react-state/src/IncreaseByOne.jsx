import { useState } from "react";

export const IncreaseByOne = () => {
	const [number, setNumber] = useState(1);
	const [isEven, setIsEven] = useState(false);

	const handleIncreaseByOne = () => {
		const newNumber = number + 1;
		setNumber(newNumber);
		setIsEven(newNumber % 2 === 0);
	};

	return (
		<div>
			<p>{number}</p>
			<button onClick={handleIncreaseByOne}>+1</button>
			{isEven && <p>Number is even</p>}
		</div>
	);
};
