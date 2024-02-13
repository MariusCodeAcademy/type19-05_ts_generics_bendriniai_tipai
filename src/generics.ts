console.log('generics');

// the problem

// function printVal(x: number | string): number | string {
//   console.log('x ===', x);
//   return x;
// }
function printVal<T>(x: T): T {
  if (typeof x === 'string') {
    console.log('x ===', x.toUpperCase());
  } else {
    console.log('x ===', x);
  }
  return x;
}

// yra skaiciaus tipo
const sk = printVal<number>(50);
sk.toFixed(2);
// yra string tipo
const str = printVal<string>('labas');
str.toLowerCase();

const strArr = printVal<string[]>(['blue', 'green', 'red']);
console.log('strArr ===', strArr);
