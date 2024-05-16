import { useContext, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import { Heading1 } from "../basic/Heading1";
import { Navigation } from "../basic/Navigation";
import { CodebookRadioButtons } from "../codebook/CodebookRadioButtons";
import { CodebookSelect } from "../codebook/CodebookSelect";
import { CodebooksContext } from "../codebook/CodebooksContext";
import { useLanguageContext } from "../language/LanguageContext";
import { createStudent } from "../rest-api-client/rest-api-client";

import "./StudentCreateForm.css";

export const StudentCreateForm = () => {
	const { language } = useLanguageContext();
	const codebooks = useContext(CodebooksContext);
	const [student, setStudent] = useState({ firstName: "", lastName: "", gender: "", house: "", year: "" });
	const navigate = useNavigate();

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
		const id = await createStudent(student);
		navigate(`/students/${id}`);
	};

	return (
		<div className="StudentCreateForm">
			<Heading1>
				<FormattedMessage id="studentCreateForm_title" />
			</Heading1>
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
									withEmpty={true}
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
									withEmpty={true}
								/>
							</td>
						</tr>
						<tr>
							<td colSpan="2">
								<button className="btn btn-primary">
									<FormattedMessage id="save" />
								</button>
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
		</div>
	);
};
