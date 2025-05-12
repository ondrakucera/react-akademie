export const CodebookSelect = ({ id, value, codebook, onChange, withEmpty = false }) => (
	<select id={id} value={value} onChange={onChange} className="form-select" required>
		<>
			{withEmpty && <option key=""></option>}
			{codebook.map((codebookItem) => (
				<option key={codebookItem.code} value={codebookItem.code}>
					{codebookItem.names.en}
				</option>
			))}
		</>
	</select>
);
