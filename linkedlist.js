function Node (value, next) {

	"use strict";

	this.next = next || null;
	this.value = value;

}

module.exports = Node;