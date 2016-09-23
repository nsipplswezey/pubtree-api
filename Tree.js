'use strict';

class Tree {
  constructor(value){
    this.value = value;
    this.children = [];
  }

  addChild(value){
    const child = new Tree(value);
    this.children.push(child);
  }

  contains(target){
    //contains is a recursive function
    //recursion occurs when a function invokes itself

    if (this.value === target){
      return true;
    }

    for (let i = 0; i < this.children.length; i++){
      const child = this.children[i];
      if (child.contains(target) === true){
        return true;
      }
    }
    return false;
  }

  findNode(target){
    console.log("this:", this);
    if (this.value === target){
      return this;
    }

    for(let i = 0; i < this.children.length; i++){
      const child = this.children[i];
      if (child.contains(target)){
        return child.findNode(target);
      }
    }

    return false;

  }

}

module.exports = Tree;
