import { Outlet } from "react-router-dom";
import { LanguageSelector } from "./language/LanguageSelector";

import "./Root.css";

export const Root = () => {
	return (
		<div className="Root">
			<header>
				<LanguageSelector />
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};
