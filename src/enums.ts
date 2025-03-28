// const small = 1;
// const medium = 2;
// const large = 3;

//Pascal notations
const enum Size {Small = 1, Medium, Large} //without adding values, emun atomatically sets small as 0 and medium as 1 etc.
                                    // if we make small = 1, medium will be 2 and so on
                                    //if we make small to be a string, we have to maually set values for each members.
let mySize : Size = Size.Medium;
console.log(mySize);
