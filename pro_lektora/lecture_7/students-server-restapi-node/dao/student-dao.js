const studentSequence = (() => {
	let lastId = 0;
	return {
		/**
		 * Returns the next ID in the sequence.
		 *
		 * @return {number} the next ID in the sequence
		 */
		next: () => ++lastId,
	};
})();

/**
 * Simple DAO for working with student instances.
 *
 * @type {{findById: (function(id: number): Student | null), save: (function(student: Student): Student), deleteById: (function(id: number): void), findAll: (function(): Student[])}}
 */
const studentDao = (() => {
	/**
	 * Internal database of students.
	 *
	 * @type {{[key: number]: Student}}
	 */
	const students = {};
	return {
		/**
		 * Finds all students, ordered by ID in ascending order.
		 *
		 * @return {Student[]} the students
		 */
		findAll: () => Object.values(students).sort((a, b) => a.id - b.id),

		/**
		 * Finds a student by their ID.
		 *
		 * @param {number} id the student ID
		 * @return {Student | null} the student or `null` if they cannot be found
		 */
		findById: (id) => students[id] ?? null,

		/**
		 * Saves a student.
		 *
		 * - If the student has no ID, it is generated and the student is added to the database.
		 * - If the student has an ID, it is updated in the database. If there is no student in the database with a
		 * corresponding ID, an error is thrown.
		 *
		 * @param {Student} student the student to be saved
		 * @return {Student} the saved student
		 */
		save: (student) => {
			if (student.id) {
				if (!(student.id in students)) {
					throw new Error(`Attempting to update a non-existent student '${student.id}'`);
				}
			} else {
				student.id = studentSequence.next();
			}
			students[student.id] = student;
			return student;
		},

		/**
		 * Deletes a student with the specified ID. If there is no corresponding student in the database, an error is
		 * thrown.
		 *
		 * @param {number} id the student ID
		 */
		deleteById: (id) => {
			if (!(id in students)) {
				throw new Error(`Attempting to delete a non-existent student '${id}'`);
			} else {
				delete students[id];
			}
		},
	};
})();

module.exports = studentDao;
