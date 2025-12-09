let start = +prompt("Enter the start number:");
let end = +prompt("Enter the end number:");
function oddNumbersBetween(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            document.writeln(i);
        }
    }
}  
oddNumbersBetween(start, end);

