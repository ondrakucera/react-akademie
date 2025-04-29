export const Button = ({ onClickFunction, name }) => {
	// Parent komponenta nemusí poslat name. Použij Click me.
	return <button onClick={onClickFunction}>{name || "Click me"}</button>;
};
