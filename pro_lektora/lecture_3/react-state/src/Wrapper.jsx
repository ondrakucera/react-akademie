export const Wrapper = ({ children }) => {
	return (
		<div>
			<h1>Header</h1>
			{children}
			<p>Footer</p>
		</div>
	);
};
