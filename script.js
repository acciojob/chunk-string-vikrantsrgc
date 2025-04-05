function stringChop(str, chunkLength) {
  // Handle null or invalid input
  if (str === null || typeof str !== 'string' || chunkLength <= 0) {
    return [];
  }

  const result = [];

  for (let i = 0; i < str.length; i += chunkLength) {
    result.push(str.slice(i, i + chunkLength));
  }

  return result;
}


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
