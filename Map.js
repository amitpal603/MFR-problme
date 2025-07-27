// q1 array convert to square input [1,2,3] O : [1,4,9]
const arr = [1,2,3]
const res = arr.map((value) => {
    return value*value
})
// console.log(res);

// q2  convert array to uppercase input : ["apple","banana"] O : ["APPLE","BANANA"]
const arr1 = ["apple","banana"]
const res1 = arr1.map((value) => (
    value.toUpperCase()
))
// console.log(res1);

//  Q3 add 5 each number [10,20] -> [15,25]
const arr2 = [10,20]
const res2 = arr2.map(value => value+5)
// console.log(res2);

// Q4  Extract the lengths of the string ["dog","elephent"] -> [3,8]
const animal = ['dog','elephant']
const res3 = animal.map((value) => value.length)
// console.log(res3);

// Q5 get first charter all the string ["Sun","Moon"] -> ["S","M"]
const string = ['Sun','Moon']
const res4 = string.map((value) => value.charAt())
// console.log(res4);


//    Medium level ... ->>>>>

// Q1 Extract full name in an array --->>>>
const input = [
    {fname : "John", lname : " Doe"},
    {fname : "Jane",lname : " Smith"}
].map((value) => value.fname +  value.lname)
// console.log(input);

// Q2 Append 'Mr.' ["Adam","Eve"] ->> ["Mr. Adam","Mr.Eve"]
const append = ["Adam","Eve"].map((value) => [`Mr. ${value}`].join())
// console.log(append);

// Q3 create object name with length input ["cat","tiger"] ->>> [{name : "cat",length: 3},{name : "tiger",length : 5}]
const arr3 = ["cat","tiger"].map((value) => {
    let name = value
    let length = value.length
 return   {name,length}
})
// console.log(arr3);

//Q4  Add a new property isAdult based on age input [{name : "Sam" ,age : 15},{name : "Tom",age : 18}] output [{name : "Sam" ,age : 15 , isAdult : falsa},{name : "Tom",age : 18,isAdult : true}]
const arr4 = [
    {name : "Sam",age : 15},
    {name : "Tom",age : 18}
].map((value) => {
    let a
    if(value.age >= 18){
        value.isAdult = true
    }
    else {
        value.isAdult = false
    }
    return value
})
// console.log(arr4);

// Q5 Convert prives from INR to USD  input [100,200,300] ->> [1.2,2.4,3.6]
const currency = [100,200,300].map((value) => value*0.012)
// console.log(currency);











