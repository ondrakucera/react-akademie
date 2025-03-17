import { useState } from "react";
export const Animals = () => {
	const [animals, setAnimals] = useState(["dog"]);
	const [inputValue, setInputValue] = useState("");

	const handleAddAnimal = () => {
		setAnimals([...animals, inputValue]);
		setInputValue("");
	};

	return (
		<div>
			<ul>
				{animals.map((animal) => (
					<li key={animal}>{animal}</li>
				))}
			</ul>
			<input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
			<button onClick={handleAddAnimal}>Add animal</button>
		</div>
	);
};
