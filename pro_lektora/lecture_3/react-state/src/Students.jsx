import { StudentDetail } from "./StudentDetail";

export const Students = ({ students }) => {
	const handleClick = (student) => {
		console.log(student);
	};

	return (
		<>
			{students.length === 0
				? "No students"
				: students.map((student) => {
						return (
							<StudentDetail
								onClickFunction={() => handleClick(student)}
								firstName={student.jmeno}
								lastName={student.prijmeni}
								age={student.vek}
								key={student.id}
							/>
						);
				  })}
		</>
	);
};
