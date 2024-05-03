export const StudentDetail = ({ name, age, onStudentClick }) => {
	return (
		<button onClick={onStudentClick}>
			{name} ({age})
		</button>
	);
};
