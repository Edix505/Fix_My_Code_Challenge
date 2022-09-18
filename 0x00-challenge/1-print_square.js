#!/usr/bin/node
/*
    Print a square 
    
    The size of the square must argument 
    the program.
*/


if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1)
}

size = parseInt(process.argv[2], 10)

for (let a = 0 ; a < size ; a ++) {
    for (let b = 0 ; b < size ; b ++) {
        process.stdout.write("#");
    }
    process.stdout.write("\n");
}
