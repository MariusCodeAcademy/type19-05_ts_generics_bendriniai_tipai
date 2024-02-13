"use strict";
console.log('generics');
function printVal(x) {
    if (typeof x === 'string') {
        console.log('x ===', x.toUpperCase());
    }
    else {
        console.log('x ===', x);
    }
    return x;
}
const sk = printVal(50);
sk.toFixed(2);
const str = printVal('labas');
str.toLowerCase();
const strArr = printVal(['blue', 'green', 'red']);
console.log('strArr ===', strArr);
function getTupleFromVal(x, y) {
    console.log(`making tuple from ${x} and ${y}`);
    return [x, y];
}
const t1 = getTupleFromVal('blue', 300);
console.log('t1 ===', t1);
const t2 = getTupleFromVal(50, '300');
console.log('t2 ===', t2);
t2[1].toLowerCase();
function processArr(arr) {
    if (typeof arr[0] === 'string') {
    }
}
processArr([1, 2, 3]);
processArr(['red', 'green', 'blue']);
//# sourceMappingURL=generics.js.map