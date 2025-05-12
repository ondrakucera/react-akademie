/**
 * Creates a new student.
 *
 * @param {number|null} id the ID
 * @param {string} firstName the first name
 * @param {string} lastName the last name
 * @param {"M"|"F"} gender the gender
 * @param {"GRYFFINDOR"|"HUFFLEPUFF"|"RAVENCLAW"|"SLYTHERIN"} house
 * @param {"1"|"2"|"3"|"4"|"5"|"6"|"7"} year the year
 * @constructor
 */
const Student = function (id, firstName, lastName, gender, house, year) {
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.gender = gender;
	this.house = house;
	this.year = year;
};

module.exports = Student;
