 'use strict';
 // ✅ Som basic javaScript fundamentals
{
// let massMark = prompt("Enter Mark's weight:  ");
// let hightMark = prompt("Enter Mark's hight:  ");
// let markBmi = massMark/(hightMark*hightMark);

// let massJohn = prompt("Enter John's weight:  ");
// let hightJohn = prompt("Enter John's hight:  ");
// let johnBmi = massJohn/(hightJohn*hightJohn);

// let markHigherBMI = false

// markBmi> johnBmi? markHigherBMI = true: markHigherBMI = false;
// console.log("Marks BMI : " +markBmi);
// console.log("Johns BMI : " +johnBmi);
// console.log(markHigherBMI);
// const template = `John's BMI is ${johnBmi}`;
// console.log(template);

//let bill = 275;
// let bill = 40;
// // let bill = 430;
// let tip = 0;

// bill >50 && bill<300? tip = bill * (15/100): tip = bill * (20/100);
// console.log(`The bill was $${bill}\n the tip was $${tip}\n the total value was $${bill + tip}`);

//_______________________________________________________
// const avgCalculator = (score1,score2,score3) => (score1+score2+score3)/3;
// function checkwinner(team1,team2)
// {
//     if(team1>=(team2*2))
//     {
//         console.log(`Dolphins win! ${team1} vs. ${team2}`);
//     }
//     else if(team2>= (team1*2))
//     {
//         console.log(`Koalas win! ${team2} vs. ${team1}`);

//     }
//     else
//     {
//         console.log(`No Team Wins!`);

//     }
// }

// const dolAvg = avgCalculator(44,23,71);
// const kolAvg = avgCalculator(65,54,49);

// checkwinner(dolAvg,kolAvg);
// checkwinner(576,111);


//_______________________________________________________
// let tips = [];
// let bills = [125,555,44];
// let totals =[];

// for(let x = 0; x<bills.length; x++)
// {
//     const tip = callTip(bills[x]);
//     tips.push(tip);
//     totals[x] = tips[x]+bills[x];
// }

// function callTip(billValue)
// {
//     if(billValue >50 && billValue <=300)
//     {
//         return billValue *(15/100);
//     }
//     else
//     {
//         return billValue *(20/100);
//     }
// }

// printBill(tips,bills,totals);

// function printBill(tips, bills, totals)
// {   
//         console.log(`The tips are ${tips.join(", ")}
// the bills are ${bills.join(" ")}
// the totals are ${totals.join(', ')}
//         `);
// }

//_______________________________________________

// let mark = 
// {
//     fullName: "Mark",
//     weight: 78,
//     height: 1.69,
//     calBMI: function()
//     {
//         this.bmi = this.weight/(this.height * this.height);
//         return this.bmi;
//     }
// };

// let john = 
// {
//     fullName: "John",
//     weight: 92,
//     height: 1.95,
//     calBMI: function()
//     {
//         this.bmi = this.weight/(this.height * this.height);
//         return this.bmi;
//     }
// };

// console.log(`${mark.calBMI() > john.calBMI()?  mark.fullName+"'s BMI " + "("+mark.calBMI()+")"+ "Is higher than "+ john.fullName+"'s BMI " + "("+john.calBMI()+")!": john.fullName+"'s BMI " + "("+john.calBMI()+")"+ "Is higher than "+ mark.fullName+"'s BMI " + "("+mark.calBMI()+")!" }`);


//_______________________________________________

// let bills = [22,295,176,440,37,105,10,1100,86,52];
// let tips = [];
// let totals = [];


// for(let x = 0; x<bills.length; x++)
// {
//     const tip = callTip(bills[x]);
//     tips.push(tip);
//     totals[x] = tips[x]+bills[x];
// }

// function callTip(billValue)
// {
//     if(billValue >50 && billValue <=300)
//     {
//         return billValue *(15/100);
//     }
//     else
//     {
//         return billValue *(20/100);
//     }
// }

// function calcAverage(arr)
// {
//     let total = 0;
//     for(let x = 0; x<arr.length; x++)
//     {
//         total += arr[x];
//     }
//     let avg = total/arr.length;
//     console.log(avg);
// }
// console.log(bills,tips,totals);
// calcAverage(totals);
//_______________________________________________
}
//  ✅ some hoisting tests and the this keyword tests
{
    // // x=30;
    // // console.log(x);

    // // var x = 50;
    // // //var will show undefined if it is called before being initialized or declared.
    
    // // function something(){
    // //     let x = 0;
    // //     console.log(this);
        

    // // }
    
    // // something();
    // // const aTask = (a,b) => console.log(this);
    // // aTask(3,4);

    // //regular functions give undefined as its this. because it is in strick mode. If it is not in strict that it will give the window object.
    // const calAge = function(birthyear)
    // {   
    //     console.log(2037 - birthyear);
    //     console.log(this);
    //     //REMEMBER ARROW FUNCTIONS TAKE THE THIS OF THE PARENT FUNCTION OR ITS ENVIRONMENTs THIS.
    //     const calAnAge = birthyear => 
    //         {
    //             console.log(2037-birthyear);
    //             console.log(this);
    //         }
    //     calAnAge(birthyear);
    // }
    // calAge(1991);
    // calAnAge(1998);
}

