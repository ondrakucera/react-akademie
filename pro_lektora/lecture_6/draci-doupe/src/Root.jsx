import { Link, Outlet } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { LanguageSelector } from "./LanguageSelector";
import "./Root.css";

export const Root = () => {
	return (
		<div className="Root">
			<header>
				<nav>
					<ul>
						<li>
							<Link to="/">
								<FormattedMessage id="introduction_title" />
							</Link>
						</li>
						<li>
							<Link to="/races">
								<FormattedMessage id="races_title" />
							</Link>
						</li>
						<li>
							<Link to="/professions">
								<FormattedMessage id="professions_title" />
							</Link>
						</li>
					</ul>
				</nav>
				<div className="LanguageSelectorContainer">
					<LanguageSelector />
				</div>
			</header>

			<Outlet />
		</div>
	);
};
