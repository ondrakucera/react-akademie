import { Link } from "react-router-dom";

export const Academies = () => (
	<>
		<h1>Akademie</h1>
		<p>Akademií pořádáme hned několik. Kdykoliv nějakou vypíšeme, objeví se v seznamu níže.</p>
		<p>Aktuálně vypsané akademie:</p>
		<ul>
			<li>
				<Link to="/react-akademie">React akademie</Link>
			</li>
		</ul>
	</>
);
