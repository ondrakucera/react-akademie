import { useState } from "react";
import "./LoginLogout.css";
import users from "./users.json";

export const LoginLogout = ({ user, onUserChange }) => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [incorrectPassword, setIncorrectPassword] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		const matchedUser = users.find(
			(iterationUser) => iterationUser.userName === userName && iterationUser.password === password
		);
		setUserName("");
		setPassword("");
		if (matchedUser === undefined) {
			setIncorrectPassword(true);
		} else {
			setIncorrectPassword(false);
			onUserChange(matchedUser);
		}
	};

	return (
		<section className="LoginLogout">
			{user === null ? (
				<>
					<form onSubmit={handleSubmit}>
						<table>
							<tbody>
								<tr>
									<td>
										<label htmlFor="user-name">Přihlašovací jméno</label>
									</td>
									<td>
										<input type="text" value={userName} onChange={(event) => setUserName(event.target.value)} />
									</td>
								</tr>
								<tr>
									<td>
										<label htmlFor="user-name">Heslo</label>
									</td>
									<td>
										<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
									</td>
								</tr>
								<tr>
									<td colSpan={2}>
										<button type="submit">Odeslat</button>
									</td>
								</tr>
							</tbody>
						</table>
					</form>
					{incorrectPassword && (
						<p>
							<strong>Nesprávné přihlašovací údaje!</strong>
						</p>
					)}
				</>
			) : (
				<>
					<p>
						Je přihlášen uživatel <strong>{user.userName}</strong>.
					</p>
					<p>
						<button onClick={() => onUserChange(null)}>Odhlásit</button>
					</p>
				</>
			)}
		</section>
	);
};
