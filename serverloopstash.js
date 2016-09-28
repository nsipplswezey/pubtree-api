const slowReveal = [];
const publicTree = new Tree("1");

const message = ["H","e","l","l","o"];
const letterParent = [];

for (var i = 0; i < message.length; i++) {
  letterParent.push(i);
}
for (var i = 0; i < message.length; i++) {
  publicTree.addChild(letterParent[i]);
}
for (var i = 0; i < message.length; i++) {
  publicTree.findNode(i).addChild(message[i]);
}
console.log(publicTree.findNode(3).children)
