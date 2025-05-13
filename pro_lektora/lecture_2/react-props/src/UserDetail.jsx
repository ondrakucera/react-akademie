/*
export const User = (props) => {
	return (
		<p>
			{props.firstName} {props.lastName} {props.age}
		</p>
	);
};
*/

/* User pomocí deconstruct */
export const UserDetail = ({ firstName, lastName, age }) => {
	return (
		<p>
			{firstName} {lastName} {age}
		</p>
	);
};
