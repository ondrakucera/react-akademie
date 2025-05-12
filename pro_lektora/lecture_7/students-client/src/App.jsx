import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CodebooksContext } from "./codebook/CodebooksContext";
import { Loader } from "./loader/Loader";
import { fetchCodebooks } from "./rest-api-client/rest-api-client";
import { StudentCreateForm } from "./student-create-form/StudentCreateForm";
import { StudentDetail } from "./student-detail/StudentDetail";
import { StudentEditForm } from "./student-edit-form/StudentEditForm";
import { StudentList } from "./student-list/StudentList";

import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <StudentList />,
	},
	{
		path: "/students/:id",
		element: <StudentDetail />,
	},
	{
		path: "/students/:id/edit",
		element: <StudentEditForm />,
	},
	{
		path: "/students/create",
		element: <StudentCreateForm />,
	},
]);

function App() {
	const [codebooks, setCodebooks] = useState();

	useEffect(() => {
		const fetchAndSetCodebooks = async () => {
			const codebooks = await fetchCodebooks();
			setCodebooks(codebooks);
		};

		fetchAndSetCodebooks();
	}, []);

	return (
		<main className="App">
			{codebooks === undefined ? (
				<Loader />
			) : (
				<CodebooksContext.Provider value={codebooks}>
					<RouterProvider router={router}></RouterProvider>
				</CodebooksContext.Provider>
			)}
		</main>
	);
}

export default App;
