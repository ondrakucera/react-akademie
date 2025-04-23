import { zamestnanci } from "./zamestnanci";
export const EmployeeTable = () => {
	return (
		<table>
			{zamestnanci.map((zamestnanec) => {
				return (
					<tr>
						<td>{zamestnanec.jmeno}</td>
						<td>{zamestnanec.prijmeni}</td>
					</tr>
				);
			})}
		</table>
	);
};
