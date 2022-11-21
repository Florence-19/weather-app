function formatDate(timestamp) {
  let now = new Date(timestamp);
  let hour = date.getHour();
  let seconds = date.getSeconds();
    if (seconds < 10) {
    seconds = `0${seconds}`; }


    let days = ["Sunday",
  "Monday",
"Tuesday", 
"Wednesday",
"Thursday",
"Friday",
"Saturday"];

let dayindex = date.getDay();

let year = date.getFullyear();

 
}


function showTemperature(response){

    let temperature = document.querySelector("#col-temp1");
    let times = document.querySelector("#times");
    let temperat = document.querySelector("#col-temp2");
    let discription = document.querySelector("#discription");
    let wind = document.querySelector("#col-temp2");
    let time = document.querySelector("#time");
    temperature.innerHTML = Math.round(response.data.main.temp);
    times.innerHTML = response.data.sys.sunrise;
    temperat.innerHTML = response.data.main.temp_max;
    discription.innerHTML = response.data.weather[0].description;
    wind.innerHTML = Math.round(response.data.wind.speed);
    time.innerHTML = formatDate(response.data.dt*1000);
    console.log(response.data);
}



let apikey ="52972406f32773a9b6df9fc438d70ab1";
let apiurl = 
`https://api.openweathermap.org/data/2.5/weather?q=Abuja&appid=52972406f32773a9b6df9fc438d70ab1&units=metric`;



 axios.get(apiurl).then(showTemperature);

 


 function houseup(event){
    event.preventDefault();
    let inputCity = document.querySelector("#find-a-city");
  showTemperature(inputCity.value);
}

let form = document.querySelector("#form");
form.addEventListener("submit", houseup);
