// Q1 filter out b the greater than 10 [4,12,8,20] ->> [12,20]
const arr = [4,12,8,20].filter(value => value > 10)
// console.log(arr);

// Q2 remove flasy value [0,"Hello",false,5,null] ->>> ["Hello",5]
const filter = [0,"Hello",false,5,null].filter((value) => value)
// console.log(filter);

// Q3 keep only even number [1,2,3,4] -->>> [2,4]
const num = [1,2,3,4].filter(value => value % 2 === 0)
// console.log(num);

// Q4  get only th esting value in array ["hello",42,true,"world"]
const string = ["hello",42,true,"world"].filter(value => value.substring)
// console.log(string);

// Q5 filter name with length 4 ["Tom","Jarry","Spike"] ->> ["Jarry","Spike"]
const arr5 = ["Tom","Jarry","Spike"].filter((value) => value.length >=4)
// console.log(arr5);


//  medium level fliter ---->>>>>

// Q1  filter the student marks >= 40 
const student = [
    {name : 'A',marks : 50},
    {name : 'B',marks : 35}
].filter((value) => {
  return  value.marks >= 40
    
})
// console.log(student);

//Q2 get all user isActive true

const user = [
    {user : "TOM",active : true},
    {user : "Jarry",active : false}
].filter(value => value.active === true)
// console.log(user);

// Q3 filter products with price between 100-500

const products = [
    {p: "Pen",price : 100},
    {p: "Book",price : 700},
].filter((value) => (value.price >= 100) && (value.price <= 500))
// console.log(products);

// Q4 keep ames string with 'S'
const input = ['Sam','Alex','Steve'].filter((value) => value.charAt() === 'S' || value.charAt() === 's')
// console.log(input);

// Q5 from array of numbers filter square

const num1 = [1,2,4,7,9].filter((value) => Number.isInteger(Math.sqrt(value)))
// console.log(num1);







