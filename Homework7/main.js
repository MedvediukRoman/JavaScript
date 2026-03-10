Array.prototype.ForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
const number=[10,11,12,13,14,15]
number.ForEach((element, i) => {
    console.log(i, element);
});




Array.prototype.Filter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
const arr = [0, 5, 10, 15, 20];
const filtered = arr.Filter(element => element >= 10);
console.log(filtered);