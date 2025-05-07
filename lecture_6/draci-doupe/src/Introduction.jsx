import { FormattedMessage } from "react-intl";

export const Introduction = () => {
	return (
		<main>
			<header>
				<h1>
					<FormattedMessage id="introduction_draciDoupe_name" />
				</h1>
			</header>
			<section>
				<p>
					<FormattedMessage id="introduction_draciDoupe_description" />
				</p>
			</section>
		</main>
	);
};
