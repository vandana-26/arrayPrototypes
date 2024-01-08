# arrayPrototypes

Call, Apply, Bind

High Order functions -> A function which takes another function as an argument or returns function from it.

1. Array.prototype.filter creates a shallow copy of array populated with the results of calling a provided function on every element in the calling array.
Examples:
[1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
[1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]