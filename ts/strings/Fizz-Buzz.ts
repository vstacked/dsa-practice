// function fizzBuzz(n: number): string[] {
//   let res: string[] = [];
//   for (let i = 1; i <= n; i++) {
//     let val = "";
//     if (i % 3 === 0 && i % 5 === 0) {
//       val = "FizzBuzz";
//     } else if (i % 3 === 0) {
//       val = "Fizz";
//     } else if (i % 5 === 0) {
//       val = "Buzz";
//     } else {
//       val = `${i}`;
//     }
//     res = [...res, val];
//   }
//   return res;
// }

function fizzBuzz(n: number): string[] {
  let res: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push("FizzBuzz");
    } else if (i % 3 === 0) {
      res.push("Fizz");
    } else if (i % 5 === 0) {
      res.push("Buzz");
    } else {
      res.push(`${i}`);
    }
  }
  return res;
}
