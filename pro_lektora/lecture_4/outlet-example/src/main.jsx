import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { About } from "./About";
import { Academy } from "./Academy";
import { Mentoring } from "./Mentoring";
import { Introduction } from "./Introduction";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Introduction />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "academy",
				element: <Academy />,
			},
			{
				path: "mentoring",
				element: <Mentoring />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