//  ✅ This keyword in a method. When we have a method call the this keyword, we will have the object that is calling the method or the owner of the method. So this will be the object properties and the values.
{ 
    // const jonas = {
    //     year: 1991,
    //     calcAge: function()
    //     {
    //         console.log(this);
    //         console.log(2037 - this.year);
    //     }
    // };

    // jonas.calcAge();
    // jonas.year= 1999;
    // jonas.calcAge();

}

//  ✅ destructuring 
{
    // const restaurant = 
    // {
    //     name: 'el clasicano',
    //     menu: ['pizza','pasta','Drums','alfredo and meatball']
    // }   
    // const [a,b,c,d] = ["Asdfa","asdfa","dfhr","sdfhetg"];
    // console.log(a,b,c,d);
}

//  ✅ coding test for rest operation and 
{

    // const game = {
    //     team1: 'Bayern Munich',
    //     team2: 'Borrussia Dortmund',
    //     players: [
    //       [
    //         'Neuer',
    //         'Pavard',
    //         'Martinez',
    //         'Alaba',
    //         'Davies',
    //         'Kimmich',
    //         'Goretzka',
    //         'Coman',
    //         'Muller',
    //         'Gnarby',
    //         'Lewandowski',
    //       ],
    //       [
    //         'Burki',
    //         'Schulz',
    //         'Hummels',
    //         'Akanji',
    //         'Hakimi',
    //         'Weigl',
    //         'Witsel',
    //         'Hazard',
    //         'Brandt',
    //         'Sancho',
    //         'Gotze',
    //       ],
    //     ],
    //     score: '4:0',
    //     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    //     date: 'Nov 9th, 2037',
    //     odds: {
    //       team1: 1.33,
    //       x: 3.25,
    //       team2: 6.5,
    //     },
    //   };
    
      

    // const a = [1,2,3,4];
    // //deconstructing an array into different variables.
    // let [t,c,b,g]= a;
    // console.log(t,c,b,g);
      
    // const [players1,players2] = game.players;
    // const [gk,...fieldplayers] = players1;

    // //all players
    // const allPlayers = [...game.players[0],...game.players[1]];
    // console.log(allPlayers);
    // const players1Final = [...players1,"Thiago","Coutinho","Perisic"];


    //5
    //asdf
    // function printGoals(...playerNames)
    // {
    //     let x = arguments;
    //     console.log(x);
    // }
    
    // printGoals(3,4,2,1,4,5,6,7,3,3);

    // const [a,b,...others] = [1,2,3,4,5,6,7];
    // console.log(a,b,others);
/////////////////////////////////////////////
    //1
    //const [players1,players2] = game.players;
    // console.log(players1);
    // console.log(players2);
    
    //2
    // const [gk,...fieldPlayers]= players1;
    // console.log(gk,fieldPlayers);

    //3
    // const allplayers = [...players1,...players2];
    // console.log(allplayers);

    // //4
    // const players1Final = [...players1,"Thiage", "Coutinho", "Perisic"];
    // console.log(players1Final);

    //5
    //i dont know what youre asking here. 

    //6

    // printGoals("Davies","Muller","Lewandowski","Kimmich");
    
    // function printGoals(...playerNames) 
    // {
    //     for(let players of playerNames)
    //     console.log(players);
    //     console.log(`${playerNames.length} were scored in total.` );

    // }

    //7
    //   const {
    //       odds: {team1, x:draw,team2} 
    //     } = game;
    //     console.log(team1);
    // team1 < team2 && console.log("Team 1 is more likely to win because their odds are higher");
    // team2 <team1 && console.log("Team 2 is more likely to win because their odds are higher");







   


      
      


}

