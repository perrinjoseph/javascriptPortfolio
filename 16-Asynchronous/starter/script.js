'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const btnLatLng = document.querySelector('.latlng');

///////////////////////////////////////
// getCountryAndNeighbour('USA');



// function renderCountry(data,className =''){
//     const html =`
//         <article class="country ${className}">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//         <h3 class="country__name">"${data.name}"</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${+data.population}</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//     </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend',html);
//     // countriesContainer.style.opacity = 1;
// }

// // function getCountryAndNeighbour (name){
// //     //AJAX country 1
// //     const request = new XMLHttpRequest();
// //     request.open('GET',`https://restcountries.eu/rest/v2/name/${name}`);
// //     request.send();

// //     request.addEventListener('load',function(){
// //         const [data] = JSON.parse(this.responseText);
// //         console.log(data);
        
// //         //render country
// //         renderCountry(data);

// //         //get neighbour country (2)
// //         const [neighbour] = data.borders;
// //         if(!neighbour)return;
// //         // we can do this if we need to keep printing all its neighbours. 
// //         // getCountryAndNeighbour(neighbour);

// //         //we want to only print one neighbour so we should just make a second ajax call.
// //         //AJAX country 2
// //         const request2 = new XMLHttpRequest();
// //         request2.open('GET',`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
// //         request2.send(); 

// //         request2.addEventListener('load',function(){
// //             const data2 = JSON.parse(this.responseText);
// //             renderCountry(data2,'neighbour')
// //         });
// //     });
// // }

// // getCountryAndNeighbour('UAE');


// const renderError = function(msg)
// {
//     countriesContainer.insertAdjacentText('beforeend',msg);
//     // countriesContainer.style.opacity = 1;
// }

// const getJSON = function(url,error = 'Something went wrong'){
//     return fetch(url).then(response=>{
//         if(!response.ok)
//         throw new Error(`Country Not Found ${response.status} ${error}`);
//         return response.json()
//     })
// }

// const getCountryData = function(country)
// {
//     getJSON(`https://restcountries.eu/rest/v2/name/${country}`,'Country not found')
//     .then(data=>{
//         renderCountry(data[0]);const neighbours = data[0].borders[0];
//         if(!neighbours) throw new Error('');
//         return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbours}`,'Neighbout Not Found');
//     })
//         .then(neighbourData=>
//         renderCountry(neighbourData,'neighbour'))
//         .catch(err => {
//             console.error(`${err} ❌`)
//             renderError(`Some went wrong!❌ ${err.message}. Try again.`)
//         })
//         .finally(()=> {
//             countriesContainer.style.opacity = 1;
//         })
// }

// btn.addEventListener('click',function(){
//     getCountryData('UAE');
// })



// /* ---------------------------- CODING CHALLENGE ---------------------------- */

// const renderCountryInfo = function(data){
//     const html =`
//     <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//     <h3 class="country__name">"${data.name}"</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${+data.population}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
// </article>`;
// countriesContainer.insertAdjacentHTML('beforeend',html);
// countriesContainer.style.opacity = 1;

// }

