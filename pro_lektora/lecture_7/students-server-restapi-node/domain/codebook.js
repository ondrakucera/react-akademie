/**
 * Creates a new codebook item.
 *
 * @param {string} code the item's code
 * @param {{[key: string]: string}} names the item's localized names in the form of (locale, name) pairs
 * @param {number} order the item's order in the codebook
 * @constructor
 */
const CodebookItem = function (code, names, order) {
	this.code = code;
	this.names = names;
	this.order = order;
};

module.exports = CodebookItem;
