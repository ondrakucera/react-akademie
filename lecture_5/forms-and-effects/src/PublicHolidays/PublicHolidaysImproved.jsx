import { useEffect } from "react";
import { useState } from "react";
import { Loader } from "../Loader/Loader";

const YEARS = ["2020", "2021", "2022", "2023", "2024"];

export const PublicHolidaysImproved = () => {
	const [year, setYear] = useState("2024");
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
				<h1>Státní svátky v roce 2024</h1>
			</header>
			<section>
				<select value={year} onChange={handleYearChange}>
					{YEARS.map((iterationYear) => (
						<option key={iterationYear}>{iterationYear}</option>
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
