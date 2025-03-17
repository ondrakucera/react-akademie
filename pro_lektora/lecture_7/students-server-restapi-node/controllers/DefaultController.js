/**
 * The DefaultController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/DefaultService');
const deleteStudent = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteStudent);
};

const getCodebookItems = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCodebookItems);
};

const getStudent = async (request, response) => {
  await Controller.handleRequest(request, response, service.getStudent);
};

const getStudents = async (request, response) => {
  await Controller.handleRequest(request, response, service.getStudents);
};

const postStudent = async (request, response) => {
  await Controller.handleRequest(request, response, service.postStudent);
};

const putStudent = async (request, response) => {
  await Controller.handleRequest(request, response, service.putStudent);
};


module.exports = {
  deleteStudent,
  getCodebookItems,
  getStudent,
  getStudents,
  postStudent,
  putStudent,
};
