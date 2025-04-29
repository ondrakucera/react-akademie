import { Button } from "./Button";

export const StudentDetail = ({ firstName, lastName, age, onClickFunction }) => {
	return (
		<>
			<p>
				{firstName} {lastName} {age}
			</p>
			<Button onClickFunction={onClickFunction} />
		</>
	);
};

export const StudentDetailSimple = (props) => {
	const { firstName, lastName, age } = props;

	const handleClick = () => {
		console.log(props);
	};

	return (
		<>
			<p>
				{firstName} {lastName} {age}
			</p>
			<Button onClickFunction={handleClick} />
		</>
	);
};
