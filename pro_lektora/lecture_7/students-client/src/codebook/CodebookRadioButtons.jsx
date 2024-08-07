import "./CodebookRadioButtons.css";

export const CodebookRadioButtons = ({ value, codebook, language, onChange }) => (
	<div className="CodebookRadioButtonsContainer">
		{codebook.map((codebookItem) => (
			<span key={codebookItem.code}>
				<label className="form-check-label">
					<input
						type="radio"
						value={codebookItem.code}
						checked={codebookItem.code === value}
						onChange={onChange}
						className="form-check-input"
					/>{" "}
					{codebookItem.names[language] ?? codebookItem.code}
				</label>{" "}
			</span>
		))}
	</div>
);
