import { Link } from "react-router-dom";

export const Introduction = () => (
	<section className="Introduction">
		<h1>Co je ReactGirls?</h1>

		<h2>Komunita</h2>
		<p>
			ReactGirls je komunita, kterou spojuje láska k technologiím a programování. Spolu s profesionálními lektory a
			mentory pomáháme ženám, které se chtějí stát programátorkami. Zapojte se do naší komunity na sociálních sítích.
		</p>
		<p>
			<Link to="/about">Zjistit více</Link>
		</p>

		<h2>Workshopy</h2>
		<p>
			Pořádáme pravidelné workshopy plné programování a přednášek nejen na technická témata. Naučíme vás základy HTML,
			CSS, Javascriptu a Reactu. Bližší informace najdete na sociálních sítích ReactGirls nebo Slacku.
		</p>
		<h2>Webináře</h2>
		<p>
			Nenechte si ujít webináře nejen na o programováním v Reactu. Věnujeme se i dalším tématům spojeným s prací a
			rekvalifikací v IT. Některé z webinářů můžete shlédnout na našem{" "}
			<a href="https://www.youtube.com/channel/UCO8WGBzS6J00zlXroeTf90g">Youtube</a>. O dalších se dozvíte
			prostřednictvím sociálních sítí a na našem Slacku.
		</p>

		<h2>Mentoring</h2>
		<p>
			Vyzkoušejte si náš jedinečný mentoringový program. Během tří měsíců vás zkušený mentor provede tvorbou komplexního
			webového projektu zvoleného podle vašich kariérních cílu. Předává vám tak profesionální know-how. Na konci je
			mentee připravena sama zvládnout tvorbu dalších projektů v Reactu.
		</p>
		<p>
			<Link to="/mentoring">Zjistit více</Link>
		</p>

		<h2>Akademie</h2>
		<p>
			ReactGirls Akademie je program určený pro začátečnice, které se chtějí seznámit s komplexním frontendovým
			programováním. Provedeme vás tím nejdůležitějším: od kódování webové aplikace v HTML a CSS přes seznámení se s
			principy programování v JavaScriptu až po první krůčky s Reactem.
		</p>
		<p>
			<Link to="/academy">Zjistit více</Link>
		</p>
	</section>
);
