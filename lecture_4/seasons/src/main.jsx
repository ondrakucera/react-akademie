import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
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

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
