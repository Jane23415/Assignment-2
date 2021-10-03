// FOR EACH //
Array.prototype.myEach = function() {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }
};

// MAP //
Array.prototype.myMap = function() {
    const new_arr = [];

    for (let i = 0; i < this.length; i++) {
        var temp = callback(this[i], i, this);
        new_arr[i] = temp;
    }
    return new_arr;
};

// FILTER //
Array.prototype.myFilter = function() {
    const new_arr = [];

    for (let i = 0; i < this.length; i++) {
        var temp = callback(this[i], i, this);
        new_arr[i] = temp;
    }
    return new_arr;
};

// SOME //
Array.prototype.mySome = function() {
    for (let i = 0; i < this.length; i++) {
        var temp = callback(this[i], i, this)
        if (temp === true) {
            break;
        }
    }
    return temp;
};

// EVERY //
Array.prototype.myEvery = function() {
    for (let i = 0; i < this.length; i++) {
        var temp = callback(this[i], i, this)
        if (temp === false) {
            break;
        }
    }
    return temp;
};

// REDUCE //
Array.prototype.myReduce = function() {
    var temp = 0;

    if (start != undefined) {
        sum = start;
    }

    else {
        sum = this[0];
        temp++;
    }

    for (let i = temp; i < this.length; i++) {
        sum = callback(sum, this[i], i, this);
    }
    
    return sum;
};

// INCLUDES //
Array.prototype.myIncludes = function() {
    let length = this.length;
    var temp = false;

    if ((index === undefined) || (index > 0 && index < length)) {
        for (let i = 0; i < length; i++) {
            if (this[i] == element) {
                temp = true;
                break;
            }
        }
    }
    
    else if (index < 0) {
        var new_index = index + length;
        if (new_index > 0 && new_index < length) {
            for (let i = 0; i < length; i++) {
                if (this[i] == element) {
                    temp = true;
                    break;
                }
            }
        }
    }

    return temp;
};

// INDEXOF //
Array.prototype.myIndexOf = function() {
    let length = this.length;
    var temp = -1;
    let begin = 0;
   
    if(start === undefined) {
        begin = 0;
        for (let i = begin; i < length; i++) {
            if (this[i] == element) {
                temp = i;
                break;
            }
        }
    }
    else if (start < 0) {
        begin = length + start;
        for (let i = begin; i < length; i++) {
            if (this[i] == element) {
                temp = i;
                break;
            }
        }
    }
    else {
        begin = start;
        for (let i = begin; i < length; i++) {
            if (this[i] == element) {
                temp = i;
                break;
            }
        }
    }

    return temp;
};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};