import "./App.css";
import { Animals } from "./Animals";
import { Users } from "./Users.jsx";
import { Students } from "./Students.jsx";
import { lide } from "./lide.js";
import { IncreaseByOne } from "./IncreaseByOne.jsx";
import { StudentViewer } from "./StudentViewer.jsx";
import { Wrapper } from "./Wrapper.jsx";

function App() {
	return (
		<>
			{/* Wrapper pracuje s children prop */}
			<Wrapper>
				{/* Users je poslano jako chilren */}
				<Users />
			</Wrapper>
			<Wrapper>
				<Students students={lide} />
			</Wrapper>
			<Wrapper>
				<StudentViewer />
			</Wrapper>
			<Wrapper>
				<IncreaseByOne />
			</Wrapper>
			<Wrapper>
				<Animals />
			</Wrapper>
		</>
	);
}

export default App;
