import { Season } from "./Season";
import pragueInAutumn from "./prague_in_autumn.jpeg";

export const Autumn = () => (
	<Season
		heading="Podzim"
		imageSource={pragueInAutumn}
		imageAlternativeText="Praha na podzim (generováno umělou inteligencí)"
	>
		<p>
			Podzim (zastarale jeseň) je jedno ze čtyř ročních období, je to přechod mezi létem a zimou. V klimatických
			podmínkách mírného pásu se právě na podzim sklízí většina úrody a opadavé listnaté stromy ztrácejí listí. Listí má
			různé barvy a opadává. Dny se krátí, ochlazuje se, více prší a je mnohem horší počasí.
		</p>
		<p>
			Astronomický podzim začíná podzimní rovnodenností – na severní polokouli kolem 23. září, na jižní kolem 21. března
			a končí zimním slunovratem – 21. prosince, resp. 21. června.
		</p>
		<p>
			V meteorologii a klimatologii jsou souhrnným termínem podzim označeny měsíce září, říjen a listopad (březen, duben
			a květen na jižní polokouli).
		</p>
	</Season>
);
