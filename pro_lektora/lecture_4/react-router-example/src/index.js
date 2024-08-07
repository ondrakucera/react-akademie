import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import App from "./App";
import { Introduction } from "./Introduction";
import { Academies } from "./Academies";
import { ReactAcademy } from "./ReactAcademy";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Introduction />,
	},
	{
		path: "/akademie",
		element: <Academies />,
	},
	{
		path: "/react-akademie",
		element: <ReactAcademy />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<RouterProvider router={router} />
	</React.StrictMode>
);
