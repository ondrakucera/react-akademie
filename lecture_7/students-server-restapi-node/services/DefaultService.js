/* eslint-disable no-unused-vars */
const Service = require('./Service');

const CodebookItem = require('../domain/codebook');
const Student = require('../domain/student');
const studentDao = require('../dao/student-dao');

const codebooks = createCodebooks();
persistSampleStudents();

/**
* Deletes a student
* Deletes a `Student`.
*
* studentId Long Student id
* no response value expected for this operation
* */
const deleteStudent = ({ studentId }) => new Promise(
  async (resolve, reject) => {
    try {
      studentDao.deleteById(studentId);
      resolve({code: 204});
    } catch (e) {
        reject(Service.rejectResponse('Not found', 404));
    }
  },
);
/**
* Obtains a list of items of a codebook
* Obtains a list of `CodebookItem`s. The list is sorted by `order`.
*
* codebookCode String Codebook code
* returns List
* */
const getCodebookItems = ({ codebookCode }) => new Promise(
  async (resolve, reject) => {
    try {
      const codebook = codebooks[codebookCode] ?? [];
      resolve(Service.successResponse(codebook));
    } catch (e) {
      reject(Service.rejectResponse(e.message));
    }
  },
);
/**
* Obtains a student
* Obtains a `Student` by its id.
*
* studentId Long Student id
* returns Student
* */
const getStudent = ({ studentId }) => new Promise(
  async (resolve, reject) => {
    try {
      const student = studentDao.findById(studentId);
      if (student) {
        resolve(Service.successResponse(student));
      } else {
        reject(Service.rejectResponse('Not found', 404));
      }
    } catch (e) {
      reject(Service.rejectResponse(e.message));
    }
  },
);
/**
* Obtains a list of students
* Obtains a list of `Student`s. The list is sorted by `lastName` and then by `firstName`.
*
* returns List
* */
const getStudents = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse(studentDao.findAll()));
    } catch (e) {
      reject(Service.rejectResponse(e.message));
    }
  },
);
/**
* Creates a student
* Creates a `Student`.
*
* student Student Student
* returns Long
* */
const postStudent = ({ student }) => new Promise(
  async (resolve, reject) => {
    try {
      const createdStudent = studentDao.save(
        new Student(null, student.firstName, student.lastName, student.gender, student.house, student.year)
      );
      resolve(Service.successResponse(createdStudent.id, 200));
    } catch (e) {
      reject(Service.rejectResponse(e.message));
    }
  },
);
/**
* Saves a student
* Saves a `Student`.
*
* studentId Long Student id
* student Student Student
* no response value expected for this operation
* */
const putStudent = ({ studentId, student }) => new Promise(
  async (resolve, reject) => {
    try {
      studentDao.save(
        new Student(
          Number(studentId),
          student.firstName,
          student.lastName,
          student.gender,
          student.house,
          student.year
        )
      );
      resolve({code: 204});
    } catch (e) {
      reject(Service.rejectResponse('Not found', 404));
    }
  },
);

function persistSampleStudents() {
  studentDao.save(new Student(null, "Harry", "Potter", "M", "GRYFFINDOR", "2"));
  studentDao.save(new Student(null, "Hermione", "Granger", "F", "GRYFFINDOR", "2"));
  studentDao.save(new Student(null, "Ron", "Weasley", "M", "GRYFFINDOR", "2"));
  studentDao.save(new Student(null, "Ginny", "Weasley", "F", "GRYFFINDOR", "1"));
  studentDao.save(new Student(null, "Luna", "Lovegood", "F", "RAVENCLAW", "1"));
  studentDao.save(new Student(null, "Draco", "Malfoy", "M", "SLYTHERIN", "2"));
}

function createCodebooks() {
  return {
    GENDER: [
      new CodebookItem("M", { cs: "Muž", en: "Male" }, 1),
      new CodebookItem("F", { cs: "Žena", en: "Female" }, 2),
    ],
    HOUSE: [
      new CodebookItem("GRYFFINDOR", { cs: "Nebelvír", en: "Gryffindor" }, 1),
      new CodebookItem("HUFFLEPUFF", { cs: "Mrzimor", en: "Hufflepuff" }, 2),
      new CodebookItem("RAVENCLAW", { cs: "Havraspár", en: "Ravenclaw" }, 3),
      new CodebookItem("SLYTHERIN", { cs: "Zmijozel", en: "Slytherin" }, 4),
    ],
    YEAR: [
      new CodebookItem("1", { cs: "První", en: "First" }, 1),
      new CodebookItem("2", { cs: "Druhý", en: "Second" }, 2),
      new CodebookItem("3", { cs: "Třetí", en: "Third" }, 2),
      new CodebookItem("4", { cs: "Čtvrtý", en: "Fourth" }, 2),
      new CodebookItem("5", { cs: "Pátý", en: "Fifth" }, 2),
      new CodebookItem("6", { cs: "Šestý", en: "Sixth" }, 2),
      new CodebookItem("7", { cs: "Sedmý", en: "Seventh" }, 2),
    ],
  };
}

module.exports = {
  deleteStudent,
  getCodebookItems,
  getStudent,
  getStudents,
  postStudent,
  putStudent,
};
