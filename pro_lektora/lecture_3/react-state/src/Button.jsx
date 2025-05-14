export const Button = ({ onClickFunction, name }) => {
	// Rodičovská komponenta nemusí poslat name. V tom případě se použije Click me.
	return <button onClick={onClickFunction}>{name || "Click me"}</button>;
};
