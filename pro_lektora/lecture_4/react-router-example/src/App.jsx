import { useState } from "react";
import "./App.css";
import { ReactAcademy } from "./ReactAcademy";
import { ReactGirls } from "./ReactGirls";

function App() {
	const [clickedLinkTarget, setClickedLinkTarget] = useState(undefined);

	const handleLinkClick = (event, component) => {
		event.preventDefault();
		setClickedLinkTarget(component);
	};

	return (
		<div className="App">
			{clickedLinkTarget === undefined ? (
				<>
					<ReactGirls />
					<p>
						<a href="." onClick={(event) => handleLinkClick(event, ReactAcademy)}>
							Aktuálně nám běží React akademie.
						</a>
					</p>
				</>
			) : (
				<>{clickedLinkTarget}</>
			)}
		</div>
	);
}

export default App;
