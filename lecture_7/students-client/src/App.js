import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CodebooksContext } from "./codebook/CodebooksContext";
import { LanguageProvider, useLanguageContext } from "./language/LanguageContext";
import { Loader } from "./loader/Loader";
import { fetchCodebooks } from "./rest-api-client/rest-api-client";
import { StudentCreateForm } from "./student-create-form/StudentCreateForm";
import { StudentDetail } from "./student-detail/StudentDetail";
import { StudentEditForm } from "./student-edit-form/StudentEditForm";
import { StudentList } from "./student-list/StudentList";
import { Root } from "./Root";

import "./App.css";

import messagesCs from "./messages/messages_cs.json";
import messagesEn from "./messages/messages_en.json";

const messages = {
	cs: messagesCs,
	en: messagesEn,
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
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
		],
	},
]);

function App() {
	return (
		<LanguageProvider>
			<AppInner />
		</LanguageProvider>
	);
}

const AppInner = () => {
	const { language } = useLanguageContext();
	const [gender, setGender] = useState();
	const [house, setHouse] = useState();
	const [year, setYear] = useState();

	useEffect(() => {
		const fetchAndSetCodebooks = async () => {
			const { gender, house, year } = await fetchCodebooks();
			setGender(gender);
			setHouse(house);
			setYear(year);
		};

		fetchAndSetCodebooks();
	}, []);

	return gender === undefined || house === undefined || year === undefined ? (
		<Loader />
	) : (
		<CodebooksContext.Provider value={{ gender, house, year }}>
			<IntlProvider locale={language} messages={messages[language]}>
				<RouterProvider router={router}></RouterProvider>
			</IntlProvider>
		</CodebooksContext.Provider>
	);
};

export default App;
