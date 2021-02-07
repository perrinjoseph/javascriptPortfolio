'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

//---SPLIT TEST---
//test environment for username

// const aName = account1.owner.split(' ');
// const shortNameArray = aName.map((name)=>name.slice(0,1).toLowerCase());
// const userName =shortNameArray.toString().replace(',','');
// console.log(userName);

//---{GENERATE USERNAME}SPLITTING THE USERNAME TO GET THE INITIALS---
const userNameCreation = function(account)
{
  account.forEach(function(acc){
    let ownerName = acc.owner;
    acc.userName = ownerName.toLowerCase().split(' ').map(name=>name[0]).join('');
  });
}
userNameCreation(accounts);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsForUsd = movements.map(mov=>mov*eurToUsd);
// console.log(movementsForUsd);


//---CREATING A MOVEMENT DESCRIPTTION FOR LOGGIN OR FOR THE APP---
const movementDescription = account1.movements.map((mov,i,arr) => {
  return `Movement ${i+1}: You ${mov>0?'deposited ':'withdrew '}${Math.abs(mov)}`
});
// console.log(movementDescription);



//----DISPLAYING ALL THE MOVEMENTS AS A ROW IN THE CONTAINER ELEMENT----
const displayMovements = function(movements, sort = false)
{
  if(movements !== undefined)
  {containerMovements.innerHTML ='';
  const mov = sort? sortArray(currentAccount): movements;
  mov.forEach(function (mov,i) {
    const type = mov > 0 ? `deposit`: `withdrawal`;
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin',html);

  });}
}
// displayMovements(account1.movements);


//------CREATING THE CURRENT BALANCE AND LOADING IT-----

const calPrintBalance = function(acc)
{
  acc.balance = acc.movements.reduce((bal,current)=> bal+current);
  labelBalance.textContent=`${acc.balance}€`;
}
// calPrintBalance(account1.movements);


//----GET THE MAXIMUM VALUE IN MOVEMENTS---
const max = movements.reduce((highest,current)=>{
  if(highest>current)
  {
    return highest;
  }
  else
  {
    return current;
  }
},movements[0]);
// console.log(max);


//----CALCULATE THE DISPLAY SUMMARY FOR IN AND OUT AND INTEREST
const calDisplaySummary = function(acc)
{
  const interestVal = acc.interestRate/100;
  //----CREATE IN LABEL ON APPLICATION ---
  const inTotal = acc.movements.filter(current => current > 0).reduce((acc,curr)=> acc+curr,0);
  labelSumIn.textContent = `${inTotal}€`;
  //----CREATE OUTLABEL ON APPLICATION ---
  const outTotal = acc.movements.filter(current => current < 0).reduce((acc,curr)=> acc+curr,0);
  labelSumOut.textContent = `${Math.abs(outTotal)}€`;

  //----CREATE INTEREST ON APPLICATION ---
  // works but this one calculates the total interest whether the interest amt for that movement is > 1€ or not.
  // const interest = (movements.filter(current => current > 0).reduce((acc,curr)=> acc+curr,0)) *interestVal;

  //this one calculates with the condition that the interest amt will be accumelated only if it is > 1€
  const interest = acc.movements.filter(current => current > 0).map((val,i,arr)=>val *interestVal).filter(curr=>curr>1).reduce((acc,value,i,arr)=>acc+value,0);
  labelSumInterest.textContent = `${interest}€`
}
// calDisplaySummary(movements);
 
/* ----------------------------- UPDATING THE UI ---------------------------- */

const updateUI =function(currentAccount)
{
  //display movements
  displayMovements(currentAccount.movements);
  //displace balance
  calPrintBalance(currentAccount);
  //display smmary
  calDisplaySummary(currentAccount);
}

/* ------------------------- EVENT HANDLER FOR LOGIN ------------------------ */
let currentAccount;
btnLogin.addEventListener('click',function(e){
  //Usually when a form button is clicked the page is made to reload by default. e.preventDefault() tells the page not to reload so that we can have the login on the console.
  e.preventDefault();
  currentAccount = accounts.find((current,i)=>current.userName ===inputLoginUsername.value)
  // console.log(currentAccount);
  //optional chaining you can use a ? to check if a variable has a value or not this is new too.
  // the variable .pin will only be read in case the current account exists(this is done with thte help of the ?. It is called optional chaining)
  if(currentAccount?.pin === +(inputLoginPin.value))
  {
    //display UI 
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = '100';
    //clear login details so it dosnt show in the textboxes
    inputLoginUsername.value = inputLoginPin.value ='';
    //removes the focus on this eelement. such as blinking cursor or clicked text field.
    inputLoginPin.blur();
    startLogOutTimer();
    updateUI(currentAccount);
    
  } 

})

//
const startLogOutTimer = function(){
  let time = 10;
  const timer = setInterval(function()
    {
      // set the time with total seconds required. 
      
      let min = String(Math.trunc(time/60)).padStart(2,0);
      let sec = String(Math.trunc(time%60)).padStart(2,0);

      time--;
      labelTimer.textContent = `${min}:${sec}`;

      if(time === 0)
    {
      clearInterval(timer);
      labelTimer.textContent = ``;
      currentAccount=undefined;
      containerApp.style.opacity=0;
    }
    },1000);

    
  }
/* ---------------- EVENT HANDLING FOR TRANSFER FUNCTIONALITY --------------- */

btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const receiverAcc = accounts.find((current,i)=>current.userName === inputTransferTo.value);
  const amount = +(inputTransferAmount.value);
  console.log(receiverAcc);
  console.log(amount);
  if(amount >0 && receiverAcc && currentAccount.balance >=amount && receiverAcc?.userName !== currentAccount.userName){
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
    inputTransferTo.value  = '';
    inputTransferAmount.value = ''
    inputTransferTo.blur();
    inputTransferAmount.blur();
  }
  else{
    console.log('invalid input')
  }
  // currentAccount.movements.push(-amount);
  // receiverAcc.movements.push(amount);
});

/* ------------------------------ REQUEST LOAN ------------------------------ */
btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  const amount = +(inputLoanAmount.value);
  if(amount > 0 && currentAccount.movements.some(mov=> mov >=amount * 0.1))
  {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    inputLoanAmount.value='';
    inputLoanAmount.blur();
  }
  

});

/* ------------------------------- SORT BUTTON ------------------------------ */
let sortState = false;
btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements , !sortState);
  sortState = !sortState;
})

/* ----------------- EVENT HANDELER FOR CLOSING THE ACCOUNT ----------------- */

btnClose.addEventListener('click' , function(e){
  e.preventDefault();
  if(inputCloseUsername.value === currentAccount.userName && +(inputClosePin.value) === currentAccount.pin)
  {
    const idexOfAccount = accounts.findIndex(acc=>acc.userName === currentAccount.userName);
    accounts.splice(idexOfAccount,1);
    // console.log(accounts);
    containerApp.style.opacity = '0';
    inputCloseUsername.value = inputClosePin.value = '';
    console.log(accounts);
  }
  else
  {
    console.log('Incorrect credentials') ;
  }

});

/* ----------------------------- SORT MOVEMENTS ----------------------------- */
//do not maupilate the original array. createa a copy
function sortArray(currentAccount)
{
  const movCopy = [...currentAccount.movements];
  const sortedArray = movCopy.sort((a,b)=> a-b)
  return sortedArray;
}



/////////////////////////////////////////////////


