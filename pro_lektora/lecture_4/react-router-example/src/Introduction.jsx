import { Link } from "react-router-dom";

export const Introduction = () => (
	<>
		<h1>Co je ReactGirls?</h1>
		<h2>Komunita</h2>
		<p>
			ReactGirls je komunita, kterou spojuje láska k technologiím a programování. Spolu s profesionálními lektory a
			mentory pomáháme ženám, které se chtějí stát programátorkami. Zapojte se do naší komunity na sociálních sítích.
		</p>
		<p>
			Mimo jiného pořádáme řadu <Link to="/akademie">akademií.</Link>
		</p>
	</>
);
