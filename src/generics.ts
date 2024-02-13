console.log('generics');

// the problem

function printVal(x: number | string): number | string {
  console.log('x ===', x);
  return x;
}

// sk nera skaiciaus tipo
const sk = printVal(50);
// str nera string tipo
const str = printVal('labas');
