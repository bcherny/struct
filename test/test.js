
var LinkedListNode = require('../linkedlist');

module.exports['linked list'] = function (test) {

	"use strict";

	var a = new LinkedListNode('a');
	var b = new LinkedListNode('b');
	var c = new LinkedListNode('c');

	a.next = b;
	b.next = c;

	test.equal(a.value, 'a');
	test.equal(b.value, 'b');
	test.equal(c.value, 'c');
	test.deepEqual(a.next, b);
	test.deepEqual(b.next, c);
	test.done();

};