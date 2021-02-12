'use strict';

const Person = function(first_name,birthyear)
{
    // PROPERTIES
    this.first_name =first_name;
    this.birthyear = birthyear;
}
//4 steps happens when youuse new
//1. it creates an New empty object {}
//2. a function is called that sets the this keyword to the empty object{} and then we assign the this keywords the values. 
//3. the  {} object is then linked to the prototype
//4. the function automatically returns the {};

const johanas= new Person('johanas',1998);
console.log(johanas);

const hanna = new Person('hanna',1998);
console.log(hanna);

const pj= new Person('pj',1998);
console.log(pj);

console.log(pj instanceof Person);

//PROTPTYPES 
// the objects that are created with the constructor function have access to the methods that are declared on the prototype of that cunstructor function. In java it was the class can access the object instances have access to all the methods o the class. In JavaScript it is the the object that is created ussing the constructor function has access to the methods that are created in the prototype of that CONSTUCTOR FUNCTION.
 
Person.prototype.calcAge = function()
{
    console.log(2037-this.birthyear);
}

johanas.calcAge();


/* --------------------------------- CLASSES -------------------------------- */
//WE ARE GOING TO BE USEING CLASSES NOW. CLASSES ARE BASICALLY ANOTHER TYPE OF SPECIAL FUNCTION.
// console.log("APERSONCL")
// class PersonCl {

//     constructor(fName,lName){
//         this.fName = this.fName;
//         this.lName = lName;
//     }

//     greet()
//     {
//         console.log(`Welcome Mr./Ms. ${this.fName}.`);
//     }
//     get fName()
//     {
//         console.log(this.fName);
//     }

//     set fName(aName)
//     {
//         if(aName.includes(' '))
//         {
//             console.log(aName);
//             this.fName = aName;
//             console.log(`${this.fName}`)
//         }
//         else
//         {
//             console.log("the full namme is not real");
//         }
//     }

// }

// const aPersonCl  = new PersonCl("Perrin","Joseph");

