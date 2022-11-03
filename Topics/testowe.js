console.log("".charAt(0));
console.log(" ".lastIndexOf());
console.log("why where what".indexOf("wh", 2));
console.log("why where what".includes("wh", 10));
console.log("".includes(" ", -1));

//let mystring = 'Hyperskill';
//console.log(mystring.charAt(10), "+", mystring[10]);

let mystring = 'HelLO, woRlD!';
let result;
result = mystring.indexOf('o');
console.log(result);


let string = "104:45-69:90";
let newStr = string.replace(":", "-");
console.log(newStr);


let text = "Webstorm PyCharm";
let textSlice = text.slice(-3, -1);
console.log(textSlice);