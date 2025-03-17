import { useContext, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Heading1 } from "../basic/Heading1";
import { Navigation } from "../basic/Navigation";
import { getCodebookItemName } from "../codebook/codebook";
import { CodebooksContext } from "../codebook/CodebooksContext";
import { useLanguageContext } from "../language/LanguageContext";
import { Loader } from "../loader/Loader";
import { deleteStudent, fetchStudents } from "../rest-api-client/rest-api-client";

import "./StudentList.css";

export const StudentList = () => {
	const { language } = useLanguageContext();
	const codebooks = useContext(CodebooksContext);
	const [students, setStudents] = useState();

	const fetchAndSetStudents = async () => {
		const students = await fetchStudents();
		setStudents(students);
	};

	useEffect(() => {
		fetchAndSetStudents();
	}, []);

	const handleDeleteButton = async (id) => {
		setStudents(undefined);
		await deleteStudent(id);
		await fetchAndSetStudents();
	};

	return (
		<div className="StudentList">
			<Heading1>
				<FormattedMessage id="studentList_title" />
			</Heading1>
			{students === undefined ? (
				<Loader />
			) : (
				<>
					<table className="table table-light table-striped table-bordered">
						<thead>
							<tr>
								<th>
									<FormattedMessage id="name" />
								</th>
								<th>
									<FormattedMessage id="gender" />
								</th>
								<th>
									<FormattedMessage id="house" />
								</th>
								<th>
									<FormattedMessage id="year" />
								</th>
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
									<td>{getCodebookItemName(codebooks.gender, student.gender, language)}</td>
									<td>{getCodebookItemName(codebooks.house, student.house, language)}</td>
									<td>{getCodebookItemName(codebooks.year, student.year, language)}</td>
									<td>
										<Link to={`/students/${student.id}/edit`}>
											<FormattedMessage id="studentList_edit" />
										</Link>{" "}
										<button
											type="button"
											onClick={() => handleDeleteButton(student.id)}
											className="btn btn-danger student-delete"
										>
											<FormattedMessage id="studentList_delete" />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<Navigation>
						<Link to="/students/create">
							<FormattedMessage id="studentList_create" />
						</Link>
					</Navigation>
				</>
			)}
		</div>
	);
};
