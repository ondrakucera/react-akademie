import { useContext } from "react";
import { UserContext } from "./UserContext";
import "./Component4.css";

export const Component4 = () => {
	const user = useContext(UserContext);
	return (
		<div className="Component4">
			<p>Začátek komponenty Component4.</p>
			{user !== null ? (
				<table>
					<tbody>
						<tr>
							<th>Jméno</th>
							<td>
								{user.firstName} {user.lastName}
							</td>
						</tr>
						<tr>
							<th>Věk</th>
							<td>{user.age}</td>
						</tr>
						<tr>
							<th>E-mail</th>
							<td>{user.email}</td>
						</tr>
						<tr>
							<th>Telefon</th>
							<td>{user.phone}</td>
						</tr>
						<tr>
							<th>Adresa</th>
							<td>
								{user.address.street} {user.address.streetNumber}, {user.address.zipCode} {user.address.streetCity}
							</td>
						</tr>
					</tbody>
				</table>
			) : (
				<p>Aktuálně není přihlášen žádný uživatel.</p>
			)}
			<p>Konec komponenty Component4.</p>
		</div>
	);
};
