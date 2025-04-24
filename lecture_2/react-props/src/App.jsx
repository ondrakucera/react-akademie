import "./App.css";
import { UserList } from "./UserList.jsx";
import { People } from "./People.jsx";
import { Numbers } from "./Numbers.jsx";
import { Menu } from "./Menu.jsx";

function App() {
	return (
		<>
			<Menu/>
			<Numbers/>
			<People/>
			<UserList />
		</>
	);
}

export default App;
