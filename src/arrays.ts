const numbers: number[] = [1, 2, 3];

const array = [1, 2, 3]; //the compiler can still guess that it is a numbers array

const emptyArray = []; //here it guesses it is an any array which we should avoid. wRONG

const newArray : number[] = []; //correct
newArray[0] = 1;
newArray[1] = 2;
newArray[2] = 3;

newArray.forEach( n => n.toString)