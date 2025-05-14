import { lide } from "./lide.js";
import { useState } from "react";
import { Button } from "./Button.jsx";
export const StudentViewer = () => {
	// let index = 0
	const [index, setIndex] = useState(0);
	const [showMore, setShowMore] = useState(false);

	const handleClick = () => {
		// index = index + 1;
		setIndex(index + 1);
	};

	return (
		<>
			<button onClick={handleClick}>Next</button>
			<p>Jméno: {lide[index].jmeno}</p>
			<p>Příjmení: {lide[index].prijmeni}</p>
			{showMore && <p>Věk: {lide[index].vek}</p>}
			<p>
				({index + 1} of {lide.length})
			</p>
			<Button onClickFunction={() => setShowMore(!showMore)} name={showMore ? "Show less" : "Show more"} />
		</>
	);
};
