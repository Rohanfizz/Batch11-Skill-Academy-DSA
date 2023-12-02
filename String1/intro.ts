// let s: string = "abcd";  //double quotes
// let s: string = 'abcd'; //single quotes
let str = `Rohan say's, "Hey Krishna"` + "abcd"

let s: any = `abcd`; //single quotes

s = s.split('')//Convert string to array
s[2] = 'x'
s = s.join('')//Convert back to string

console.log(s);




