import { useParams, Link } from "react-router-dom";
import "./Employee.css";
import konqi from "./Konqi.png";
import employees from "./data/employees.json";
import departments from "./data/departments.json";

export const Employee = () => {
	const { id } = useParams();
	const employee = employees.find((employee) => employee.id === Number(id));
	const department = departments.find((department) => department.id === employee.departmentId);

	return (
		<section className="Employee">
			<h1>Karta zaměstnance</h1>

			<div className="Employee-card">
				<div className="Employee-avatar-container">
					<img src={konqi} className="Employee-avatar" alt="Konqi" />
				</div>
				<div className="Employee-detail-container">
					<div>Jméno</div>
					<div>{employee.firstName}</div>
					<div>Příjmení</div>
					<div>{employee.lastName}</div>
					<div>Věk</div>
					<div>{employee.age}</div>
					<div>Oddělení</div>
					<div>{department.name}</div>
				</div>
			</div>

			<Link to="/">Zpět na seznam zaměstnanců</Link>
		</section>
	);
};