//  ✅ itterating over Object --- Objects.keys
//Object.entries returns an object as an array with the keys and values. 
//object.values will give  the values of the properties
//object.keys will return the properties.
{
    // const person = 
    // {
    //     name:"perrin",
    //     weight: 160,
    //     skills: ['Java','Css','HTML','JavaScript']
    // };

    // const skills = Object.entries(person);
    // console.log(skills);
}

//  ✅ coding challenge 
{
    // const game = {
    //     team1: 'Bayern Munich',
    //     team2: 'Borrussia Dortmund',
    //     players: [
    //       [
    //         'Neuer',
    //         'Pavard',
    //         'Martinez',
    //         'Alaba',
    //         'Davies',
    //         'Kimmich',
    //         'Goretzka',
    //         'Coman',
    //         'Muller',
    //         'Gnarby',
    //         'Lewandowski',
    //       ],
    //       [
    //         'Burki',
    //         'Schulz',
    //         'Hummels',
    //         'Akanji',
    //         'Hakimi',
    //         'Weigl',
    //         'Witsel',
    //         'Hazard',
    //         'Brandt',
    //         'Sancho',
    //         'Gotze',
    //       ],
    //     ],
    //     score: '4:0',
    //     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    //     date: 'Nov 9th, 2037',
    //     odds: {
    //       team1: 1.33,
    //       x: 3.25,
    //       team2: 6.5,
    //     },
    // };

    // const [b] = Object.entries(game);
    // console.log(b);

    // for(const [i, player] of game.scored.entries())
    // {
    //     console.log(`Goal ${i+1}: ${player}`);
    // }

    // //2
    // let average = 0;
    // for(const odd of Object.values(game.odds))
    // {
    //     average += odd;
    // }
    // console.log(`the total:  ${average/(Object.values(game.odds).length)}`);

    // for(const [team,odds] of Object.entries(game.odds))
    // {
    //     const teamStr = team === 'x'? `draw`: `vistory ${game[team]}`   
    //     console.log(`Odd of ${teamStr} : ${odds}`);
    // }

}
//  ✅ sets 
//they are also itteratable. 
{
    // const aSet = new Set([1,2,3,4]);
    // console.log(aSet.has(2));
    // aSet.add("new element");
    // console.log((aSet));

    // console.log((aSet)); 
    // const staff= ['waiter','cheff','manager','cheff','manager'];
    // const staffUnique = [...new Set(staff)];
    
    // const a = [...staffUnique];
    // console.log(new Set(['waiter','cheff','manager','cheff','manager']).size);
    
}

//  ✅ maps
{
    // const quiz = new Map([
    //     ['Question' , 'What is my name?'],
    //     [1,'Perrin'],
    //     [2,'Melwyn'],
    //     [3,"Eugene"],
    //     [4,"Premila"],
    //     ['Correct', 1],
    //     [true,'Correct answer. Good Job!'],
    //     [false, "Incorrect Answer. Try again next time."]
    // ]);

    // quiz.set['End, Thank you for trying our Quiz. Please leave your feedback.'];
    // console.log(`Quiz App version 1.1\n___________`);
    // console.log('Q:',quiz.get('Question'));
    // //console.log(quiz);
    // for(const [key,value] of quiz)
    // {
    //     if(typeof key === 'number')
    //     {
    //         console.log(`${key}: ${value}`);
    //     }
    // }

    // const answer = Number (prompt("Enter your answer: "));
    // console.log(quiz.get(answer === quiz.get('Correct')));

    // console.log(...quiz);
    

}

