//  Q1 sun all the number of input [1,2,3] 6
const num = [1,2,3].reduce((acuu,curr) => acuu + curr ,0)
// console.log(num);

// Q2 multiple all number 
const multi = [2,3,4].reduce((acc,curr) => acc * curr )
// console.log(multi);

// Q3  find th e max value
const maxValue = [3,7,1].reduce((acc,curr) => acc > curr ? acc : curr)
// console.log(maxValue);

// Q4 
const str = ['a','b','c'].reduce((acc,curr)  => acc + curr ,'')
// console.log(str);

// Q5 count many time true
const t = [true,false,true].reduce((ac,curr) => {
   return ac + (curr === true ? 1 : 0)
},0)
// console.log(t);

// medium level --->>>>

// Q1 count frequecny of elemeent
const input = ['a','b','a','c'].reduce((acc,curr) => {
   acc[curr] = (acc[curr] || 0) + 1
   return acc
},{})
// console.log(input);

// Q2  calculate averge age from user list

const input1 = [
   {name : 'A',age : 20},
   {name : 'B',age : 30}
].reduce((acc,curr) => {
    return  acc + (curr.age/2)
},0)
// console.log(input1);

// Q3 toatl income by deportment
const income = [
   {dept: "IT",salary : 1000},
   {dept : 'HR', salary : 800},
   {dept : 'IT',salary : 1200}
].reduce((accu,curr) => {
       accu[curr.dept] =  (accu[curr.dept] || 0) + curr.salary
       return accu
},{})
// console.log(income);

// Q4 
const city = [
   {city : "Delhi"},
   {city : "Mumbai"},
   {city : "Delhi"},
].reduce((acuu,curr) => {
   acuu[curr.city] = (acuu[curr.city] || 0) +1
   return acuu
},{})
// console.log(city);

//Q5

const user = [
   {name : 'A',age : 19},
   {name : 'B',age : 17},
   {name : ' C',age : 20},
].filter((value) => value.age > 18).map((value) => value.name).reduce((accu,curr) => accu + curr,'')
// console.log(user);







