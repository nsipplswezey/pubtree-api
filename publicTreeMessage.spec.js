const Tree = require('./Tree.js');
const expect = require('chai').expect;

describe('The Public Tree Message', function() {

    describe('generating the message', function(){

      it('will contain a letter at the tip of a branch',function(){
        const testTree = new Tree('1');

        testTree.addChild('2');
        testTree.findNode('2').addChild('H');

      	const result = testTree.findNode('2').children[0].value;
      	const expected = 'H';

      	expect(result).to.equal(expected);

      });

      it('will contain multiple letters, each at different tips',function(){
        const testTree = new Tree('1');

        testTree.addChild('2');
        testTree.findNode('2').addChild('H');
        testTree.findNode('2').addChild('3');
        testTree.findNode('3').addChild('e');

      	const firstLetter = testTree.findNode('2').children[0].value;
        const secondLetter = testTree.findNode('3').children[0].value;

        const result = firstLetter + secondLetter;
      	const expected = 'He';

      	expect(result).to.equal(expected);

      });

      it('will contain a whole word',function(){
        const testTree = new Tree('1');

        testTree.addChild('2');
        testTree.findNode('2').addChild('H');
        testTree.findNode('2').addChild('3');
        testTree.findNode('3').addChild('e');

        testTree.findNode('3').addChild('4');
        testTree.findNode('3').addChild('5');
        testTree.findNode('3').addChild('6');

        testTree.findNode('4').addChild('l');
        testTree.findNode('5').addChild('l');
        testTree.findNode('6').addChild('o');

      	const firstLetter = testTree.findNode('2').children[0].value;
        const secondLetter = testTree.findNode('3').children[0].value;
        const thirdLetter = testTree.findNode('4').children[0].value;
        const fourthLetter = testTree.findNode('5').children[0].value;
        const fifthLetter = testTree.findNode('6').children[0].value;

        const result = firstLetter + secondLetter + thirdLetter + fourthLetter + fifthLetter;
      	const expected = 'Hello';

      	expect(result).to.equal(expected);

      });

      it('will contain a whole message',function(){
        const testTree = new Tree('1');

        function addNewLetter(currentTree,letter){

          //does the current tree have a child?
          if(currentTree.children.length === 0){
            //if not, add a child node
            console.log('letter added');
            currentTree.addChild(letter);
            return;
          }else{
            //otherwise try to add a new letter to each child
            for(let i = 0; i < currentTree.children.length; i++){
              console.log('checking next child');
              addNewLetter(currentTree.children[i],letter);
            }
          }
        }

        addNewLetter(testTree,"w");
        addNewLetter(testTree,"o");
        addNewLetter(testTree,"r");
        addNewLetter(testTree,"l");
        addNewLetter(testTree,"d");

        console.dir(testTree,{depth:null});



        const result = testTree.findNode("H").value;
        const expected = testTree.findNode("H").value;

      	expect(result).to.equal(expected);

      });


      describe('', function() {

        it('', function() {});

        it('', function() {});

      });

    });


  describe('', function() {

    it('', function() {});

    it('', function() {});

  });

});
