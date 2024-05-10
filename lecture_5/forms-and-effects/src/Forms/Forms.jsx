import { useState } from "react";
import { DAYS, MAGI, getCodebookItem } from "./codebooks";
import "./Forms.css";

export const Forms = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [age, setAge] = useState(0);
	const [dayCode, setDayCode] = useState("Mon");
	const [magusCode, setMagusCode] = useState("");

	const handleFirstNameChange = (event) => {
		setFirstName(event.target.value);
	};
	const handleLastNameChange = (event) => {
		setLastName(event.target.value);
	};
	const handleAgeChange = (event) => {
		setAge(Number(event.target.value));
	};
	const handleDayCodeChange = (event) => {
		setDayCode(event.target.value);
	};
	const handleMagusCodeChange = (event) => {
		setMagusCode(event.target.value);
	};

	return (
		<main className="Forms">
			<h1>Zadávání dat</h1>
			<table>
				<tbody>
					<tr>
						<th>
							<label htmlFor="first-name">Křestní jméno</label>
						</th>
						<td>
							<input
								type="text"
								id="first-name"
								value={firstName}
								onChange={handleFirstNameChange}
							/>
						</td>
					</tr>
					<tr>
						<th>
							<label htmlFor="last-name">Příjmení</label>
						</th>
						<td>
							<input
								type="text"
								id="last-name"
								value={lastName}
								onChange={handleLastNameChange}
							/>
						</td>
					</tr>
					<tr>
						<th>
							<label htmlFor="age">Věk</label>
						</th>
						<td>
							<input
								type="number"
								id="age"
								value={age}
								onChange={handleAgeChange}
							/>
						</td>
					</tr>
					<tr>
						<th>
							<label htmlFor="day">Den v týdnu</label>
						</th>
						<td>
							<select id="day" value={dayCode} onChange={handleDayCodeChange}>
								{DAYS.map((dayCodebookItem) => (
									<option key={dayCodebookItem.code} value={dayCodebookItem.code}>
										{dayCodebookItem.name}
									</option>
								))}
							</select>
						</td>
					</tr>
					<tr>
						<th>Král</th>
						<td>
							{MAGI.map((magus) => (
								<label key={magus.code}>
									<input
										type="radio"
										value={magus.code}
										checked={magusCode === magus.code}
										onChange={handleMagusCodeChange}
									/>{" "}
									{magus.name}
								</label>
							))}
						</td>
					</tr>
				</tbody>
			</table>

			<h1>Zadaná data</h1>
			<table>
				<tbody>
					<tr>
						<th>Křestní jméno</th>
						<td>{firstName}</td>
					</tr>
					<tr>
						<th>Příjmení</th>
						<td>{lastName}</td>
					</tr>
					<tr>
						<th>Je uživatel plnoletý?</th>
						<td>{age >= 18 ? "Ano" : "Ne"}</td>
					</tr>
					<tr>
						<th>Den v týdnu</th>
						<td>
							<ul>
								<li>Kód: {dayCode}</li>
								<li>Název: {getCodebookItem(DAYS, dayCode).name}</li>
							</ul>
						</td>
					</tr>
					<tr>
						<th>Král</th>
						<td>
							{magusCode === "" ? (
								"Dosud nebyl vybrán žádný král."
							) : (
								<ul>
									<li>Kód: {magusCode}</li>
									<li>Název: {getCodebookItem(MAGI, magusCode).name}</li>
								</ul>
							)}
						</td>
					</tr>
				</tbody>
			</table>
		</main>
	);
};
