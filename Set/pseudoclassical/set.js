'use strict';

var Set = function() {
  this.elements = [];
}

Set.prototype.add = function(element) {
    if (this.elements.indexOf(element) === -1) {
        this.elements.push(element);
    }
};

Set.prototype.remove = function(element){
    var index = this.elements.indexOf(element);
    if (index !== -1) {
        this.elements.splice(index, 1);
    }
};

Set.prototype.iterator = function() {
    return iterator(this.elements).export();
};

Set.prototype.isEmpty =function() {
    return this.elements.length > 0 ? false : true;
};

Set.prototype.size = function(){
    return this.elements.length;
};

Set.prototype.contains = function(element) {
    return this.elements.indexOf(element) !== -1 ? true : false;
};

Set.prototype.union = function(s) {
    var resultSet = s.clone();
    for (var i = 0; i < this.elements.length; i++) {
        resultSet.add(this.elements[i]);
    }
    return resultSet;
};

Set.prototype.intersect = function(s) {
    var resultSet = new Set();
    for (var i = 0; i < this.elements.length; i++) {
        if (s.contains(this.elements[i])) {
            resultSet.add(this.elements[i]);
        }
    }
    return resultSet;
};

Set.prototype.difference = function(s) {
    var resultSet = new Set();
    for (var i = 0; i < this.elements.length; i++) {
        if (!s.contains(this.elements[i])) {
            resultSet.add(this.elements[i]);
        }
    }
    return resultSet;
};

Set.prototype.isSubset = function(s) {
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

Set.prototype.clone = function() {
    var s = new Set();
    for (var i = 0; i < this.elements.length; i++) {
        s.add(this.elements[i]);
    }
    return s;
};


module.exports = Set;
