import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Heading1 } from "../basic/Heading1";
import { Navigation } from "../basic/Navigation";
import { getCodebookItemName } from "../codebook/codebook";
import { CodebooksContext } from "../codebook/CodebooksContext";
import { Loader } from "../loader/Loader";
import { fetchStudent } from "../rest-api-client/rest-api-client";

export const StudentDetail = () => {
	const { id } = useParams();
	const codebooks = useContext(CodebooksContext);
	const [student, setStudent] = useState();

	useEffect(() => {
		const fetchAndSetStudent = async () => {
			const student = await fetchStudent(id);
			setStudent(student);
		};

		fetchAndSetStudent();
	}, [id]);

	return (
		<div className="StudentDetail">
			<Heading1>Student detail</Heading1>
			{student === undefined ? (
				<Loader />
			) : (
				<>
					<table className="table table-light table-bordered">
						<tbody>
							<tr>
								<th>Name</th>
								<td>
									{student.firstName} {student.lastName}
								</td>
							</tr>
							<tr>
								<th>Gender</th>
								<td>{getCodebookItemName(codebooks.gender, student.gender)}</td>
							</tr>
							<tr>
								<th>House</th>
								<td>{getCodebookItemName(codebooks.house, student.house)}</td>
							</tr>
							<tr>
								<th>Year</th>
								<td>{getCodebookItemName(codebooks.year, student.year)}</td>
							</tr>
						</tbody>
					</table>
					<Navigation>
						<Link to="/">Back to student list</Link>{" "}
						<Link to={`/students/${student.id}/edit`}>
							Edit {student.firstName} {student.lastName}
						</Link>
					</Navigation>
				</>
			)}
		</div>
	);
};
