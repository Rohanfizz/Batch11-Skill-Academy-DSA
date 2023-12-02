// let s: string = "abcd";  //double quotes
// let s: string = 'abcd'; //single quotes
var str = "Rohan say's, \"Hey Krishna\"" + "abcd";
var s = "abcd"; //single quotes
s = s.split('');
s[2] = 'x';
s = s.join('');
console.log(s);
