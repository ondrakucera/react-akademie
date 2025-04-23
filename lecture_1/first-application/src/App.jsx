import "./App.css";
import { Button } from "./Button";
import { EmployeeTable } from "./EmployeeTable";
import { FirstComponent } from "./FirstComponent";
import { List } from "./List";
import { SecondComponent } from "./SecondComponent";
function App() {
	return (
		<>
			{/*<FirstComponent/>*/}
			<Button />
			<SecondComponent />
			<List />
			<EmployeeTable />
		</>
	);
}

export default App;
