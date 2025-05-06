import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";

const YEARS = ["2025", "2024", "2023", "2022", "2021"];

export const PublicHolidaysImproved = () => {
	const [year, setYear] = useState("2025");
	const [holidays, setHolidays] = useState();

	useEffect(() => {
		const fetchAndSetHolidays = async () => {
			const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/CZ`);
			setHolidays(await response.json());
		};

		fetchAndSetHolidays();
	}, [year]);

	const handleYearChange = (event) => {
		setYear(event.target.value);
		setHolidays(undefined);
	};

	return (
		<main>
			<header>
				<h1>Státní svátky</h1>
			</header>
			<section>
				<select value={year} onChange={handleYearChange}>
					{YEARS.map((iterationYear) => (
						<option key={iterationYear} value={iterationYear}>
							{iterationYear}
						</option>
					))}
				</select>
			</section>
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
