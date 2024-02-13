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
//# sourceMappingURL=generics.js.map