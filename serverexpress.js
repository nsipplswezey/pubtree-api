'use strict';
const http = require('http');
const _ = require('underscore');
const Tree = require('./Tree.js');
const express = require('express');

const app = express();

const publicTree = new Tree("0");
publicTree.addChild("1");
publicTree.addChild("2");
publicTree.addChild("3");

publicTree.children[0].addChild("a");
publicTree.children[1].addChild("p");
publicTree.children[2].addChild("i");

console.log(publicTree.children[0].children[0].value + publicTree.children[1].children[0].value + publicTree.children[2].children[0].value);

let allTogether = [];

app.get(['/1','/2','/3'], function (req, res) {
  let nodeId = req.url.slice(1);

  //on every request check if node id exists
  if(publicTree.contains(nodeId)){

    //If it exists, find it
    let resultNode = publicTree.findNode(nodeId);
    console.log(resultNode.children);

    //Create an array of the child values
    let result = _.map(resultNode.children,function(child){return child.value});
    // returns ["i"]
    allTogether.push(result)
  res.status(200).send(allTogether);
}
});


// Start the server
var server = app.listen(process.env.PORT || '8080', function () {
  console.log('App listening on port %s', server.address().port);
  console.log('Press Ctrl+C to quit.');
});
