import { StudentDetail } from "./StudentDetail";

export const Students = ({ students }) => {
	const handleStudentClick = (name) => {
		console.log(name);
	};

	if (students.length === 0) return <p>No students</p>;
	return (
		<ul>
			{students.map((student) => (
				<StudentDetail
					key={student.id}
					name={student.name}
					age={student.age}
					onStudentClick={() => handleStudentClick(student.name)}
				/>
			))}
		</ul>
	);
};
