import { Season } from "./Season";
import pragueInSpring from "./prague_in_spring.jpeg";

export const Spring = () => (
	<Season
		heading="Jaro"
		imageSource={pragueInSpring}
		imageAlternativeText="Praha na jaře (generováno umělou inteligencí)"
	>
		<p>
			Jaro (zastarale, příp. básnicky vesna) je jedno ze čtyř ročních období. V mírném pásu se vyznačuje začátkem
			vegetativní aktivity rostlin a zvýšením aktivity živočichů. Prodlužují se dny, otepluje se.
		</p>
		<p>Meteorologické jaro začíná 1. března a končí 31. května. Jarními měsíci jsou březen, duben a květen.</p>
		<p>
			Astronomické jaro začíná jarní rovnodenností (na severní polokouli zpravidla 20. března, na jižní 23. září) a
			končí letním slunovratem (na severní polokouli zpravidla 21. června, na jižní 21. prosince). Termíny počátku a
			konce mohou být o dva dny posunuty kvůli nepravidelnostem souvisejícím s přestupnými roky.
		</p>
		<p>
			Rozdělení roku na jaro, léto, podzim a zimu je zřetelně vidět pouze v oblasti mírného a subarktického pásu. V
			oblasti tropů roční doby v podstatě neexistují, v subtropech může být rok rozdělen zpravidla na dvě období –
			období dešťů a období sucha, v okolí severního a jižního pólu je po celý rok zimní počasí (hrají zde ovšem velkou
			roli polární den a noc).
		</p>
	</Season>
);
