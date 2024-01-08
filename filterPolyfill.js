Array.prototype.myFilter = function(callbackFun, thisArg) {
    let res = [];
    for(let i = 0; i < this.length; i++){
        let val = this[i];
        if(callbackFun.call(thisArg, val, i, this))
            res.push(val);
    }
    return res;
}