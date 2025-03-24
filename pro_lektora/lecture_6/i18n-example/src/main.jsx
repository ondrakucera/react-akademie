import { createRoot } from "react-dom/client";
import { IntlProvider } from "react-intl";
import "./index.css";
import App from "./App.jsx";

const messages = {
	cs: {
		title: "Vícejazyčnost",
		greeting: "Ahoj, zdravím tě z vícejazyčné aplikace.",
		current_dateTime: "Aktuální čas",
	},
	en: {
		title: "Internationalization",
		greeting: "Hello from a multilingual application.",
		current_dateTime: "Current time",
	},
};

createRoot(document.getElementById("root")).render(
	<IntlProvider locale="cs" messages={messages.cs}>
		<App />
	</IntlProvider>
);
