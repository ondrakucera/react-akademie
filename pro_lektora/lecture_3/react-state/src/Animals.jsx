import { Button } from "./Button";
import { useState } from "react";

export const Animals = () => {
	const animalList = ["Pes", "Kočka", "Tygr", "Mravenec"];
	const [animals, setAnimals] = useState(["Pes"]);

	const handleClick = (animal) => {
		const newAnimals = [...animals, animal];

		setAnimals(newAnimals);
	};

	return (
		<>
			<ul>
				{animals.map((animal, index) => (
					/* Index se většinou nehodí k použití pro key. Key ale musí být unikátní v poli. To pro více zvířat nemusí platit, a proto volím index jako key. */
					<li key={index}>{animal}</li>
				))}
			</ul>
			{animalList.map((animal) => (
				<Button key={animal} onClickFunction={() => handleClick(animal)} name={`Přidej zvíře: ${animal}`} />
			))}
		</>
	);
};
