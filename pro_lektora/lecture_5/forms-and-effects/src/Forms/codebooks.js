export const DAYS = [
	{ code: "Mon", name: "Pondělí" },
	{ code: "Tue", name: "Úterý" },
	{ code: "Wed", name: "Středa" },
	{ code: "Thu", name: "Čtvrtek" },
	{ code: "Fri", name: "Pátek" },
	{ code: "Sat", name: "Sobota" },
	{ code: "Sun", name: "Neděle" },
];

export const MAGI = [
	{ code: "CASPAR", name: "Kašpar" },
	{ code: "MELCHIOR", name: "Melichar" },
	{ code: "BALTHAZAR", name: "Baltazar" },
];

export const getCodebookItem = (codebook, code) => codebook.find((codebookItem) => codebookItem.code === code);
