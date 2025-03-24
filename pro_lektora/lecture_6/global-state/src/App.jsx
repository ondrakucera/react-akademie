import { useState } from "react";
import "./App.css";
import { LoginLogout } from "./LoginLogout";
import { Component1 } from "./Component1";

function App() {
	const [user, setUser] = useState(null);

	const handleUserChange = (user) => {
		setUser(user);
	};

	return (
		<div className="App">
			<LoginLogout user={user} onUserChange={handleUserChange} />
			<Component1 user={user} />
		</div>
	);
}

export default App;
