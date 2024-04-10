let row = '';
let l = 8;

for (let i = 0; i < l; i++) {
  row += ' '.repeat(l - i) + '*' + '*'.repeat(i * 2) + `\n`;
}
console.log(row);
