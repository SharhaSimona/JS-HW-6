//Output even numbers from 2 to 30, except for 14, 18. Use a while.

let a = 2;

while (a <= 31) {
  if (a === 14 || a === 18) {
    a += 2;
    continue;
  }

  if (a % 2 === 0) {
    console.log(a);
  }
  a += 2;
}
