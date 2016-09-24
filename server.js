'use strict'
const http = require('http');
const _ = require('underscore');
const Tree = require('./Tree.js');

//Instantiate your public tree here
//Add nodes to pass integration tests



// invoked on every request
var publicTree = new Tree();
function requestHandler(request,response){

  let nodeId = request.url.slice(1);

  //on every request check if node id exists
  if(publicTree.contains(nodeId)){

    //If it exists, find it
    let resultNode = publicTree.findNode(nodeId);
    console.log(resultNode.children);

    //Create an array of the child values
    let result = _.map(resultNode.children,function(child){return child.value});

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


server.listen(1337,() => {console.log('public tree is listening at 1337')});