//  ✅ coding challenge
{
        /* 
    Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
    1. Create an array 'events' of the different game events that happened (no duplicates)
    2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
    3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
    4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
        [FIRST HALF] 17: ⚽️ GOAL
    GOOD LUCK 😀
    */

    // const gameEvents = new Map([
    //     [17, '⚽️ GOAL'],
    //     [36, '🔁 Substitution'],
    //     [47, '⚽️ GOAL'],
    //     [61, '🔁 Substitution'],
    //     [64, '🔶 Yellow card'],
    //     [69, '🔴 Red card'],
    //     [70, '🔁 Substitution'],
    //     [72, '🔁 Substitution'],
    //     [76, '⚽️ GOAL'],
    //     [80, '⚽️ GOAL'],
    //     [92, '🔶 Yellow card'],
    // ]);

    // const theEvents = new Set();
    // for(const [timeStamp,theEventsss] of gameEvents)
    // {
    //     theEvents.add(theEventsss);
    // }
    // console.log(theEvents);
    // const events = [...theEvents];
    // console.log(events);

    // gameEvents.delete(64);
    // console.log(gameEvents);

    // for(const [timeStamp,theEvent] of gameEvents)
    // {
    //     Number (timeStamp) > 45 && console.log(`[SECOND HALF] ${timeStamp}: ${theEvent}`);
    //     Number (timeStamp) < 45 && console.log(`[FIRST HALF] ${timeStamp}: ${theEvent}`);

    // }

    


}

//  ✅ coding challende 4
{
    // Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
// */
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', fix);

// function fix()
// {
//     let inputText = document.querySelector('textarea').value;
//     inputText = inputText.split(/\n/);
//     for(let x = 0; x<inputText.length; x++)
//     {
//         inputText[x]=inputText[x].trim().toLowerCase().replace('_','');
//         console.log(`${inputText[x].padEnd(20, ' ')}` + "✅".repeat(x+1));
//     } 
    
    
// }


}

//  ✅ String operations practice
{
//     const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

    // fixMe(flights);
    // function fixMe(flightsAPI)
    // {
    //     let splitFlightsString = flightsAPI.split('+');
    //     //console.log(splitFlightsString);
    //     for(let x = 0; x<splitFlightsString.length; x++)
    //     {
    //         splitFlightsString[x] = splitFlightsString[x].replace(/_/g,'').replace('Delayed', '🔴 Delayed ').split(';');
    //         //console.log(splitFlightsString[x]);
    //         const [dePatureInfo,from,to,time] = [...splitFlightsString[x]];
    //         console.log(`${dePatureInfo} ${from.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} (${time.replace(':','h')})`.padStart(40));
            
            

    //     }
       
    // }

}

//  ✅ callback and higher order function
{
    // const outPut = greetings => name => console.log(`${greetings} ${name}`);
    // outPut("Hi")("Perrin");
}


//  ✅ closure with a declared(regular) function and an arrow function.
//Closure:- A function has access to the variables environment(VE) of the Excecution context (EC) when the variables were created.
//Closure Infomal definition :- A function has access to the variables of its parent function, even if that function is declared at a global level and even if the function is returned. The function (calling function, it may be outside or inside) keeps a reference to its parent scope which preserves this parent scope throught the time. this happens because of Closure. 
//closure always has priority over scope chain. For example refer to example after the arrowclosure function.
{
//     let f;

//     function closure()
//     {
//         let num = 0;
//         f= function()
//         {
//             console.log(num=num+1);
//         }
//     }

//     closure();
//     f();
    
//     let g;
//     const  arrowClosure  = () => 
//     {
//         let aNum = 4;
//         g = function()
//         {
//             console.log(aNum=aNum+1);
//         }
//     }

//     arrowClosure();
//     g();
    
//     //here because of closure the closure scope is always given priority. Even though the groups is  assigned at the bottom it wont take it. You can expirement by commenting the let groups n/2 and assigning a number. then you will see that it gives priority to the groups =3 instead. 
//     //EXPECTED OUTPUT

//     /** Boarding will commence in 3 seconds 
//      * We are now boarding 100 passenegrs, seperated in groups of 2 with 50 passengers in each group. 
//      * Wait time to complete boarding is expected to be 15 seconds
//      * All passengers have boarded. Thank you for flying Emirates
//  */
//     const boardingPassengers = function(n,wait)
//     {
//         let groups = n/2;
//         setTimeout(function(){
//             console.log(`All passengers have boarded. Thank you for flying Emirates`);
//         },(wait*1000)*5)
//         setTimeout(function(){
//             console.log(`We are now boarding ${n} passenegrs, seperated in groups of 2 with ${groups} passengers in each group.` )
//             console.log(`Wait time to complete boarding is expected to be ${(wait*5)} seconds`);

//         },wait*1000);
        
//         console.log(`Boarding will commence in ${wait} seconds`);
//     }
//     const groups = 3;
//     boardingPassengers(100,3);

}

