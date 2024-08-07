import { useEffect } from "react";
import { useState } from "react";
import { Loader } from "../Loader/Loader";

export const PublicHolidays = () => {
	const [holidays, setHolidays] = useState();

	useEffect(() => {
		const fetchAndSetHolidays = async () => {
			const response = await fetch("https://date.nager.at/api/v3/PublicHolidays/2024/CZ");
			setHolidays(await response.json());
		};

		fetchAndSetHolidays();
	}, []);

	return (
		<main>
			<header>
				<h1>Státní svátky v roce 2024</h1>
			</header>
			<section>
				{holidays === undefined ? (
					<Loader />
				) : (
					<ol>
						{holidays.map((holiday) => (
							<li key={holiday.date}>
								<strong>{holiday.localName}</strong> ({new Date(holiday.date).toLocaleDateString()})
							</li>
						))}
					</ol>
				)}
			</section>
		</main>
	);
};
