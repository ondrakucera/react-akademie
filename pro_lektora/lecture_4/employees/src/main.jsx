import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
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

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
