import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Employee } from "./Employee";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/employees/:id",
		element: <Employee />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
