import { useState } from "react";

export const Gallery = () => {
	const galleryList = [
		{
			name: "Homenaje a la Neurocirugía",
			artist: "Marta Colvin Andrade",
		},
		{
			name: "Floralis Genérica",
			artist: "Eduardo Catalano",
		},
		{
			name: "Eternal Presence",
			artist: "John Woodrow Wilson",
		},
	];

	// let index = 0;
	const [index, setIndex] = useState(0);

	const handleClick = () => {
		//index = index + 1;
		setIndex(index + 1);
	};

	return (
		<>
			<button onClick={handleClick}>Next</button>
			<p>
				<i>{galleryList[index].name} </i>
				by {galleryList[index].artist}
			</p>
			<p>
				({index + 1} of {galleryList.length})
			</p>
		</>
	);
};
