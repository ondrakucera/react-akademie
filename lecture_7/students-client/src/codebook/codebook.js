// Gets the English name of a codebook item.
export const getCodebookItemName = (codebook, codebookItemCode) =>
	codebook.find((codebookItem) => codebookItem.code === codebookItemCode).names.en;