//  ✅ Coding challenge 5
{
    /*This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀
*/

/*
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/

    // (function () 
    // {
    //     const header = document.querySelector('h1');
    //     header.style.color = 'red';
    //     document.querySelector('body').addEventListener('click',function(){
    //         header.style.color = 'blue';
    //     });
    // })();

}


//✅ Coding challenge 6
{
    // const checkDogs = function(dogsJulia,dogsKate)
    // {
    //     let copyDogsJulia = [...dogsJulia];
    //     copyDogsJulia.splice(-2);
    //     copyDogsJulia.splice(0,1);
    //     console.log(copyDogsJulia);
    //     const bothDogs = [...copyDogsJulia,...dogsKate];
    //     console.log(bothDogs);
        
    //     bothDogs.forEach(function(age,i){
    //         age >= 3? console.log(`Dog number ${i+1} is an adult, and is ${age} years old`):console.log(`Dog number ${i+1} is a puppy, and is ${age} years old`);
    //     });
       

    // }
    // checkDogs([3,5,2,12,7],[4,1,15,8,3]);
}
// ✅ EVERYTHING BOUT ARRAYS
{
/* -------------------------------- TO MUTATE THE ARRAY------------------------------- */
/**  TO MUATE THE ORIGINAL ARRAY
 *  add to original---------------
    *  .push ---end
    *  .unshift ---- start
 *  remove from original----------
    *  .pop ---- removes from end and returns new array withtout that element
    *  .shift ---- removes from start and returns new array
    *  .splice ---- removes from anywhere or the entire array itself. 
 *  Others ------------------------
    *  .reverse
    *  .sort  
    * .fill 
 *  
 * TO CREATE A NEW ARRAY----------
 * .map -- computed from original (it loops through)   
 * .filter --- filters the array to give you filtered values in a new array      
 * .slice --- remove portion of the original and return new array
 * .concat -- combine two arrays and return new array
 * .flat --- same like spread operater flattens the array into a new array based on a parameter or no parameter for how deep into the array should the flattening be.
 * .flatMap --- flattens the array but based on a condition.
 * 
 * AN ARRAY INDEX-------------------
 * .indexOf --- based on value
 * .findIndex ----- based on test condition
 * 
 * AN ARRAY ELEMENT-------------
 * .find ----based on test condition
 * 
 * KNOW IF ARRAY INCLUDES---------
 * .includes --- based on value
 * .some ---test condition. It checks to see if there are any values that satisfy the condition.
 * .every--- test condition but every eement should satisfy the condition
 * 
 * A NEW STRING-------------
 * .join-- joins the array elements with a parameter like a , or a space etc.
 * 
 * TRANSFORM TO A VALUE
 * .reduce ---reduces based on a condition and accumelator.
 * 
 * TO JUST LOOP ARRAY
 * .forEach --- loops does not return a new array. 
 */

}

//✅  coading challenge  in arrays 4
{
    /** 
     * 
     * /* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
TEST DATA:

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
     *  
     */

// const dogs = [
//     { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//     { weight: 8, curFood: 200, owners: ['Matilda'] },
//     { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//     { weight: 32, curFood: 340, owners: ['Michael'] }
//     ];

//     //1
//     dogs.forEach(arr => arr.recommendedFoodPortion = arr.weight ** 0.75 * 28);
//     // dogs.forEach(arr=> console.log(arr.recommendedFoodPortion));

//     //2
//     const a = dogs.find(function(arr,i){
//         if(arr.owners.includes('Sarah'))
//         {
//             return arr;
//         }
//     })
//     console.log(a);


//     const healthy = a.curFood > (a.recommendedFoodPortion *0.90) && a.curFood < (a.recommendedFoodPortion * 1.10)? true: false;
//     console.log(`${healthy?'healthy': 'unheathy'}`);

//     //3
//     const ownersEatTooMuch = dogs.filter(arr=> arr.curFood > arr.recommendedFoodPortion).flatMap(arr => arr.owners);
//     console.log(ownersEatTooMuch);
//     const ownersEatTooLess = dogs.filter(arr => arr.curFood <arr.recommendedFoodPortion).flatMap(arr => arr.owners);
//     console.log(ownersEatTooLess);

//     //4

// //     console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
// // console.log(`${ownersEatTooLess.join(' and ')}'s dogs eat too little!`);
//    console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much! and ${ownersEatTooLess.join(" and ")}'s dogs eat too less`);


}

//✅  Dates
// {
//      const now = new Date();
//      console.log(now);
//      console.log(new Date('December 23,2015'));
}
