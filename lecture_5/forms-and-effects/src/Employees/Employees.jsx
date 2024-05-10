import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import "./Employees.css";

export const Employees = () => {
	const [employees, setEmployees] = useState();
	const [departments, setDepartments] = useState();

	useEffect(() => {
		const fetchAndSetData = async () => {
			const employeesResponse = await fetch("http://localhost:3000/data/employees.json");
			setEmployees(await employeesResponse.json());
			const departmentsResponse = await fetch("http://localhost:3000/data/departments.json");
			setDepartments(await departmentsResponse.json());
		};

		fetchAndSetData();
	}, []);

	const findDepartment = (employee) => departments.find((department) => department.id === employee.departmentId);

	return (
		<main className="Employees">
			<header>
				<h1>Seznam zaměstnanců</h1>
			</header>
			<section>
				{employees === undefined || departments === undefined ? (
					<Loader />
				) : (
					<table className="Employees-table">
						<thead>
							<tr>
								<th>Jméno</th>
								<th>Věk</th>
								<th>Oddělení</th>
							</tr>
						</thead>
						<tbody>
							{employees.map((employee) => (
								<tr key={employee.id}>
									<td>
										{employee.firstName} {employee.lastName}
									</td>
									<td>{employee.age}</td>
									<td>{findDepartment(employee).name}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</section>
		</main>
	);
};
