import "./CodebookRadioButtons.css";

export const CodebookRadioButtons = ({ value, codebook, onChange }) => (
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
					{codebookItem.names.en}
				</label>{" "}
			</span>
		))}
	</div>
);
