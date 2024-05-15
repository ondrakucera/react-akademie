import { FormattedDate, FormattedMessage, FormattedTime } from "react-intl";
import "./App.css";

function App() {
	const now = new Date();

	return (
		<div className="App">
			<h1>
				<FormattedMessage id="title" />
			</h1>
			<p>
				<FormattedMessage id="greeting" />
			</p>
			<p>
				<FormattedMessage id="current_dateTime" />: <FormattedDate value={now} /> <FormattedTime value={now} />
			</p>
		</div>
	);
}

export default App;
