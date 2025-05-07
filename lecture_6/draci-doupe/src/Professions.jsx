import { FormattedMessage } from "react-intl";

export const Professions = () => {
	return (
		<main>
			<header>
				<h1>
					<FormattedMessage id="professions_title" />
				</h1>
			</header>
			<section>
				<p>
					<FormattedMessage id="professions_introduction" />
				</p>
				<ul>
					{["warrior", "ranger", "alchemist", "sorcerer", "thief"].map((profession) => (
						<li key={profession}>
							<strong>
								<FormattedMessage id={`professions_${profession}_name`} />.
							</strong>{" "}
							<FormattedMessage id={`professions_${profession}_description`} />
						</li>
					))}
				</ul>
			</section>
		</main>
	);
};
