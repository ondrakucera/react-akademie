import { useState } from "react";
import "./App.css";
import { LoginLogout } from "./LoginLogout";
import { Component1 } from "./Component1";
import { UserContext } from "./UserContext";

function App() {
	const [user, setUser] = useState(null);

	const handleUserChange = (user) => {
		setUser(user);
	};

	return (
		<div className="App">
			<LoginLogout user={user} onUserChange={handleUserChange} />
			<UserContext.Provider value={user}>
				<Component1 />
			</UserContext.Provider>
		</div>
	);
}

export default App;
