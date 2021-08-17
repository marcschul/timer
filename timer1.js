const input = process.argv.slice(2);

for (let num of input) {
  let seconds = Number(num);
  if (seconds > 0 && typeof seconds === 'number') {
    let delay = seconds * 1000;
    setTimeout(() => process.stdout.write('.\n'), delay);
  }
};