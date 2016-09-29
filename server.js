'use strict'
const http = require('http');
const _ = require('underscore');
const Tree = require('./Tree.js');

//Instantiate your public tree here
//Add nodes to pass integration tests
const publicTree = new Tree("0");
publicTree.addChild("1");
publicTree.addChild("2");
publicTree.addChild("3");

publicTree.children[0].addChild("a");
publicTree.children[1].addChild("p");
publicTree.children[2].addChild("i");

console.log(publicTree.children[0].children[0].value + publicTree.children[1].children[0].value + publicTree.children[2].children[0].value);

console.log(publicTree.children);

let allTogether = [];
// invoked on every request
function requestHandler(request,response){

  let nodeId = request.url.slice(1);

  //on every request check if node id exists
  if(publicTree.contains(nodeId)){

    //If it exists, find it
    let resultNode = publicTree.findNode(nodeId);
    console.log(resultNode.children);

    //Create an array of the child values
    let result = _.map(resultNode.children,function(child){return child.value});
    // returns ["i"]
    allTogether.push(result)
    //Set statusCode, headers and write stringified result to response body
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(result));
    response.end();
    return;

  }else{

    //otherwise respond with invalid node
    response.statusCode = 404;
    response.write('Invalid Node');
    response.end();

  }

}

const server = http.createServer();

server.on('request', requestHandler);


server.listen(process.env.PORT || 8080, function () => {console.log('public tree is listening at 1337')});

//comment to test rebasing
