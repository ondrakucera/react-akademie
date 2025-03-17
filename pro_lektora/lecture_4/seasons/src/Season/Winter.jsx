import { Season } from "./Season";
import pragueInWinter from "./prague_in_winter.jpeg";

export const Winter = () => (
	<Season
		heading="Zima"
		imageSource={pragueInWinter}
		imageAlternativeText="Praha v zimě (generováno umělou inteligencí)"
	>
		<p>
			Zima je jedno ze čtyř ročních období mezi podzimem a jarem střídajících se v mírných a polárních oblastech. Na
			severní polokouli nastává zima v době, kdy je na jižní polokouli léto, a obráceně. Astronomická zima začíná o
			zimním slunovratu, kdy je nejdelší noc a nejkratší den. Je obdobím s nejnižšími teplotami.
		</p>
		<p>
			Astronomická zima začíná zimním slunovratem (na severní polokouli zpravidla připadá na 21. prosince, na jižní na
			21. června). Končí jarní rovnodenností (na severní polokouli zpravidla připadá na 21. března, na jižní 23. září).
			Přesný čas začátku je dán okamžikem slunovratu a rovnodennosti, v kalendáři mohou být termíny počátku a konce o
			den posunuty kvůli nepravidelnostem souvisejícím s přestupnými roky.
		</p>
		<p>
			V meteorologii jsou souhrnným termínem (klimatologická) zima označeny měsíce prosinec, leden a únor (červen,
			červenec a srpen na jižní polokouli).
		</p>
	</Season>
);
