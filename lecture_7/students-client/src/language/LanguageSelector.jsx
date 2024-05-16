import { useLanguageContext } from "./LanguageContext";

const LANGUAGES = [
	{ code: "cs", name: "Čeština" },
	{ code: "en", name: "English" },
];

export const LanguageSelector = () => {
	const { language, setLanguage } = useLanguageContext();

	const handleLanguageChange = (event) => {
		setLanguage(event.target.value);
	};

	return (
		<select value={language} onChange={handleLanguageChange}>
			{LANGUAGES.map((languageObject) => (
				<option key={languageObject.code} value={languageObject.code}>
					{languageObject.name}
				</option>
			))}
		</select>
	);
};
