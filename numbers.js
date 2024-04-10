//Output even numbers from 2 to 30, except for 14, 18. Use a for loop.
for (let i = 2; i < 31; i += 2) {
  if (i === 14 || i === 18) {
    continue;
  }
  console.log(i);
}
