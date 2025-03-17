import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Autumn } from "./Season/Autumn";
import { Spring } from "./Season/Spring";
import { Summer } from "./Season/Summer";
import { Winter } from "./Season/Winter";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/autumn",
		element: <Autumn />,
	},
	{
		path: "/spring",
		element: <Spring />,
	},
	{
		path: "/summer",
		element: <Summer />,
	},
	{
		path: "/winter",
		element: <Winter />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
