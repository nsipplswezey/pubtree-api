'use strict';

var Set = function() {

    var setInstance = {}
    var elements = [];

    setInstance.add = function(element) {
        if (elements.indexOf(element) === -1) {
            elements.push(element);
        }
    };

    setInstance.remove = function(element){
        var index = elements.indexOf(element);
        if (index !== -1) {
            elements.splice(index, 1);
        }
    };

    setInstance.iterator = function() {
        return iterator(elements).export();
    };

    setInstance.isEmpty =function() {
        return elements.length > 0 ? false : true;
    };

    setInstance.size = function(){
        return elements.length;
    };

    setInstance.contains = function(element) {
        return elements.indexOf(element) !== -1 ? true : false;
    };

    setInstance.union = function(s) {
        var resultSet = s.clone();
        for (var i = 0; i < elements.length; i++) {
            resultSet.add(elements[i]);
        }
        return resultSet;
    };

    setInstance.intersect = function(s) {
        var resultSet = Set();
        for (var i = 0; i < elements.length; i++) {
            if (s.contains(elements[i])) {
                resultSet.add(elements[i]);
            }
        }
        return resultSet;
    };

    setInstance.difference = function(s) {
        var resultSet = Set();
        for (var i = 0; i < elements.length; i++) {
            if (!s.contains(elements[i])) {
                resultSet.add(elements[i]);
            }
        }
        return resultSet;
    };

    setInstance.isSubset = function(s) {
        if (elements.length <= s.size()) {
            for (var i = 0; i < elements.length; i++) {
                if (!s.contains(elements[i])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };

    setInstance.clone = function() {
        var s = Set();
        for (var i = 0; i < elements.length; i++) {
            s.add(elements[i]);
        }
        return s;
    };

    return setInstance;
};

module.exports = Set;
