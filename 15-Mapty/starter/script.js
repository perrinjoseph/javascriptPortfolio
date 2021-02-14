'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


class Workout {
    date = new Date();
    id = (Date.now()+ '').slice(-10);
    constructor(coords,distance,duration){
        this.coords = coords;// [lat,lng] its a arary
        this.distance = distance;
        this.duration = duration;

    }
}

class Running extends Workout {
    constructor(coords,distance,duration,cadence)
    {
        super(coords,distance,duration);
        this.cadence = cadence;
        this.calcpace();
        this.type = "running";
    }

    calcpace()
    {
        //min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

class Cycling extends Workout {
    constructor(coords,distance,duration,elevationGain)
    {
        super(coords,distance,duration);
        this.elevationGain = elevationGain;
        this.type = "cycling";
    }

    calcSpeed()
    {
        //km/hr
        this.speed = this.distance/(this.duration / 60)
        return this.speed;
    }
    
}

// const run1 = new Running([39,-12],5.2,24,178);
// const cycling1 = new Cycling([39,-12],27,95,523);
// console.log(run1,cycling1);
/* ------------------------ APPLICATION ARCHITECTURE ------------------------ */

class App {
    #map;
    #mapEvent;
    #mapZoomLevel=13;
    #workouts = [];
    // #workouts;
    
    constructor(){
        this._getPosition();
        form.addEventListener('submit',this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
        
    }

    _getPosition(){
       navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function(){
           alert("Could not get your position");
        });
    }

    _loadMap(position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        // console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);
    
        const coords = [latitude, longitude];
    
        if(this.#map){}else{
        this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
        }
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.#map);
    
        // Handling clicks on map
        this.#map.on('click', this._showForm.bind(this))
      }
    
    _showForm(mapE){
        this.#mapEvent = mapE;
            form.classList.remove('hidden');
            inputDistance.focus();
    }

    _toggleElevationField(){
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e){
        e.preventDefault();
        //helper functions
        const validInput = (...inputs)=> inputs.every(imp=>Number.isFinite(imp));
        const allPositive = (...inputs)=> inputs.every(im =>im>0);


        //get data from form
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const {lat,lng} = this.#mapEvent.latlng;
        let workout;


        //check if data valid

        // if activity running create runing object
        if(type === 'running')
        {
            const cadence = +inputCadence.value;
            // if(!Number.isFinite(distance) || !Number.isFinite(duration) || !Number.isFinite(cadence))return alert("input has to be positive numbers")
            if(!validInput(distance,duration,cadence) || !allPositive(distance,duration,cadence))
            {
                return alert("Inputs have to be positive number!");
            }
            workout = new Running([lat,lng],distance,duration,cadence);
            this.#workouts.push(workout);
            console.log(this.#workouts);
        }
        //if activity cycling then...
        if(type === 'cycling')
        {
            const elevation = +inputElevation.value;
            if(!validInput(distance,duration,elevation)|| !allPositive(distance,duration))
            {
                return alert("Inputs have to be positive number!");
            }
            workout = new Cycling([lat,lng],distance,duration,elevation);
            this.#workouts.push(workout);
            console.log(this.#workouts);

        }
        
        //add new object to workout array

        //render workout on map as marker. 
        this._renderWorkoutMarker(workout)

        //render workout on list

        //hide form + clear input fields

        
    }

    _renderWorkoutMarker(workout){
        L.marker(workout.coords).addTo(this.#map)
                .bindPopup(L.popup({  
                    maxWidth: 250,
                    minWidth: 100,
                    autoClose: false,
                    closeOnClick: false,
                    className: `${workout.type}-popup`
                }))
                .setPopupContent("A Workout")
                .openPopup();
    }

    _renderWorkout (workout){

    }

}

const app = new App();
app._getPosition();


// form.addEventListener('submit',function(a){
//     a.preventDefault();
//     inputDistance.value = inputDuration.value = inputElevation.value =inputCadence.value='';
//     

// });
