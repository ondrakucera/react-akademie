import { Link } from "react-router-dom";

export const Academies = () => (
	<>
		<h1>Podporujeme ženy na cestě do IT!</h1>
		<p>
			Naše lekce vedou zkušení lektoři, kteří tě provedou teorií i praxí, a na každé lekci ti budou k dispozici koučové,
			aby ti pomohli s řešením úkolů a otázkami. Kromě samotného učení klademe důraz také na networking – během našich
			setkání budeš mít možnost navázat kontakty s dalšími účastnicemi a sdílet své zkušenosti. Lekce v týdnu probíhají
			ve večerních hodinách, sobotní lekce jsou celodenní. Průběžně budeme doplňovat podrobné informace k jednotlivým
			akademiím – pro koho jsou určeny, na co se zaměřují, přesné termíny a časy, a také odkazy na registraci. Těšíme se
			na Tebe na některé z našich akademií!
		</p>
		<p>
			V tuto chvíli nám probíhá <Link to="/react-akademie">React akademie</Link>.
		</p>
	</>
);
