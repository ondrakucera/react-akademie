import { FormattedMessage } from "react-intl";

export const Races = () => {
	return (
		<main>
			<header>
				<h1>
					<FormattedMessage id="races_title" />
				</h1>
			</header>
			<section>
				<p>
					<FormattedMessage id="races_introduction" />
				</p>
				<ul>
					{["hobbit", "kuduk", "dwarf", "elf", "human", "barbar", "kroll"].map((race) => (
						<li key={race}>
							<strong>
								<FormattedMessage id={`races_${race}_name`} />.
							</strong>{" "}
							<FormattedMessage id={`races_${race}_description`} />
						</li>
					))}
				</ul>
			</section>
		</main>
	);
};
