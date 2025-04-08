import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<nav className="App-navigation">
				<ul>
					<li>
						<Link to="/">Úvod</Link>
					</li>
					<li>
						<Link to="/about">O nás</Link>
					</li>
					<li>
						<Link to="/mentoring">Mentoring</Link>
					</li>
					<li>
						<Link to="/academy">Akademie</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
}

export default App;
