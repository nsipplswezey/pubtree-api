'use strict';
const Tree = require('./Tree.js');
const expect = require('chai').expect;

describe("Tree data structure", function() {

    describe("the constructor function", function(){

      it("will return a new tree, containing the given value",function(){
        const testTree = new Tree("1");

      	const result = testTree.value;
      	const expected = "1";

      	expect(result).to.equal(expected);

      });

      it("will return a new tree, containing an empty children array",function(){
        const testTree = new Tree("1");
        console.log("testTree.children:", testTree.children);

        const result = [];
        const expected = [];

        expect(result).to.deep.equal(expected);


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
      	const expected = false;

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

      it("will add child nodes containing individual values that can be combined into a message", function() {

        const testTree = new Tree("1");

        testTree.addChild("H");
        testTree.addChild("e");
        testTree.addChild("y");

        const result = testTree.children[0].value + testTree.children[1].value + testTree.children[2].value;
        const expected = "Hey"
        //console.log(testTree.children[0].value + testTree.children[1].value + testTree.children[2].value);
        expect(result).to.equal(expected);
      });

      it("will have one letter-containing node assigned to one parent node, with all parent nodes sibling-children of single parent", function() {

        const testTree = new Tree("0");

        testTree.addChild("1");
        testTree.addChild("2");
        testTree.addChild("3");

        testTree.children[0].addChild("H");
        testTree.children[1].addChild("e");
        testTree.children[2].addChild("y");

        //console.log(testTree.children[0].children[0].value + testTree.children[1].children[0].value + testTree.children[2].children[0].value);
        const result = testTree.children[0].children[0].value + testTree.children[1].children[0].value + testTree.children[2].children[0].value;
        const expected = "Hey";

        expect(result).to.equal(expected);
      });

    });

    describe("the .findNode() method",function(){

      it("will return a node that contains the specific value property if it exists", function() {

        const testTree = new Tree("1");

        const result = testTree.findNode("1");
        //console.log("result:", result);
        const expected = {value:"1",children:[]};

      	expect(result).to.deep.equal(expected);

      });

      it("will return a node, that can have a child added to it", function() {

        const testTree = new Tree("1");

      	testTree.findNode("1").addChild("2")

        const result = testTree.findNode("2");
        const expected = {value:"2",children:[]};

      	expect(result).to.deep.equal(expected);

      });

      it("will find a node and add a child to it containing a single character. these characters can be combined to spell a message", function() {

      const testTree = new Tree("1");

      const message = ["H","e","y", " ", "N","e","i","g","h","b","o","r"]
      const letterParent = []
      for (let i = 0; i < message.length; i++) {
        letterParent.push(i);
      }
      //console.log(letterParent);
      for (let i = 0; i < message.length; i++) {
        testTree.addChild(letterParent[i]);
      }
      for (let i = 0; i < message.length; i++) {
        testTree.findNode(i).addChild(message[i]);
      }
      const combined = [];
      function combineMessage() {
        for (let i = 0; i < message.length; i++) {
          combined.push(testTree.findNode(i).children[0].value);
        }
      }
      combineMessage();
      //console.log(combined.join(''));
      const result = combined.join('');
      const expected = "Hey Neighbor";

      expect(result).to.equal(expected);

      //testTree.findNode("1").addChild("H");
      //console.log(testTree.findNode("H").value);
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
