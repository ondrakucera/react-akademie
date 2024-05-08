import "./Season.css";

export const Season = ({ heading, imageSource, imageAlternativeText, children }) => (
	<section className="Season">
		<h1>{heading}</h1>
		<img src={imageSource} className="Season-image" alt={imageAlternativeText} />
		{children}
	</section>
);
