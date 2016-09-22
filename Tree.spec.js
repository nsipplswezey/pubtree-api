const Tree = require('./Tree.js');
const expect = require('chai').expect;

describe("Tree API", function() {

    describe("the constructor function", function(){

      it("will return a new tree, containing the given value",function(){
        const testTree = new Tree("1");

      	const result = testTree.value;
      	const expected = "1";

      	expect(result).to.equal(expected);

      });

      it("will return a new tree, containing an empty children array",function(){

        const testTree = new Tree("1");

        const result = testTree.children;
        const expected = [];

        expect(result).to.equal(expected);


      })

    });

    describe("the .contains() method",function(){

      it("will return true if a node with the specified value exists in the tree",function(){

        const testTree = new Tree("1");

	      const result = testTree.contains("1");
        const expected = true;

        expect(result).to.equal(expected);

      });

      it("will return false if a node with the specified value does not exist in the tree",function(){

        const testTree = new Tree("1");

      	const result = testTree.contains("0");
      	const expected = true;

      	expect(result).to.equal(expected);

      });

    });

    describe("the .addChild method", function(){

      it("will add a child node to the children array of the invoking node", function() {

        const testTree = new Tree("1");

      	testTree.addChild("2");

      	const result = testTree.children[0];
      	const expected = {value:"2",children:[]};

      	expect(result).to.deep.equal(expected);

      });

    });

    describe("the .findNode() method",function(){

      it("will return a node that contains the specific value property if it exists", function() {

        const testTree = new Tree("1");

        const result = testTree.findNode("1");
        const expected = {value:"1",children:[]};

      	expect(result).to.deep.equal(expected);

      });

      it("will return a node, that can have a child added to it", function() {

        const testTree = new Tree("1");

      	testTree.findNode("1").addChild("2")

        const result = testTree.findNode("2");
        const expected = {value:"2",children:[]};

      	expect(result).to.equal(expected);

      });

      describe("", function() {

        it("", function() {});

        it("", function() {});

      });

    });


  describe("", function() {

    it("", function() {});

    it("", function() {});

  });

});
