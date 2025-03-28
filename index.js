let str = "Hii Prepbytes";
let res = str.slice(4);
console.log(res);

console.log("Array");
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

//push
console.log("push");

const arr1 = ["Ruchi", "I", "am" ,"Developer"];
let res1 = arr1.push("And");
console.log(res1);

//arrays slice
console.log("arrays slice");

const arr2 = ["Ruchi", "I","am" ,"Developer"];
let res2 = arr2.slice(1);
console.log(res2);

// Tostring
console.log("tostring");

const arr3 = ["Ruchi", "I","am", "Developer"];
let res3 = arr3.toString(1, 2);
console.log(res3);

//Shift
console.log("shift");

const arr4 = ["Ruchi", "I","am", "Developer","Reshu"];
let res4 = arr4.shift();
console.log(res4);
 console.log(arr4);

 //Map
 console.log("map");
 
 let array = [2,4,5,8,12];
 let result = array.map((y) => y*3);
 console.log(result);
 
//Pop
console.log("pop");

 const array1 = ["Ruchi", "I","am", "Developer","Reshu"];
 let result1 = array1.pop();
 console.log(result1);
 

//Filter
console.log("filter");

 const array2 = ["Ruchi", "I","am", "Developer","Reshu"];
 let result2 = array2.filter( word => word.length > 3);
 console.log(result2);
 
 //length
 console.log("length");
 
 const array3 = ["Ruchi", "I","am", "Developer","Reshu"];
 let result3 = array3.length;
 console.log(result3);

 //find(x =>==2)
 console.log("find");
 
 let array4 = [2,4,5,8,12];
 let result4 = array4.find((x)=>x==8);
 console.log(result4);
 

 //findIndex(x => x == 2)
 console.log("findIndex");
 
 let array5 = [2,4,5,8,12,6,7];
 let result5 = array5.findIndex(x=> x == 12);
 console.log(result5);

 //includes(5)
 let array6 =["Ruchi", "I","am", "Developer","Reshu"];
 let result6 = array6.includes("Developer")
 console.log(result6);