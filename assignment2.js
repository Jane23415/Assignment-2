// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }
};

// MAP //
Array.prototype.myMap = function(callback) {
    const new_arr = [];

    for (let i = 0; i < this.length; i++) {
        var temp = callback(this[i], i, this);
        new_arr[i] = temp;
    }
    return new_arr;
};

// FILTER //
Array.prototype.myFilter = function(callback) {
    const new_arr = [];

    for (let i = 0; i < this.length; i++) {
        var temp = callback(this[i], i, this);
        new_arr[i] = temp;
    }
    return new_arr;
};

// SOME //
Array.prototype.mySome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        var temp = callback(this[i], i, this)
        if (temp === true) {
            break;
        }
    }
    return temp;
};

// EVERY //
Array.prototype.myEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
        var temp = callback(this[i], i, this)
        if (temp === false) {
            break;
        }
    }
    return temp;
};

// REDUCE //
Array.prototype.myReduce = function(callback, start) {
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
Array.prototype.myIncludes = function(element, index) {
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
Array.prototype.myIndexOf = function(element, start) {
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
Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length = this.length;

    for (let i = length; i < length + args.length; i++) {
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(element, start) {
    let length = this.length;
    var temp = -1;
    
    if (start === undefined) {
        for (let i = length - 1; i > -1; i--) {
            if (this[i] == element) {
                temp = i;
                break;
            }
        }
    }

    else if (start < 0) {
        var new_start = start + length;
        for (let i = new_start; i > -1; i--) {
            if (this[i] == element) {
                temp = i;
                break;
            }
        }
    }

    else {
        for (let i = start; i > -1; i--) {
            if (this[i] == element) {
                temp = i;
                break;
            }
        }
    }
    
    return temp;
};

// KEYS //
Object.grabKeys = function(obj) {
    const new_arr = [];

    for (key in obj) {
        new_arr.push(key);
    }

    return new_arr;
};

// VALUES //
Object.grabValues = function(obj) {
    const new_arr = [];

    for (key in obj) {
        new_arr.push(obj[key])
    }

    return new_arr
};