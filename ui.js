function showTemperature(response){

    console.log(response.data);

    let temperature = document.querySelector("#col-temp1");
    temperature.innerHTML = Math.round(response.data.main.temp);
    
}


let apikey ="52972406f32773a9b6df9fc438d70ab1";

let apiurl = 
`https://api.openweathermap.org/data/2.5/weather?q=Abuja&appid=52972406f32773a9b6df9fc438d70ab1&units=standard`;

 console.log(apiurl);

 axios.get(apiurl).then(showTemperature);
