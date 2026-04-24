let sum = 0;  // stores value
for (let i = 2; i < process.argv.length; i++) {  // iterates through array stating at index 2 (Note: index 0 = node, index 1 = file path)
    sum += Number(process.argv[i]);  // converts string to number then adds to sum
}
console.log(sum)  // prints out sum