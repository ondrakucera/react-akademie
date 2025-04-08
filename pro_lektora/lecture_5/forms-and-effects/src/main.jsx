import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Employees } from "./Employees/Employees";
import { Forms } from "./Forms/Forms";
import { PublicHolidays } from "./PublicHolidays/PublicHolidays";
import { PublicHolidaysImproved } from "./PublicHolidays/PublicHolidaysImproved";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/employees",
		element: <Employees />,
	},
	{
		path: "/forms",
		element: <Forms />,
	},
	{
		path: "/public-holidays",
		element: <PublicHolidays />,
	},
	{
		path: "/public-holidays-improved",
		element: <PublicHolidaysImproved />,
	},
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
