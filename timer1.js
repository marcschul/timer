const input = process.argv

let delay = 0;
for (let i = 2; i < input.length; i++) {
  let nodeInput = Number(input[i]);
  if (nodeInput > 0 && typeof nodeInput === 'number') {
    delay = nodeInput * 1000;
    setTimeout(() => process.stdout.write('.\n'), delay);
  }
};