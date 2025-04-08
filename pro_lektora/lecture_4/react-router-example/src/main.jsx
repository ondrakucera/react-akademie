import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import App from "./App.jsx";
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

createRoot(document.getElementById("root")).render(
	<StrictMode>
		{/* <App /> */}
		<RouterProvider router={router} />
	</StrictMode>
);
