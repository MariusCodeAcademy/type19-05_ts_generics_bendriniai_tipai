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

type OurTuple = [string, number];

function getTupleFromVal<Type1, Type2>(x: Type1, y: Type2): [Type1, Type2] {
  console.log(`making tuple from ${x} and ${y}`);
  return [x, y];
}

const t1 = getTupleFromVal('blue', 300);
console.log('t1 ===', t1);
const t2 = getTupleFromVal(50, '300');
console.log('t2 ===', t2);
t2[1].toLowerCase();

// funkcija kuri primima skaiciu arba stringu masyva
// skaiciu masyva padaugina is 2
// string masyva padaro upperCase

function processArr(arr: (string | number)[]): (string | number)[] {
  if (typeof arr[0] === 'string') {
    // const upperStrArr: string[] = arr.map(str => str.)
  }
}
// processArr([1, 2, 3, 'green']); // noretume kad visi masyvo el butu vieno tipo
processArr([1, 2, 3]);
processArr(['red', 'green', 'blue']);
