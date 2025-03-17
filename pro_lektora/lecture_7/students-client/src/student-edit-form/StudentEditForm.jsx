import { useContext, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Heading1 } from "../basic/Heading1";
import { Navigation } from "../basic/Navigation";
import { CodebookRadioButtons } from "../codebook/CodebookRadioButtons";
import { CodebookSelect } from "../codebook/CodebookSelect";
import { CodebooksContext } from "../codebook/CodebooksContext";
import { useLanguageContext } from "../language/LanguageContext";
import { Loader } from "../loader/Loader";
import { fetchStudent, updateStudent } from "../rest-api-client/rest-api-client";

import "./StudentEditForm.css";

export const StudentEditForm = () => {
	const { id } = useParams();
	const { language } = useLanguageContext();
	const codebooks = useContext(CodebooksContext);
	const [student, setStudent] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchAndSetStudent = async () => {
			const student = await fetchStudent(id);
			setStudent(student);
		};

		fetchAndSetStudent();
	}, [id]);

	const setFirstName = (firstName) => {
		setStudent({ ...student, firstName });
	};
	const setLastName = (lastName) => {
		setStudent({ ...student, lastName });
	};
	const setGender = (gender) => {
		setStudent({ ...student, gender });
	};
	const setHouse = (house) => {
		setStudent({ ...student, house });
	};
	const setYear = (year) => {
		setStudent({ ...student, year });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setStudent(undefined);
		await updateStudent(student);
		navigate(`/students/${student.id}`);
	};

	return (
		<div className="StudentEditForm">
			<Heading1>
				<FormattedMessage id="studentEditForm_title" />
			</Heading1>
			{student === undefined ? (
				<Loader />
			) : (
				<>
					<form onSubmit={handleSubmit}>
						<table className="table table-light table-bordered">
							<tbody>
								<tr>
									<th>
										<label htmlFor="first-name" className="form-label">
											<FormattedMessage id="firstName" />
										</label>
									</th>
									<td>
										<input
											id="first-name"
											value={student.firstName}
											onChange={(event) => setFirstName(event.target.value)}
											className="form-control"
										/>
									</td>
								</tr>
								<tr>
									<th>
										<label htmlFor="last-name" className="form-label">
											<FormattedMessage id="lastName" />
										</label>
									</th>
									<td>
										<input
											id="last-name"
											value={student.lastName}
											onChange={(event) => setLastName(event.target.value)}
											className="form-control"
										/>
									</td>
								</tr>
								<tr>
									<th>
										<FormattedMessage id="gender" />
									</th>
									<td>
										<CodebookRadioButtons
											value={student.gender}
											codebook={codebooks.gender}
											language={language}
											onChange={(event) => setGender(event.target.value)}
										/>
									</td>
								</tr>
								<tr>
									<th>
										<label htmlFor="house" className="form-label">
											<FormattedMessage id="house" />
										</label>
									</th>
									<td>
										<CodebookSelect
											id="house"
											value={student.house}
											codebook={codebooks.house}
											language={language}
											onChange={(event) => setHouse(event.target.value)}
										/>
									</td>
								</tr>
								<tr>
									<th>
										<label htmlFor="year" className="form-label">
											<FormattedMessage id="year" />
										</label>
									</th>
									<td>
										<CodebookSelect
											id="year"
											value={student.year}
											codebook={codebooks.year}
											language={language}
											onChange={(event) => setYear(event.target.value)}
										/>
									</td>
								</tr>
								<tr>
									<td colSpan="2">
										<button className="btn btn-primary"><FormattedMessage id="save" /></button>
									</td>
								</tr>
							</tbody>
						</table>
					</form>
					<Navigation>
						<Link to="/">
							<FormattedMessage id="back_to_student_list" />
						</Link>
					</Navigation>
				</>
			)}
		</div>
	);
};
