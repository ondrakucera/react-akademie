export const People = () => {
	const people = [
		{ id: 1, firstName: "David", lastName: "Novák", age: 27 },
		{ id: 2, firstName: "Olga", lastName: "Černá", age: 57 },
		{ id: 3, firstName: "Jan", lastName: "Sýkora", age: 30 },
		{ id: 4, firstName: "Markéta", lastName: "Veselá", age: 42 },
		{ id: 5, firstName: "Markéta", lastName: "Veselá", age: 43 },
	];

	const wiserPeople = people.filter((human) => human.age > 30);
	return (
		<ul>
			{wiserPeople.map((wiserHuman) => (
				<li key={wiserHuman.id}>{wiserHuman.firstName}</li>
			))}
		</ul>
	);
};