// const getCountryInformation = function(country){
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(response => {
//         if(!response)throw new Error(`Cannot find country ${response.status} ${response.statusText}`)
//         console.log(response);
//         return response.json();
//     }).catch(err=> console.error(`${err} ❌`)).then(data=> {
//         if(!data) throw new Error(`The data could not be loaded. Try again later. ${response.status} ${response.statusText}`)
//         console.log(data);
//         const theCountry = data[0];
//         renderCountryInfo(theCountry);
//     }).catch(err=> console.error(`${err} ❌`));
// }


// const whereAmI = function (lat,lng){
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response=>{
//         console.log(response);
//         if(!response) 
//         throw new Error(`Could not find  ${response.statusText} (${response.statusText})`);

//         if(response.status ==403)
//         throw new Error(`This API only allows 3 calls per second. ${response.status} ${response.statusText}`);
//         return response.json();
//     }).catch(err=> console.error(`${err} ❌`))
//     .then(data=> {
//         console.log(data);
//         const {country,city} = data;
//         if(!country || !city)
//         throw new Error(`City and Country cannot be found or is undefined ${response.statusText} (${response.statusText})`);
//         console.log(`You are in ${city}, ${country}`);
//         getCountryInformation(country);
//     }).catch(err=> console.error(`${err} ❌`))
// }


// btnLatLng.addEventListener('click',start =>
// whereAmI(52.508,13.381));

// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//       setTimeout(resolve, seconds * 1000);
//     });
//   };

// const imgContainer = document.querySelector('.images');

// const createImage = function(imgPath){
//     return new Promise(function(resolve,reject){
//         const img = document.createElement('img');
//         img.src = imgPath;

//         img.addEventListener('load',function(){
//             imgContainer.append(img);
//             resolve(img);
//         })

//         img.addEventListener('error',function(){
//             reject( new Error("Image does not exist"));
//         })
//     })
// }

// let currentImg;
// createImage('img/img-1.jpg')
// .then(img=>{
//     currentImg = img;
//     console.log('1st img loaded');
//     return wait(2);
// }).then(()=> {
//     console.log('2 seconds passed')
//     currentImg.style.display = 'none';
//     return wait(2);
// }).then(()=>{
//     console.log(`2nd img has loaded`);
//     return createImage('img/img-2.jpg');
// }).then(img=>{
//     currentImg= img;
//     return wait(2);
// }).then(()=>{
//     currentImg.style.display = 'none';
//     console.log('2nd Img goes away. THE END...');
// }).catch(err=> console.error(`A CUSTOM ${err}`))



  
// const wait = function (seconds) {
//         return new Promise(function (resolve) {
//           setTimeout(resolve, seconds * 1000);
//         });
// };

// const a = async function(){
//     const somfin = await wait(2);
//     console.log('hey')
// } 

// console.log(a());
// const getJSON = function(url,error = 'Something went wrong'){
//         return fetch(url).then(response=>{
//             if(!response.ok)
//             throw new Error(`Country Not Found ${response.status} ${error}`);
//             return response.json()
//         })
//     }
// const get3Countries = async function(c1,c2,c3){
//     try{
//         // const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`);
//         // const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`);
//         // const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`);


//         const output = await Promise.all([getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)]);
       

//         console.log(output.map(el=>el[0].capital));
//     }
//     catch(err){
//         console.error(`SOMETHING WENT WRONG ${err}`);
//     }
// } 

// get3Countries('portugal','canada','tanzania');

// ocnst createImg = function(imgPath)
// {return new Promise(function(resolve,reject){
    //             const img = document.createElement('img');
    //             img.src = imgPath;
    
    //             img.addEventListener('load',function(){
        //                 imgContainer.append(img);
        //                 resolve(img);
        //             })
        
        //             img.addEventListener('error',function(){
            //                 reject( new Error("Image does not exist"));
            //             })
            //         })
            // }
            
const imgContainer = document.querySelector('.images');

const createImg = function(imgPath,par)
{
    return new Promise(function(resolve,reject)
    {
        const img = document.createElement('img');
        img.src = imgPath;
        img.addEventListener('load',function(){
            if(par)img.classList.add(par)
            imgContainer.append(img);
            resolve(img);
        })
        img.addEventListener('error',function(){
            reject( new Error('The Image could not be loaded'))
        })
    })
}
            
const loadAll = async function(imgPaths)
{
    try{

    const imgs = imgPaths.map(async img=> await createImg(img));
    console.log(imgs);
    const allSetteledValues = await Promise.all(imgs);
    allSetteledValues.forEach(el=>el.classList.add('parallel'));
    console.log(allSetteledValues);
    }
    catch(err){
        console.log(err);
    }
        
}

loadAll(['img/img-1.jpg','img/img-2.jpg','img/img-3.jpg']);

