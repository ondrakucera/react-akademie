import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
