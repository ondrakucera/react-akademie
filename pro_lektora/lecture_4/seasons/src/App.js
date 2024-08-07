import { Link } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>Roční období</h1>
			<ul>
				<li>
					<Link to="/spring">Jaro</Link>
				</li>
				<li>
					<Link to="/summer">Léto</Link>
				</li>
				<li>
					<Link to="/autumn">Podzim</Link>
				</li>
				<li>
					<Link to="/winter">Zima</Link>
				</li>
			</ul>
		</div>
	);
}

export default App;
