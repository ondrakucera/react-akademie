import { useContext, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link, useParams } from "react-router-dom";
import { Heading1 } from "../basic/Heading1";
import { Navigation } from "../basic/Navigation";
import { getCodebookItemName } from "../codebook/codebook";
import { CodebooksContext } from "../codebook/CodebooksContext";
import { useLanguageContext } from "../language/LanguageContext";
import { Loader } from "../loader/Loader";
import { fetchStudent } from "../rest-api-client/rest-api-client";

export const StudentDetail = () => {
	const { id } = useParams();
	const { language } = useLanguageContext();
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
			<Heading1>
				<FormattedMessage id="studentDetail_title" />
			</Heading1>
			{student === undefined ? (
				<Loader />
			) : (
				<>
					<table className="table table-light table-bordered">
						<tbody>
							<tr>
								<th><FormattedMessage id="name" /></th>
								<td>
									{student.firstName} {student.lastName}
								</td>
							</tr>
							<tr>
								<th><FormattedMessage id="gender" /></th>
								<td>{getCodebookItemName(codebooks.gender, student.gender, language)}</td>
							</tr>
							<tr>
								<th><FormattedMessage id="house" /></th>
								<td>{getCodebookItemName(codebooks.house, student.house, language)}</td>
							</tr>
							<tr>
								<th><FormattedMessage id="year" /></th>
								<td>{getCodebookItemName(codebooks.year, student.year, language)}</td>
							</tr>
						</tbody>
					</table>
					<Navigation>
						<Link to="/">
							<FormattedMessage id="back_to_student_list" />
						</Link>{" "}
						<Link to={`/students/${student.id}/edit`}>
							<FormattedMessage
								id="studentDetail_edit"
								values={{ name: `${student.firstName} ${student.lastName}` }}
							/>
						</Link>
					</Navigation>
				</>
			)}
		</div>
	);
};
