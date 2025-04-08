import { Link } from "react-router-dom";
import "./App.css";
import employees from "./data/employees.json";

function App() {
	// Funkce pro porovnání zaměstnanců abecedně nejprve podle příjmení a v případě shody potom podle křestního jména.
	const compareEmployees = (employee1, employee2) => {
		const lastNameComparison = employee1.lastName.localeCompare(employee2.lastName);
		if (lastNameComparison !== 0) {
			return lastNameComparison;
		}
		return employee1.firstName.localeCompare(employee2.firstName);
	};

	return (
		<div className="App">
			<h1>Seznam zaměstnanců</h1>
			<ul>
				{employees.toSorted(compareEmployees).map((employee) => (
					<li key={employee.id}>
						<Link to={`/employees/${employee.id}`}>
							{employee.firstName} {employee.lastName}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
