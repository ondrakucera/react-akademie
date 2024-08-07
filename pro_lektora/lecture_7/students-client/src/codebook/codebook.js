// Gets the name of a codebook item for a particular language.
export const getCodebookItemName = (codebook, codebookItemCode, language) => {
	let codebookItemName = codebookItemCode;
	const codebookItem = codebook.find((item) => item.code === codebookItemCode);
	if (codebookItem && codebookItem.names[language]) {
		codebookItemName = codebookItem.names[language];
	}
	return codebookItemName;
};
