//1️⃣ Variables (let vs const vs var)
let name ='Rubel'; //can be reassigned
name ='Rubel Ahmed';

const age=30; //cannot be reassigned
//age=31; //Error

var city='New York'; //function-scoped, can be reassigned
city='Los Angeles';
console.log(name, age, city);
//--------------------------------------------------------------------
//🔹 2️⃣ Arrays
const url=['url1','url2','url3', 'url4'];
console.log(url[0]); //Accessing first element
url.push('url4'); //Adding new element
console.log(url.length); //Array length
console.log(url); //Printing entire array
// url.pop();
console.log(url); //After removing last element

url.splice(0,3); //Removing second element
console.log(url); //After removing last element


//remove items using filter
const removeitem=['url1','url2','url4'];
const updated=url.filter(item=>!removeitem.includes(item));
console.log(updated); //After removing specific elements
//--------------------------------------------------------------------
console.log('---------Loops--------------------------');

//for loop
const numbers=[1,2,3,4,5];
for (let i=0; i<numbers.length; i++){
    console.log('For Loop:', numbers[i]);
}

//for...of loop
for (const num of numbers){
    console.log('For...of Loop:', num);
}

//forEach loop
numbers.forEach(num=>{
    console.log('forEach Loop:', num);
});

console.log('---------Functions--------------------------');
//🔹 3️⃣ Functions
//Function Declaration
function add(a,b){
    return a+b;
}
console.log('Function Declaration:', add(2,3));

//Function Expression
const subtract=function(a,b){
    return a-b;
};
console.log('Function Expression:', subtract(5,2));

//Arrow Function
const multiply=(a,b)=> a*b;
console.log('Arrow Function:', multiply(3,4));

//Arrow Function with multiple lines
const divide=(a,b)=>{
    if (b===0){
        return 'Cannot divide by zero';
    }
    return a/b;
};
console.log('Arrow Function with multiple lines:', divide(10,2));
console.log('Arrow Function with multiple lines:', divide(10,0));

//Automation Example connection
const pages=['home','about','contact'];
for (let page of pages){
    // console.log(`Navigating to ${page} page`);
    if(page==='home'){
        console.log('Home page loaded');
    }  
    break; 
    if(page==='a1bout'){
        console.log('About page loaded');
    }   
    if(page==='con1tact'){
        console.log('Contact page loaded');
    }   
    else{
        console.log('Page not found');
    }



}
//Task 1 — Print all values of array
const valus=[300, 150, 820, 120, 500];
for (let item of valus) {
    console.log('Array values:', item);


}

//Task 2 — Find highest number in an array
const expenses=[300, 150, 820, 120, 500];

let highest=expenses[0];
for(let value of expenses){
    if (value>highest){
        highest=value;
        console.log ('Highest number in array:', highest);
    }
}

//Task3- Find Lowest number
let lowest=expenses[0];
for (let value of expenses){
    if(value<lowest){
        lowest=value;
        console.log('Lowest number in array:', lowest);     

    }}



