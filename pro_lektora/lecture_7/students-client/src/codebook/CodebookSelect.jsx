export const CodebookSelect = ({ id, value, codebook, language, onChange, withEmpty = false }) => (
	<select id={id} value={value} onChange={onChange} className="form-select">
		<>
			{withEmpty && <option key=""></option>}
			{codebook.map((codebookItem) => (
				<option key={codebookItem.code} value={codebookItem.code}>
					{codebookItem.names[language] ?? codebookItem.code}
				</option>
			))}
		</>
	</select>
);
