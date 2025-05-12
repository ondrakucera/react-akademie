import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heading1 } from "../basic/Heading1";
import { Navigation } from "../basic/Navigation";
import { getCodebookItemName } from "../codebook/codebook";
import { CodebooksContext } from "../codebook/CodebooksContext";
import { Loader } from "../loader/Loader";
import { deleteStudent, fetchStudents } from "../rest-api-client/rest-api-client";

import "./StudentList.css";

export const StudentList = () => {
	const codebooks = useContext(CodebooksContext);
	const [students, setStudents] = useState();

	const fetchAndSetStudents = async () => {
		const students = await fetchStudents();
		setStudents(students);
	};

	useEffect(() => {
		fetchAndSetStudents();
	}, []);

	const handleDeleteButton = async (student) => {
		const confirmation = confirm(`Do you really want to delete ${student.firstName} ${student.lastName}?`);
		if (confirmation) {
			setStudents(undefined);
			await deleteStudent(student.id);
			await fetchAndSetStudents();
		}
	};

	return (
		<div className="StudentList">
			<Heading1>List of students</Heading1>
			{students === undefined ? (
				<Loader />
			) : (
				<>
					<table className="table table-light table-striped table-bordered">
						<thead>
							<tr>
								<th>Name</th>
								<th>Gender</th>
								<th>House</th>
								<th>Year</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{students.map((student) => (
								<tr key={student.id}>
									<td>
										<Link to={`/students/${student.id}`}>
											{student.firstName} {student.lastName}
										</Link>
									</td>
									<td>{getCodebookItemName(codebooks.gender, student.gender)}</td>
									<td>{getCodebookItemName(codebooks.house, student.house)}</td>
									<td>{getCodebookItemName(codebooks.year, student.year)}</td>
									<td>
										<Link to={`/students/${student.id}/edit`}>Edit</Link>{" "}
										<button
											type="button"
											onClick={() => handleDeleteButton(student)}
											className="btn btn-danger student-delete"
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<Navigation>
						<Link to="/students/create">Create new student</Link>
					</Navigation>
				</>
			)}
		</div>
	);
};
