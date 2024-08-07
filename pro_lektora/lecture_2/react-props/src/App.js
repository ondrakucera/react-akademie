import "./App.css";
import { Students } from "./Students";

function App() {
	const students = [
		{ id: 1, name: "Zuzka", age: 20 },
		{ id: 2, name: "Kuba", age: 18 },
		{ id: 3, name: "Jana", age: 19 },
		{ id: 4, name: "Petr", age: 21 },
	];
	return (
		<div className="App">
			<Students students={students} />
		</div>
	);
}

export default App;
