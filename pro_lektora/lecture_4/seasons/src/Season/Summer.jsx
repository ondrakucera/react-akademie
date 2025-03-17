import { Season } from "./Season";
import pragueInSummer from "./prague_in_summer.jpeg";

export const Summer = () => (
	<Season
		heading="Léto"
		imageSource={pragueInSummer}
		imageAlternativeText="Praha v létě (generováno umělou inteligencí)"
	>
		<p>
			Léto je roční období mezi jarem a podzimem. Nastává v mírných a polárních oblastech, v jinou dobu na severní a
			jižní polokouli. V různých oborech je definováno různě. Astronomické léto začíná letním slunovratem a končí
			podzimní rovnodenností. Vegetační léto v mírném pásu se vyznačuje průměrnými teplotami nad 15 °C. V tomto období
			bývají na školách hlavní prázdniny. Je obdobím s nejvyššími teplotami.
		</p>
		<p>
			V meteorologii je za léto označováno období měsíců června, července a srpna na severní polokouli a měsíců
			prosince, ledna a února na jižní polokouli. V některých zemích (na severní polokouli) připadá první letní den na
			období okolo 1. června či 21. června (záleží na tom, jestli se bere meteorologický nebo astronomický začátek). Na
			léto je často nahlíženo jako na období s nejdelšími (a nejteplejšími) dny, kdy Slunce svítí většinu dne a stmívání
			trvá velmi dlouho.
		</p>
	</Season>
);
