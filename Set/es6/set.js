'use strict';

class Set {
  constructor(){
    this.elements = [];
  }

  add(element) {
      if (this.elements.indexOf(element) === -1) {
          this.elements.push(element);
      }
  };

  remove(element){
      var index = this.elements.indexOf(element);
      if (index !== -1) {
          this.elements.splice(index, 1);
      }
  };

  iterator() {
      return iterator(this.elements).export();
  };

  isEmpty() {
      return this.elements.length > 0 ? false : true;
  };

  size(){
      return this.elements.length;
  };



  contains(element) {
      return this.elements.indexOf(element) !== -1 ? true : false;
  };


  union(s) {
      var resultSet = s.clone();
      for (var i = 0; i < this.elements.length; i++) {
          resultSet.add(this.elements[i]);
      }
      return resultSet;
  };

  intersect(s) {
      var resultSet = new Set();
      for (var i = 0; i < this.elements.length; i++) {
          if (s.contains(this.elements[i])) {
              resultSet.add(this.elements[i]);
          }
      }
      return resultSet;
  };


  difference(s) {
      var resultSet = new Set();
      for (var i = 0; i < this.elements.length; i++) {
          if (!s.contains(this.elements[i])) {
              resultSet.add(this.elements[i]);
          }
      }
      return resultSet;
  };

  isSubset(s) {
      if (this.elements.length <= s.size()) {
          for (var i = 0; i < this.elements.length; i++) {
              if (!s.contains(this.elements[i])) {
                  return false;
              }
          }
          return true;
      }
      return false;
  };

  clone() {
      var s = new Set();
      for (var i = 0; i < this.elements.length; i++) {
          s.add(this.elements[i]);
      }
      return s;
  };
  
}

module.exports = Set;
