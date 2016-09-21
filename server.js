const http = require('http');
const _ = require('underscore');
const Tree = require('./Tree.js');

//Create your public tree here
const publicTree = new Tree("1");
publicTree.addChild("2");
publicTree.findNode("2").addChild("H");
publicTree.addChild("3");
publicTree.findNode("3").addChild("e");
publicTree.findNode("3").addChild("l");
publicTree.addChild("4");
publicTree.findNode("4").addChild("l");
publicTree.findNode("4").addChild("o");


// invoked on every request
function requestHandler(request,response){

  let nodeId = request.url.slice(1);

  //on every request check if node id exists
  if(publicTree.contains(nodeId)){
    let resultNode = publicTree.findNode(nodeId);
    console.log(resultNode.children);

    let result = _.map(resultNode.children,function(child){return child.value});

    //Set statusCode, headers and write stringified result to body
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(result));
    response.end();
    return;

  }else{

    //otherwise respond with invalid node
    response.statusCode = 404;
    response.write('invalid node');
    response.end();

  }

}

const server = http.createServer();

server.on('request', requestHandler);


server.listen(1337,() => {console.log('public tree is listening at 1337')});
