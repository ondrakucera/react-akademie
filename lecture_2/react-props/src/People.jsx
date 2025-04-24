import { lide } from "./lide";

export const People = () => {
	const people = lide;

	const older30 = people.filter((person) => person.vek > 30);

	return (
		<>
			<h1>List of people older 30</h1>
			<ul>
				{older30.map(({ id, jmeno, prijmeni, vek }) => (
					<li key={id}>
						{jmeno} {prijmeni} ({vek})
					</li>
				))}
			</ul>
		</>
	);
};
